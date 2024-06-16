import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ads: any[] = [];
  showAds: boolean = false; // Flag to show ads after button click

  constructor(private http: HttpClient, private router: Router) {}

  showALLAds() {
    this.http.get<any[]>('http://localhost:5000/ads/uploads').subscribe(
      (ads) => {
        this.ads = ads;
        this.showAds = true; // Show ads after fetching them
      },
      (error) => {
        console.error('Error fetching ads:', error);
        // Handle error if needed
      }
    );
  }

  post() {
    this.router.navigateByUrl('/postadd');
  }

  viewAdDetails(adId: string) {
    this.router.navigateByUrl(`/ad-details/${adId}`);
  }
}
