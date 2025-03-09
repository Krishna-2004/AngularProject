import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    // Your components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginComponent,
    SignupComponent
    // Other modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
