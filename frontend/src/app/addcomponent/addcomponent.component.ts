import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcomponent',
  templateUrl: './addcomponent.component.html',
  styleUrl: './addcomponent.component.scss'
})
export class AddcomponentComponent {

  title: string = '';
  description: string = '';
  location: string = '';
  image: File | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  onFileChange(event: any) {
    this.image = event.target.files[0];
  }

  post() {
    if (!this.title || !this.description || !this.location || !this.image) {
      alert('Please fill in all fields and select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('description', this.description);
    formData.append('location', this.location);
    formData.append('image', this.image);

    this.http.post('http://localhost:5000/user/ads/uploads', formData).subscribe(
      (response: any) => {
        if (response.status) {
          this.router.navigateByUrl('/home');
        } else {
          alert('Error posting ad');
        }
      },
      (error) => {
        console.error('Error posting ad:', error);
      }
    );
  }

  backhome() {
    this.router.navigateByUrl('/home');
  }

}
