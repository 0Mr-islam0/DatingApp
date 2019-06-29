import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(){}

  resgistered(){
    this.authService.register(this.model).subscribe(() => {console.log('registration successful')}, error => console.log(error));
  }
  cancelled(){
    console.log('cancelled');
    this.cancelRegister.emit(false);
  }

}