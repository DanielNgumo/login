import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private title: Title) {

    this.title.setTitle('Login');
  }
  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Handle successful login
        console.log('Login successful:', response);
      },
      (error) => {
        // Handle login error
        console.error('Login failed:', error);
      }
    );
  }
}
