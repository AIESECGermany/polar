import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MemberDataDetail, Comment, MemberStageType, MemberStageTypeDisplay, RoleType, RoleTypeDisplay, FunctionType, FunctionTypeDisplay } from '../interfaces';
import { MemberService } from '../member.service';
import { DatetimeService } from '../datetime.service';
import { DisplayService } from '../display.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.scss']
})
export class MembersDetailComponent implements OnInit {
  ready: boolean = false;
  form: FormGroup;
  comments: string[];
  newComment: string;
  memberDetails: MemberDataDetail;

  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<MembersDetailComponent>,
      @Inject(MAT_DIALOG_DATA) public id: number,
      private memberService: MemberService,
      private datetimeService: DatetimeService,
      private displayService: DisplayService,
      private snackbar: MatSnackBar
    ) { }

  ngOnInit() {
    this.form = this.fb.group({
        id: [this.id]
    });
    
    this.comments = [];
    this.newComment = "";
    this.fetchMemberDetails();
  }

  fetchMemberDetails() {
    try {
      this.memberService.getMemberDetails(this.id).subscribe(memberData => {
        this.memberDetails = memberData;
        this.ready = true;
      });
    } catch (err) {
      if(err instanceof Error) {
        this.snackbar.open(err.message);
      } else {
        this.snackbar.open("Member Details could not be fetched");
      }
    }
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
    this.ready = false;
  }

  addComment() {
    if (this.newComment != "") {
      const newComment: Comment = {
        changedAt: new Date(),
        entry: this.newComment,
        userTyped: true
      };
      this.memberDetails?.comments.push(newComment);
      this.memberService.updateMember(this.memberDetails)
      .subscribe(updatedMember => {
        this.memberDetails.comments = updatedMember.comments;
      });
      this.newComment = "";
    }
  }

  transformDateAndTime(date: any): string {
    return this.datetimeService.transformDateAndTime(date);
  }

  transformDate(date: any): string{
    return this.datetimeService.transformDate(date);
  }

  transformStageView(stage: MemberStageType): MemberStageTypeDisplay | string {
    return this.displayService.getMemberStageDisplayValue(stage);
  }

  transformRoleView(role: RoleType): RoleTypeDisplay | string {
    return this.displayService.getMemberRoleDisplayValue(role);
  }

  transformFunctionView(functionName: FunctionType): FunctionTypeDisplay | string {
    return this.displayService.getMemberFunctionDisplayValue(functionName);
  }
}
