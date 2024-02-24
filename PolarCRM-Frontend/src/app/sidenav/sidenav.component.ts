import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { navbarData } from './nav-data';
import { Router } from '@angular/router';
import { SocialAuthService } from '@abacritt/angularx-social-login';

interface SideNavToggle {
  screenWidth: number;
  extended: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
          style({opacity: 1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
          style({opacity: 0})
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  extended = false;
  screenWidth = 0;
  navData = navbarData;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768 ) {
      this.extended = false;
      this.onToggleSideNav.emit({extended: this.extended, screenWidth: this.screenWidth});
    }
  }

  constructor(private router: Router,
    private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
      this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    this.extended = !this.extended;
    this.onToggleSideNav.emit({extended: this.extended, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.extended = false;
    this.onToggleSideNav.emit({extended: this.extended, screenWidth: this.screenWidth});
  }

  logout(): void {
    this.closeSidenav();
    this.socialAuthService.signOut();
    this.router.navigate(['/login']);
  }
}
