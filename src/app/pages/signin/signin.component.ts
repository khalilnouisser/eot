import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../core/http/api.service';
import { CredentialsService } from '../../core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  err: string;
  success: string;

  loginForm: FormGroup = this.fb.group({
    identifier: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
              private api: ApiService,
              private credentialService: CredentialsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.queryParams.signup === 'success') {
      this.success = 'Votre compte a été créé avec succès';
    }
  }

  login(): void {
    this.api.login(this.loginForm.value).then(value => {
      this.credentialService.setCredentials(value.jwt);
      this.router.navigate(['/home']);
    }).catch((error) => {
      this.err = error;
    });
  }

}
