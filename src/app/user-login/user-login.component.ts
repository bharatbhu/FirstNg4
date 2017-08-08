import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from './../user.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  constructor(private router:Router, private user:UserService) {}

  ngOnInit() {
  }

  loginUser = function(e){
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    if(username=="admin" && password=="admin"){
      this.user.setUserLoggedIn();
      this.router.navigate(['dashboard']);
    }
  }
}
