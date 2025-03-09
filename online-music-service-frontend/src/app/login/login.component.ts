// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login({ email: this.email, password: this.password })
      .subscribe((response: any) => {
        // Handle successful login
      }, (error) => {
        // Handle login error
      });
  }
}
