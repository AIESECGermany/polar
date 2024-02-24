import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from '@abacritt/angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { PerformanceManagementComponent } from './performance-management/performance-management.component';
import { MembersComponent } from './members/members.component';
import { RecruiterDetailComponent } from './recruiter-detail/recruiter-detail.component';
import { LoginComponent } from './login/login.component';
import { MembersDetailComponent } from './members-detail/members-detail.component';
import { PerformanceManagementDetailsComponent } from './performance-management-details/performance-management-details.component';
import { ResponsiveDialogComponent } from './responsive-dialog/responsive-dialog.component';
import { environment } from 'src/environments/environment';
import { InternalLayoutComponent } from './internal-layout/internal-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    RecruitmentComponent,
    PerformanceManagementComponent,
    MembersComponent,
    RecruiterDetailComponent,
    LoginComponent,
    MembersDetailComponent,
    PerformanceManagementDetailsComponent,
    ResponsiveDialogComponent,
    InternalLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    MatTreeModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule,
    MatExpansionModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
                environment.googleClientId
              )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
