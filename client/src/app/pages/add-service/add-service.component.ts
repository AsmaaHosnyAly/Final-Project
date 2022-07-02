
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {


  errorMsg: boolean = false
  isSubmitted: boolean = false
  registerForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
    name:new FormGroup({
      name: new FormControl("", [Validators.required]),
     
    }),
    userType: new FormControl("", [Validators.required])
  })


  constructor(private global: GlobalService, private router: Router) { }
 

 

  
  get registerationData() {
    return this.registerForm.controls
  }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.isSubmitted = true
    if (this.registerForm.valid) {
      this.global.register(this.registerForm.value).subscribe(res => {
        this.router.navigateByUrl("")
      }, (err) => {
        this.errorMsg = true
      }, () => {

      })
    }
  }
}




