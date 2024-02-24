import { Injectable } from '@angular/core';
import { ApplicantStageType, ApplicantStageTypeDisplay, FunctionType, FunctionTypeDisplay, LcType, LcTypeDisplay, MemberStageType, MemberStageTypeDisplay, RoleType, RoleTypeDisplay, applicantStageMap, functionMap, lcMap, memberStageMap, roleMap } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() { }

  public getApplicantStageDisplayValue(stage: ApplicantStageType): ApplicantStageTypeDisplay | string {
    if (applicantStageMap.has(stage)) {
      return applicantStageMap.get(stage) as ApplicantStageTypeDisplay;
    } else {
      return 'Unknown';
    }
  }

  public getMemberStageDisplayValue(stage: MemberStageType): MemberStageTypeDisplay | string {
    if (memberStageMap.has(stage)) {
      return memberStageMap.get(stage) as MemberStageTypeDisplay;
    } else {
      return 'Unknown';
    }
  }

  public getMemberRoleDisplayValue(role: RoleType): RoleTypeDisplay | string {
    if (roleMap.has(role)) {
      return roleMap.get(role) as RoleTypeDisplay;
    } else {
      return 'Unknown';
    }
  }

  public getMemberFunctionDisplayValue(functionName: FunctionType): FunctionTypeDisplay | string {
    if (functionMap.has(functionName)) {
      return functionMap.get(functionName) as FunctionTypeDisplay;
    } else {
      return 'Unknown';
    }
  }

  public getLcDisplayValue(lc: LcType): LcTypeDisplay | string {
    if (lcMap.has(lc)) {
      return lcMap.get(lc) as LcTypeDisplay;
    } else {
      return 'Unknown';
    }
  }
}
