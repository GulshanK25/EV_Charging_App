import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ads: any[] = [];
  showAds: boolean = false;
  username: string | null = '';

  constructor(private http: HttpClient, private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.username = this.userService.getUserName();
    this.fetchAds();
  }

  fetchAds() {
    this.http.get<any[]>('http://localhost:5000/user/ads').subscribe(
      (ads) => {
        this.ads = ads;
        this.showAds = true;
      },
      (error) => {
        console.error('Error fetching ads:', error);
      }
    );
  }

  showAllAds() {
    this.fetchAds();
  }

  post() {
    this.router.navigateByUrl('/postadd');
  }

  viewAdDetails(adId: string) {
    this.router.navigateByUrl(`/ad-details/${adId}`);
  }
}
