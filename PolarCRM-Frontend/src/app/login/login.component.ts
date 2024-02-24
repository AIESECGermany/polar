import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(
    private socialAuthService: SocialAuthService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.signInWithGoogle();
  }

  signInWithGoogle() {
    this.socialAuthService.authState.subscribe(async (user) => {
      const credentials = await this.authService.authenticateUser(user);
      if(credentials.role === 'national' || credentials.role === 'local' || credentials.role === 'admin') {
        this.router.navigate(['/app']);
      }
    });
  }

}
