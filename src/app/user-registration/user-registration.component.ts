import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSubmit = function(e){
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    if(username=="admin" && password=="admin"){
      this.router.navigate(['dashboard']);
    }
  }

}
