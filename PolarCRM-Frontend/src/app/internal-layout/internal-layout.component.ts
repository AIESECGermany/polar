import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  extended: boolean;
}

@Component({
  selector: 'app-internal-layout',
  templateUrl: './internal-layout.component.html',
  styleUrls: ['./internal-layout.component.scss']
})
export class InternalLayoutComponent {

  isSideNavExtended = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavExtended = data.extended;
  }
}
