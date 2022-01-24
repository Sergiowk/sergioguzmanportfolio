import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formContact!:FormGroup;


  constructor(
    private fb: FormBuilder,
    private http: HttpClient
    ) { 
    
  }

  ngOnInit(): void {
    
    this.formContact = this.fb.group({
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      phone: [''], 
      proposal: ['', Validators.required]
    })

  }

  sendData(){
    console.log(this.formContact.value.email);
    console.log(this.formContact.value.phone);
    console.log(this.formContact.value.proposal);
    var formData: any = new FormData();
    formData.append('Email', this.formContact.value.email);
    formData.append('Phone',this.formContact.value.phone);
    formData.append('Proposal',this.formContact.value.proposal);

    this.http.post("https://script.google.com/macros/s/AKfycbxqBbEiZYC_TahT1BrWi8qNgg2ND4HODfsWrQw5myMBWzyapCx7RfHvDg36OQ0DMX_g/exec", formData).subscribe(
        (response) => {
          console.log("OK");

        },
        (error)=> {
          console.log("NOT OK");
        }
    );
    
  }

}
