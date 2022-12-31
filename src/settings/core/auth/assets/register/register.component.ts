import { Component, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from "../../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @ViewChild('registerNgForm') registerNgForm!: NgForm;

  registerForm!: UntypedFormGroup;
  rememberMe: any;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
        username  : ['', Validators.required],
        firstname : ['', Validators.required],
        lastname  : ['', Validators.required],
        email     : ['', [Validators.required, Validators.email]],
        password  : ['', Validators.required],
        agreements: ['', Validators.requiredTrue]
      }
    );
  }

  register() {

  }

  getConfigValue(key: string): any {
    return key;
  }
}
