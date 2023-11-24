import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {

  constructor( private fb:FormBuilder){}
  signupForm = this.fb.group({
    fname:[null,[Validators.required,Validators.minLength]],
    lname:[null,[Validators.required,Validators.minLength]],
    email:[null,[Validators.required,Validators.email,Validators.pattern(/^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,}$/)]],
    username:[null,[Validators.required,Validators.minLength]],
    mobile:[null,[Validators.required,Validators.minLength,Validators.pattern('^[0-9]*$')]]
  });
}
