import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  constructor(private http: HttpClient) {}

  getAds() {
    return this.http.get<any[]>('http://localhost:5000/user/ads');
  }

  createAd(adData: FormData) {
    return this.http.post('http://localhost:5000/user/ads/uploads', adData);
  }

  getAdDetails(adId: string) {
    return this.http.get(`http://localhost:5000/user/ads/${adId}`);
  }
}
