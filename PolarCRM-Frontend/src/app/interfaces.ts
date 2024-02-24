export interface UserCredentials {
  token: string;
  role: UserRole;
  lc: string;
}

export type UserRole = "admin" | "national" | "local" | "none";
export interface Comment {
  changedAt: Date;
  entry: string;
  userTyped: boolean;
}

export interface UserData {
  _id: number;
  createdAt: Date;
  lc: string;
  firstName: string;
  familyName: string;
}

export interface UserDataDetail {
  email: string;
  telephone: number;
  comments: Comment[];
}

export interface ApplicantData extends UserData {
  stage: ApplicantStageType;
}
  
export interface ApplicantDataDetail extends ApplicantData, UserDataDetail {
  occupation: string;
  german: string;
  motivation: string[];
  linkedin: string;
  mktChannel: string;
}

export interface MemberData extends UserData {
  currentRole: MemberRole;
  membershipVerified: boolean;
}

export interface MemberDataDetail extends MemberData, UserDataDetail {
  aiesecEmail: string;
  expaId: number;
  dateJoined: Date;
  pastRole?: MemberRole[];
  files?: string;
}

export interface MemberRole {
  role: RoleType,
  function: FunctionType,
  stage: MemberStageType;
  jobDescription?: string,
  firstDateInRole: Date,
  lastDateInRole?: Date,
  dateOfRealized?: Date,
  endOfTerm?: Date
}

export type ApplicantStageType = "open" | "contacted" | "toBeInterviewed" | "interviewed" | "onHold" | "toBeRejected" | "rejected" | "candidateNotInterested" | "selected" | "duplicate";
export type ApplicantStageTypeDisplay = "Open" | "Contacted" | "To Be Interviewed" | "Interviewed" | "On Hold" | "To Be Rejected" | "Rejected" | "Candidate Not Interested" | "Selected" | "Duplicate";

export interface ApplicantStage {
  value: ApplicantStageType;
  displayValue: ApplicantStageTypeDisplay;
}

export const applicantStageMap: Map<ApplicantStageType, ApplicantStageTypeDisplay> = new Map([
  ["open", "Open"],
  ["contacted", "Contacted"],
  ["toBeInterviewed", "To Be Interviewed"],
  ["interviewed", "Interviewed"],
  ["rejected", "Rejected"],
  ["onHold", "On Hold"],
  ["toBeRejected", "To Be Rejected"],
  ["candidateNotInterested", "Candidate Not Interested"],
  ["selected", "Selected"],
  ["duplicate", "Duplicate"]
]);

export type MemberStageType = "none" | "accepted" | "approved" | "realized" | "finished" | "completed" | "dropped" | "terminated" | "advanced" | "alumni";
export type MemberStageTypeDisplay = "None" | "Accepted" | "Approved" | "Realized" | "Finished" | "Completed" | "Dropped" | "Terminated" | "Advanced" | "Alumni";

export interface MemberStage {
  value: MemberStageType;
  displayValue: MemberStageTypeDisplay;
}

export const memberStageMap: Map<MemberStageType, MemberStageTypeDisplay> = new Map([
  ["none", "None"],
  ["accepted", "Accepted"],
  ["approved", "Approved"],
  ["realized", "Realized"],
  ["finished", "Finished"],
  ["completed", "Completed"],
  ["dropped", "Dropped"],
  ["terminated", "Terminated"],
  ["advanced", "Advanced"],
  ["alumni", "Alumni"]
]);

export interface MotivationForJoining {
  value: string;
  displayValue: string;
}

export type RoleType = "none" | "newbie" | "member" | "teamLeader" | "vicePresident";
export type RoleTypeDisplay = "None" | "Newbie" | "Member" | "Team Leader" | "Vice President";

export interface Role {
  value: RoleType;
  displayValue: RoleTypeDisplay;
}

export const roleMap: Map<RoleType, RoleTypeDisplay> = new Map([
  ["none", "None"],
  ["newbie", "Newbie"],
  ["member", "Member"],
  ["teamLeader", "Team Leader"],
  ["vicePresident", "Vice President"]
]);

export type FunctionType = "none" | "finance" | "marketing" | "outgoingGlobalVolunteer" | "outgoingGlobalTalent" | "incomingGlobalVolunteer" | "incomingGlobalTalent" | "talentManagement" ;
export type FunctionTypeDisplay = "None" | "Finance" | "Marketing" | "Outgoing Global Volunteer" | "Outgoing Global Talent" | "Incoming Global Volunteer" | "Incoming Global Talent" | "Talent Management";

export interface Function {
  value: FunctionType;
  displayValue: FunctionTypeDisplay;
}

export const functionMap: Map<FunctionType, FunctionTypeDisplay> = new Map([
  ["none", "None"],
  ["finance", "Finance"],
  ["marketing", "Marketing"],
  ["outgoingGlobalVolunteer", "Outgoing Global Volunteer"],
  ["outgoingGlobalTalent", "Outgoing Global Talent"],
  ["incomingGlobalVolunteer", "Incoming Global Volunteer"],
  ["incomingGlobalTalent", "Incoming Global Talent"],
  ["talentManagement", "Talent Management"]
]);

export type LcType = "aachen" | "augsburg" | "berlin-hu" | "berlin-tu" | "bielefeld" | "bochum" | "bonn" | "braunschweig" | "bremen" | "darmstadt" | "dresden" | "duesseldorf" | "frankfurt-main" | "giessen-marburg" | "goettingen" | "halle" | "hamburg" | "hannover" | "kaiserslautern" | "karlsruhe" | "koeln" | "leipzig" | "lueneburg" | "magdeburg" | "mainz-wiesbaden" | "mannheim-heidelberg" | "muenchen" | "muenster" | "nuernberg" | "paderborn" | "passau" | "regensburg" | "stuttgart-hohenheim";
export type LcTypeDisplay = "Aachen" | "Augsburg" | "Berlin HU" | "Berlin TU" | "Bielefeld" | "Bochum" | "Bonn" | "Braunschweig" | "Bremen" | "Darmstadt" | "Dresden" | "Düsseldorf" | "Frankfurt am Main" | "Gießen-Marburg" | "Göttingen" | "Halle" | "Hamburg" | "Hannover" | "Kaiserslautern" | "Karlsruhe" | "Köln" | "Leipzig" | "Lüneburg" | "Magdeburg" | "Mainz-Wiesbaden" | "Mannheim & Heidelberg" | "München" | "Münster" | "Nürnberg" | "Paderborn" | "Passau" | "Regensburg" | "Stuttgart & Hohenheim";

export const lcMap: Map<LcType, LcTypeDisplay> = new Map([
  ["aachen", "Aachen"],
  ["augsburg", "Augsburg"],
  ["berlin-hu", "Berlin HU"],
  ["berlin-tu", "Berlin TU"],
  ["bielefeld", "Bielefeld"],
  ["bochum", "Bochum"],
  ["bonn", "Bonn"],
  ["braunschweig", "Braunschweig"],
  ["bremen", "Bremen"],
  ["darmstadt", "Darmstadt"],
  ["dresden", "Dresden"],
  ["duesseldorf", "Düsseldorf"],
  ["frankfurt-main", "Frankfurt am Main"],
  ["giessen-marburg", "Gießen-Marburg"],
  ["goettingen", "Göttingen"],
  ["halle", "Halle"],
  ["hamburg", "Hamburg"],
  ["hannover", "Hannover"],
  ["kaiserslautern", "Kaiserslautern"],
  ["karlsruhe", "Karlsruhe"],
  ["koeln", "Köln"],
  ["leipzig", "Leipzig"],
  ["lueneburg", "Lüneburg"],
  ["magdeburg", "Magdeburg"],
  ["mainz-wiesbaden", "Mainz-Wiesbaden"],
  ["mannheim-heidelberg", "Mannheim & Heidelberg"],
  ["muenchen", "München"],
  ["muenster", "Münster"],
  ["nuernberg", "Nürnberg"],
  ["paderborn", "Paderborn"],
  ["passau", "Passau"],
  ["regensburg", "Regensburg"],
  ["stuttgart-hohenheim", "Stuttgart & Hohenheim"]
]);

export const signupFormLangMap: Map<string, string> = new Map([
  ["none", "Gar nicht"],
  ["a1", "A1"],
  ["a2", "A2"],
  ["b1", "B1"],
  ["b2", "B2"],
  ["c1", "C1"],
  ["c2", "C2"],
  ["native", "Muttersprache"]
])

export const signupFormMktMap: Map<string, string> = new Map([
  ["friend", "Freund/-in"],
  ["infobooth", "Infostand am Campus"],
  ["lecture", "Präsentation in einer Vorlesung"],
  ["facebook", "Facebook"],
  ["twitter", "Twitter"],
  ["instagram", "Instagram"],
  ["linkedin", "LinkedIn"],
  ["studo", "Studo App"],
  ["whatsapp", "Whatsapp"],
  ["other-social", "Ein anderer Social Media Kanal"],
  ["search-engine", "Suchmaschine (z.B. Google)"],
  ["event", "Event"],
  ["email", "Email"],
  ["media", "Medien (Zeitung, Radio, Magazin, TV)"],
  ["blog", "Blog"],
  ["other", "Anderes"]
]);
