import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = "";
  showRegister: boolean = false;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router){
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    })
  }

  loginGoogle(){
    this.authService.loginGoogle().then(()=>{
      this.router.navigate(["/home"]);
    })
  }

  login(){
    if(this.loginForm.invalid) return;
    if(this.showRegister){
      this.authService.registerUser(this.email?.value, this.password?.value).
      then(() => {
        this.showRegister = false;
        this.loginForm.reset();
        return this.authService.logout();
      });
      return;
    }
    this.authService.login(this.email?.value, this.password?.value).then(()=>{
      this.router.navigate(["/home"]);
    });
  }

  
  toggleRegister(){
    this.showRegister = !this.showRegister
  }

  get email(){return this.loginForm.get('email')};
  get password(){return this.loginForm.get('password')};

}
