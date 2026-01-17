import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Data } from './services/data';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  constructor(public data: Data, private authService: AuthService) {}

  logout() {
    this.authService.logout();
    this.data.currentUser = null;
  }
}
