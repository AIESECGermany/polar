import { Component } from '@angular/core';
import { MemberService } from '../member.service';
import { MemberData } from '../interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-performance-management',
  templateUrl: './performance-management.component.html',
  styleUrls: ['./performance-management.component.scss']
})
export class PerformanceManagementComponent {

  public includeArchived: boolean = false;
  public members: MemberData[];
  public selectedMemberId: number = 3;
  public ready: boolean = false;

  constructor(
    private memberService: MemberService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    try {
      this.memberService.getMembers(this.includeArchived).subscribe(members => {
        this.members = members;
        this.ready = true;
      });
    } catch (err) {
      if(err instanceof Error) {
        this.snackbar.open(err.message, "", { duration: 5000 });
      } else {
        this.snackbar.open("Members could not be fetched", "", { duration: 5000 });
      }
    }
  }
}
