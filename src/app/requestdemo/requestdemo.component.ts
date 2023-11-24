import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-requestdemo',
  templateUrl: './requestdemo.component.html',
  styleUrls: ['./requestdemo.component.css']
})
export class RequestdemoComponent {

constructor(private fb:FormBuilder){}
myform = this.fb.group({
  Doctors:['',[Validators.required]],
  fullname:['',[Validators.required]],
  email:['',[Validators.required,Validators.pattern('^[a-z0-9]+@[a-z]+\.[a-z]{2,}$')]],
  phonenumber:['',[Validators.required]],
  location:['',[Validators.required]],

})
}
