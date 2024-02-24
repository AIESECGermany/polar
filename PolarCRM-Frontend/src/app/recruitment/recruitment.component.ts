import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RecruiterDetailComponent } from '../recruiter-detail/recruiter-detail.component';
import { ApplicantData, ApplicantStageType, ApplicantStageTypeDisplay, LcType, LcTypeDisplay } from '../interfaces';
import { ApplicantService } from '../applicant.service';
import { MatChipSelectionChange } from '@angular/material/chips';
import { DatetimeService } from '../datetime.service';
import { DisplayService } from '../display.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.scss']
})

export class RecruitmentComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'firstName', 'familyName', 'lc', 'stage', 'createdAt'];
  dataSource: MatTableDataSource<ApplicantData> = new MatTableDataSource<ApplicantData>();
  applicants: ApplicantData[] = [];
  openCounter: number = 0;
  filteredApplicants: number = 0;
  includeArchived: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private applicantService: ApplicantService,
    private datetimeService: DatetimeService,
    private displayService: DisplayService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.fetchApplicants();
    this.applicantService.getNumberOfOpens().subscribe(counter => {
      this.openCounter = counter;
    })
  }

  fetchApplicants() {
    try {
      this.applicantService.getApplicants(this.includeArchived).subscribe(applicants => {
        this.applicants = applicants;
        this.dataSource.data = this.applicants;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    } catch (err) {
      if(err instanceof Error) {
        this.snackbar.open(err.message, "", { duration: 5000 });
      } else {
        this.snackbar.open("Applicants could not be fetched", "", { duration: 5000 });
      }
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.filteredApplicants = this.dataSource.filteredData.length;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  filterArchived(event: MatChipSelectionChange) {
    this.includeArchived = event.source.selected;
    this.fetchApplicants();
  }


  openDetails(id: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = id;
    dialogConfig.width = '80vw';
    dialogConfig.height = '80vh';

    this.dialog.open(RecruiterDetailComponent, dialogConfig);
  }

  transformStageView(stage: ApplicantStageType): ApplicantStageTypeDisplay | string {
    return this.displayService.getApplicantStageDisplayValue(stage);
  }

  transformDate(date: string): string {
    return this.datetimeService.transformDate(date);
  }

  transformLc(lc: LcType): LcTypeDisplay | string {
    return this.displayService.getLcDisplayValue(lc);
  }
}
