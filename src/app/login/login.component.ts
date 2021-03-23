import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email: any = '';
  pass: any = '';
  constructor(private router: Router) { }



  ngOnInit(): void {
  }


  logInUser() {
    if (this.email == "bhushan@gmail.com" && this.pass == "Bhushan@123" || this.email == "amey@gmail.com" && this.pass == "amey@123" ) {
      console.log("Welcome To Dashboard User");
      //this.router.navigateByUrl('./header.component.html')
      this.router.navigate(['/technologies']);

    }
    else {
      alert("User not registered...!");
      console.log("user Unautherized");

    }
  }

}
