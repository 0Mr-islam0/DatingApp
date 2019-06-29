import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
model: any = {};

  constructor(private authService: AuthService) { }

  loginMode = false;

  ngOnInit() {
  }

login(): void {
  this.authService.login(this.model).subscribe((response: any) => {
    console.log('you logged successfuly');
  }, (err: any) => {
    console.log('you failed to log');
  });
}

loggedIn() {
  const token = localStorage.getItem('token');
  // this.loginMode = ! this.loginMode;
  return !!token;
}

logOut(){
  localStorage.removeItem('token');
  console.log('Logged out')
}
}
