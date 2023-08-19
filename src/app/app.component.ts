import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from './auth/authservice.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
   constructor(private authService: AuthserviceService, private router:Router) {}

  onLogout() {
    this.authService.logOut();
    this.router.navigateByUrl('/auth');
  }

}
