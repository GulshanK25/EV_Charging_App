import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdService } from '../services/ad.service';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.scss']
})
export class AdDetailsComponent implements OnInit {
  ad: any;

  constructor(
    private route: ActivatedRoute,
    private adService: AdService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const adId = this.route.snapshot.paramMap.get('id');
    if (adId) {
      this.adService.getAdDetails(adId).subscribe(
        (ad) => {
          this.ad = ad;
        },
        (error) => {
          console.error('Error fetching ad details:', error);
        }
      );
    }
  }

  backToHome() {
    this.router.navigateByUrl('/home');
  }

  contactDealer() {
    alert('Contact dealer feature to be implemented');
  }
}
