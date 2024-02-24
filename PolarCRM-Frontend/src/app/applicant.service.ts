import { Injectable } from "@angular/core";
import { ApplicantData, ApplicantDataDetail } from './interfaces';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ApplicantService {
    
    domain = `${environment.serverUrl}/api/applicants/`;
    openCountUrl = this.domain + "open-count";
    previewAllApplicantsUrl = this.domain + "preview/all";
    previewCurrentApplicantsUrl = this.domain + "preview/current";
    detailOneApplicantUrl = this.domain + "detail/";
    updateApplicantUrl = this.domain + "update/";

    constructor(
        private http: HttpClient,
        private authService: AuthService
    ){}

    getNumberOfOpens(): Observable<number> {
        return this.http.get<number>(this.openCountUrl, { params: { lc: this.authService.user.lc } });
    }

    getApplicants(archived: boolean): Observable<ApplicantData[]> {
        if(archived) {
            return this.http.get<ApplicantData[]>(this.previewAllApplicantsUrl, { params: { lc: this.authService.user.lc } });
        }else {
            return this.http.get<ApplicantData[]>(this.previewCurrentApplicantsUrl, { params: { lc: this.authService.user.lc } });
        }
    }

    getApplicantDetails(_id: number): Observable<ApplicantDataDetail> {
        return this.http.get<ApplicantDataDetail>(
            this.detailOneApplicantUrl + _id.toString(),
            {
                headers: { 'Access-Control-Allow-Origin': '*' },
                params: { lc: this.authService.user.lc }
            }
        );
    }

    updateApplicant(applicant: ApplicantDataDetail): Observable<ApplicantDataDetail> {
        return this.http.put<ApplicantDataDetail>(
            this.updateApplicantUrl,
            applicant,
            { 
              headers: {'Access-Control-Allow-Origin': '*'},
              params: { lc: this.authService.user.lc }
            }
        );
    }
}
