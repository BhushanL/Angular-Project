import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-z\\s]{5,15}$')]),
    //lname: new FormControl('', [Validators.required, Validators.pattern('^[a-z\\s]{5,15}$')]),

    //gender: new FormControl('', Validators.required),

    email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+')]),
    address: new FormGroup({
     
     state: new FormControl('', [Validators.required, Validators.pattern('[a-z, A-Z]+'), Validators.minLength(5)]),
     city: new FormControl('', [Validators.required, Validators.pattern('[a-z, A-Z]+'), Validators.minLength(4)]),
      postalcode: new FormControl('', [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(6), Validators.maxLength(6)]),
      comment: new FormControl('', [Validators.required, Validators.pattern('^[a-z\\s]{5,15}$')]),
      gender: new FormControl('', Validators.required),
    })
  })

  //submitData() {
  //  console.log(this.userForm.value)
  //}

  myData:any = [];
  submitData() {
    console.log(this.userForm.value)
    this.myData.push(this.userForm.value)
  }

  //myData: any[] = [];

  //submitData(data: any[]) {
  //  console.log(this.submitData(data))
  //  this.myData.push(data);
  //  console.log(this.myData)
  //}
 
 }


