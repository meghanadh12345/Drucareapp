import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  selectControl = new FormControl('option1');
countries=[
   "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", 
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh",
  "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", 
  "Botswana", "Brazil", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon",
  "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", 
  "China - Hong Kong / Macau", "Colombia", "Comoros", "Congo", "Congo, Democratic Republic of (DRC)", 
  "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", 
  "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
  "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "French Guiana", "Gabon", "Gambia, Republic of The", 
  "Georgia", "Germany", "Ghana", "Great Britain", "Greece", "Grenada", "Guadeloupe", "Guatemala", "Guinea",
  "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
  "Israel and the Occupied Territories", "Italy", "Ivory Coast (Cote d'Ivoire)", "Jamaica", "Japan", 
  "Jordan", "Kazakhstan", "Kenya", "Korea, Democratic Republic of (North Korea)",
  "Korea, Republic of (South Korea)", "Kosovo", "Kuwait", 
  "Kyrgyz Republic (Kyrgyzstan)", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
  "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives",
  "Mali", "Malta", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", 
  "Moldova, Republic of", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco",
  "Mozambique", "Myanmar/Burma", "Namibia", "Nepal", "Netherlands", "New Zealand", 
  "Nicaragua", "Niger", "Nigeria", "North Macedonia, Republic of", "Norway", "Oman",
  "Pacific Islands", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", 
  "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania",
  "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", 
  "Saint Vincent and the Grenadines", "Samoa", "Sao Tome and Principe", "Saudi Arabia", "Senegal", 
  "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovak Republic (Slovakia)", "Slovenia",
  "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", 
  "Tajikistan", "Tanzania", "Thailand", "Timor Leste", "Togo", "Trinidad & Tobago", "Tunisia",
  "Türkiye (Turkey)", "Turkmenistan", "Turks & Caicos Islands", "Uganda", "Ukraine", "United Arab Emirates", 
  "United States of America (USA)", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (UK)",
  "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe", 
  ]

cardimgs:{img:string;name:string}[]=
[{img:"https://s3.ap-south-1.amazonaws.com/dru.assets/images/app/icons/org-type/pharmacy.svg",name:"pharmacy"},
  {img:"https://s3.ap-south-1.amazonaws.com/dru.assets/images/app/icons/org-type/practioner.svg",name:"Practitioner"},
  {img:"https://s3.ap-south-1.amazonaws.com/dru.assets/images/app/icons/org-type/optical-store.svg",name:"Opticals"},
  {img:"https://s3.ap-south-1.amazonaws.com/dru.assets/images/app/icons/org-type/school.svg",name:"Others"},
  {img:"https://s3.ap-south-1.amazonaws.com/dru.assets/images/app/icons/org-type/hospital.svg",name:"Hospital"},
  {img:"https://s3.ap-south-1.amazonaws.com/dru.assets/images/app/icons/org-type/diagnostics.svg",name:"Opticals"}
]



  constructor( private fb:FormBuilder){}
  registeration= this.fb.group({
  name:['',[Validators.required,Validators.minLength(8)]]
})
}
