import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../core/http/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  err: string;

  signupForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    organisation: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
              private api: ApiService,
              private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.api.register(this.signupForm.value).then(() => {
      this.router.navigate(['/login', 'sign-in'], {
        queryParams: {
          signup: 'success'
        }
      });
    });
  }

}
