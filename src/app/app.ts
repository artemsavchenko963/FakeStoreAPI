import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Data } from './services/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  constructor(public data: Data) {}

  deleteUser() {
    if (confirm('Are you sure?')) {
      this.data.currentUser = null;
    }
  }
}
