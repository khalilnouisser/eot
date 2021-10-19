import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../core/http/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TitleService } from '../../core/services/title.service';
import { CredentialsService } from '../../core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  err: string;

  signupForm: FormGroup = this.fb.group({
    full_name: ['', [Validators.required, Validators.minLength(5)]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    organisation: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
              private api: ApiService,
              private router: Router,
              private titleService: TitleService,
              private credentialService: CredentialsService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('S\'inscrire');
  }

  create(): void {
    this.api.register(this.signupForm.value).then(value => {
      this.credentialService.setCredentials(value);
      if (this.route.snapshot.queryParams.redirect) {
        this.router.navigateByUrl(this.route.snapshot.queryParams.redirect);
      } else {
        this.router.navigate(['/home']);
      }
    });
  }

}
