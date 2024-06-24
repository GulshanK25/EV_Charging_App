import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userId: string | null = null;
  private userName: string | null = null;

  setUserId(userId: string) {
    this.userId = userId;
    if (typeof window !== 'undefined') {
      localStorage.setItem('userId', userId);
    }
  }

  getUserId(): string | null {
    if (typeof window !== 'undefined') {
      return this.userId || localStorage.getItem('userId');
    }
    return this.userId;
  }

  setUserName(userName: string) {
    this.userName = userName;
    if (typeof window !== 'undefined') {
      localStorage.setItem('userName', userName);
    }
  }

  getUserName(): string | null {
    if (typeof window !== 'undefined') {
      return this.userName || localStorage.getItem('userName');
    }
    return this.userName;
  }
}
