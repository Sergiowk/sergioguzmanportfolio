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
    private fb: FormBuilder
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
    this.formContact
    console.log(this.formContact);
    
  }

}
