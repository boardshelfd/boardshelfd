import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: string;
  email: string;
  name?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  private currentUserSubject = new BehaviorSubject<User | null>(null);

  public isLoggedIn$ = this.isLoggedInSubject.asObservable();
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    // Check if user is already logged in (from localStorage)
    this.checkExistingAuth();
  }

  private checkExistingAuth(): void {
    const token = localStorage.getItem('token');
    if (token) {
      // In a real app, you would validate the token with your backend
      this.isLoggedInSubject.next(true);
      // You could also decode the token to get user info
    }
  }

  login(email: string, password: string): Observable<boolean> {
    // This is a mock implementation
    // In a real app, you would call your authentication API
    return new Observable(observer => {
      setTimeout(() => {
        if (email && password) {
          // Mock successful login
          const mockUser: User = {
            id: '1',
            email: email,
            name: 'Board Game Enthusiast'
          };
          
          this.isLoggedInSubject.next(true);
          this.currentUserSubject.next(mockUser);
          
          // Store token (mock)
          localStorage.setItem('token', 'mock-jwt-token');
          localStorage.setItem('user', JSON.stringify(mockUser));
          
          observer.next(true);
        } else {
          observer.error({ message: 'Invalid credentials' });
        }
        observer.complete();
      }, 1000);
    });
  }

  logout(): void {
    this.isLoggedInSubject.next(false);
    this.currentUserSubject.next(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return this.isLoggedInSubject.value;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
}
