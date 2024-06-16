import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('1s ease-in-out')
      ])
    ])
  ]
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  address: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  register() {
    console.log(this.name);
    console.log(this.email);
    console.log(this.password);
    console.log(this.address);

    let bodyData = {
      fullname: this.name,
      email: this.email,
      password: this.password,
      address: this.address,
    };

    this.http.post("http://localhost:5000/user/register", bodyData).subscribe((resultData: any) => {
      console.log(resultData);

      if (resultData.status) {
        this.router.navigateByUrl('/home');
      } else {
        alert("Registration failed");
        console.log("Error registering");
      }
    });
  }
}
