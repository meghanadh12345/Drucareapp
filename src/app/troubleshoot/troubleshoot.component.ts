import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-troubleshoot',
  templateUrl: './troubleshoot.component.html',
  styleUrls: ['./troubleshoot.component.css']
})
export class TroubleshootComponent {

constructor(private fb:FormBuilder){}
  myform = this.fb.group({
    email:['',[Validators.required,Validators.pattern('^[a-z0-9]+@[a-z]+\.[a-z]{2,}$')]],
    
  })
}
