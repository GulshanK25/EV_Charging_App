import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router, private userService: UserService) {}

  login() {
    const loginData = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:5000/user/login', loginData).subscribe(
      (response: any) => {
        if (response.status) {
          this.userService.setUserId(response.userId); // Store user ID in local storage
          this.userService.setUserName(response.username); // Store username in local storage
          this.router.navigateByUrl('/home');
        } else {
          alert('Error logging in');
        }
      },
      (error) => {
        console.error('Error logging in:', error);
      }
    );
  }
}
