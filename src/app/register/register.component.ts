import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iuser } from '../interface/iuser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  showen=false;
  form: FormGroup;
  user : Iuser = {
    fullName:"",
    email:"",
    birthDate:null
  };
  
  submitted: boolean;
  
  constructor(private formBuilder: FormBuilder,private router: Router) { 
    this.form = this.formBuilder.group(
      {
        fullName: [null, [Validators.required]],
        email: [null, [Validators.required]],
        birthDate: [null, [Validators.required]]
      }
    );
  }

  ngOnInit(): void {
  }
  onSubmit(){ 
    this.submitted = true; 
    
    // Validate Form Entires
    if (this.form.invalid && (this.form.get('birthDate').value == null ||  this.form.get('birthDate').value == undefined ||  this.form.get('birthDate').value == "")) {
      this.showen= !this.showen;
      return;
    }
    this.showen= true;
    localStorage.setItem("fullName", this.form.get('fullName').value);
    localStorage.setItem("email", this.form.get('email').value);
    localStorage.setItem("birthDate", this.form.get('birthDate').value);
    this.router.navigate(['/exam']);

  }
}
