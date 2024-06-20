import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatCardModule,
    ReactiveFormsModule, MatInputModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  /** Custom Validator checking for password match */
  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const pass = this.form.get('password')?.value;
    const confirmPass = this.form.get('passwordConfirm')?.value
    const matched = pass === confirmPass ? true : false;
    matched ? this.form.controls['passwordConfirm'].setErrors(null) :
      this.form.controls['passwordConfirm'].setErrors({ notSame: true });
    return matched ? null : { notSame: true }
  }

  constructor(private authService: AuthService,
    public router: Router) {
    // Setting the custom validator to form
    this.form.setValidators(this.checkPasswords);
  }

  /** Submit button call */
  submit() {
    this.authService.register(this.form.value).subscribe((res: any) => {
      if (res) {
        this.router.navigateByUrl('/');
      }
      else {
        this.form.setErrors({ invalidCredentials: true });
      }
    });
  }

}
