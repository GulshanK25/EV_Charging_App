// src/app/register/register.component.ts

import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(500)
      ])
    ])
  ]
})
export class RegisterComponent {
  firstname: string = " ";
  lastname: string = " ";
  email: string = " ";
  password: string = " ";
  address: string = " ";

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
  }

  register() {
    let data = {
      "firstname": this.firstname,
      "lastname": this.lastname,
      "email": this.email,
      "password": this.password,
      "address": this.address
    };

    this.http.post("http://localhost:5000/user/create", data).subscribe((results: any) => {
      console.log(results);
      alert("User has been successfully registered");
      this.router.navigate(['/login']);
    });
  }

  save() {
    this.register();
  }
}
