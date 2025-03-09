// signup.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone:true,
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  // imports:[ReactiveFormsModule]
})
export class SignupComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  signup() {
    this.authService.signup({ email: this.email, password: this.password })
      .subscribe((response: any) => {
        // Handle successful signup
      }, (error) => {
        // Handle signup error
      });
  }
}
