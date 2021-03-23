import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tmp-driven-form',
  templateUrl: './tmp-driven-form.component.html',
  styleUrls: ['./tmp-driven-form.component.css']
})
export class TmpDrivenFormComponent {

  title = 'tmp-driven';
  Hobbies: string[] = [
    'Acrobatics',
    'Acting',
    'Animation',
    'Astronomy',
    'Baking'
  ];

  //val: any[] = [];

  //formData: any[] = [];
  //submitData(formData: any) {
  //  console.log(formData)
  //  this.val = this.formData;
  //}


  myData: any = [];
  submitData(formData: any) {
    this.myData.push(formData);
    console.log(formData);
  }
}


