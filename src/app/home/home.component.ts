import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  links:string[]=['Solutions','Pricing','Company','Blogs' ]

  cards = [
    { image: 'https://s3.ap-south-1.amazonaws.com/dru.assets/images/website/menu-icons/hospital.png',title: 'Hospital', content: 'Improve patient engagement. Manage everything - patients, payments, inventory etc. in a secure environment.' },
    { image: 'https://s3.ap-south-1.amazonaws.com/dru.assets/images/website/provider-icons/icons8-rod_of_asclepius.png',title: 'Clinics', content: 'Track, manage and optimize your processes with modern software.' },
    { image: 'https://s3.ap-south-1.amazonaws.com/dru.assets/images/website/provider-icons/pharmacies-circle.png',title: 'pharmacy', content: 'Receive electronic orders from patients and doctors.' },
    { image: 'https://s3.ap-south-1.amazonaws.com/dru.assets/images/website/provider-icons/icons8-glasses.png',title: 'Optical Stores', content: 'Establish an ongoing relationship with your customers.' },
    { image: 'https://s3.ap-south-1.amazonaws.com/dru.assets/images/website/provider-icons/patient-circle.png',title: 'Patients', content: 'Empower yourself to manage all your familys care needs in one place.' },
    { image: 'https://s3.ap-south-1.amazonaws.com/dru.assets/images/website/provider-icons/labs-circle.png',title: 'Labs', content: 'Receive electronic orders from doctors and patients. Deliver a seamless digital experience for your doctors and patients.' }
  ];

  cards1 = [
    { title: 'Products'},
    { title: 'Company'},
    { title: 'Info'},
    ];
  products:string[]=['Hospitals','Clinics','Pharmacies','Optical','Stores','Patients','Lab Information Systems','Radiology Information Systems'];
  company:string[]=["Who’s Drucare","Affiliates","Pricing","Careers","Contact Us"]
  // footImages:string[]=[
  //   'https://s3.ap-south-1.amazonaws.com/dru.assets/images/site/qci.png',
  //   'https://s3.ap-south-1.amazonaws.com/dru.assets/images/site/ABDM.png',
  //   'https://s3.ap-south-1.amazonaws.com/dru.assets/images/website/misc-icons/aws-partner-badge.png',
  // ]
  // fourImages:string[]=[
  //   'https://s3.ap-south-1.amazonaws.com/dru.assets/images/site/drucare-iso-27001-certificate.jpg',
  //   'https://s3.ap-south-1.amazonaws.com/dru.assets/images/website/misc-icons/iso.png',
  //   'https://s3.ap-south-1.amazonaws.com/dru.assets/images/website/misc-icons/cmmi.png',
  //   'https://s3.ap-south-1.amazonaws.com/dru.assets/images/website/misc-icons/comodo.png'
  // ]

  flags = [
    { value: 'indian' },
    { value: 'usa',}
  ];

   selectedFlag:string='india'
}
