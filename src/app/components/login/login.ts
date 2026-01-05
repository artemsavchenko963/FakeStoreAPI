import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Data } from '../../services/data';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent implements OnInit {
  loginData = {
    name: '',
    email: '',
    login: ''
  };

  constructor(public data: Data) {}

  ngOnInit() {
    if (this.data.currentUser) {
      this.loginData = { ...this.data.currentUser };
    }
  }

  onSubmit() {
    const isUpdating = !!this.data.currentUser;
    this.data.currentUser = { ...this.loginData };
    alert(isUpdating ? 'Updated successfully!' : 'Logged in successfully!');
  }

  deleteUser() {
    if (confirm('Are you sure?')) {
      this.data.currentUser = null;
      this.loginData = { name: '', email: '', login: '' };
      alert('User deleted');
    }
  }
}
