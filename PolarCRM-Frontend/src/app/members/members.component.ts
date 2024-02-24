import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FunctionType, FunctionTypeDisplay, LcType, LcTypeDisplay, MemberData, MemberStageType, MemberStageTypeDisplay, RoleType, RoleTypeDisplay } from '../interfaces';
import { MembersDetailComponent } from '../members-detail/members-detail.component';
import { MemberService } from '../member.service';
import { MatChipSelectionChange } from '@angular/material/chips';
import { DisplayService } from '../display.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit{
  displayedColumns: string[] = ['_id', 'firstName', 'familyName', 'lc', 'stage', 'role-current', 'team-current', 'membershipVerified'];
  dataSource: MatTableDataSource<MemberData>;
  members: MemberData[] = [];
  memberCounter: number = 0;
  filteredMembers: number = 0;
  includeArchived: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private memberService: MemberService,
    private displayService: DisplayService,
    private snackbar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.fetchMembers();
    this.memberService.getNumberOfMembers().subscribe(counter => {
      this.memberCounter = counter;
    })
  }

  fetchMembers() {
    try {
      this.memberService.getMembers(this.includeArchived).subscribe(members => {
        this.members = members;
        this.dataSource = new MatTableDataSource(this.members);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    } catch (err) {
      if(err instanceof Error) {
        this.snackbar.open(err.message, "", { duration: 5000 });
      } else {
        this.snackbar.open("Members could not be fetched", "", { duration: 5000 });
      }
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.filteredMembers = this.dataSource.filteredData.length;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  filterArchived(event: MatChipSelectionChange) {
    this.includeArchived = event.source.selected;
    this.fetchMembers();
  }

  openDetails(id: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = id;
    dialogConfig.width = '80vw';
    dialogConfig.height = '80vh';

    this.dialog.open(MembersDetailComponent, dialogConfig);
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

  transformLc(lc: LcType): LcTypeDisplay | string {
    return this.displayService.getLcDisplayValue(lc);
  }
}
