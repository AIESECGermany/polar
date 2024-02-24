import { Injectable } from '@angular/core';
import { MemberData, MemberDataDetail, ApplicantDataDetail } from './interfaces';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  domain = `${environment.serverUrl}/api/members/`;
  memberCountUrl = this.domain + "count";
  previewAllMembersUrl = this.domain + "preview/all";
  previewCurrentMembersUrl = this.domain + "preview/current";
  detailOneMemberUrl = this.domain + "detail/";
  createNewMemberUrl = this.domain + "new";
  updateMemberUrl = this.domain + "update/";
  addNewRoleUrl = this.domain + "add-new-role/";

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ){}

  getNumberOfMembers(): Observable<number> {
    return this.http.get<number>(this.memberCountUrl, { params: { lc: this.authService.user.lc }});
  }

  getMembers(archived: boolean): Observable<MemberData[]> {
    if(archived) {
      return this.http.get<MemberData[]>(this.previewAllMembersUrl, { params: { lc: this.authService.user.lc }});
    }else {
      return this.http.get<MemberData[]>(this.previewCurrentMembersUrl, { params: { lc: this.authService.user.lc }});
    }
  }

  getMemberDetails(_id: number): Observable<MemberDataDetail> {
    return this.http.get<MemberDataDetail>(
      this.detailOneMemberUrl + _id.toString(), 
      {
        headers: {'Access-Control-Allow-Origin': '*'},
        params: { lc: this.authService.user.lc }
      }
    );
  }

  createNewMember(member: ApplicantDataDetail): Observable<string>{
    return this.http.post<string>(this.createNewMemberUrl, member, { params: { lc: this.authService.user.lc }});
  }

  updateMember(member: MemberDataDetail): Observable<MemberDataDetail> {
    return this.http.put<MemberDataDetail>(
      this.updateMemberUrl,
      member,
      {
        headers: {'Access-Control-Allow-Origin': '*'},
        params: { lc: this.authService.user.lc }
      }
    );
  }

  addNewRole(member: MemberDataDetail): Observable<MemberDataDetail> {
    return this.http.put<MemberDataDetail>(
      this.addNewRoleUrl,
      member,
      {
        headers: {'Access-Control-Allow-Origin': '*'},
        params: { lc: this.authService.user.lc }
      }
    );
  }
}
