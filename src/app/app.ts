import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Data } from './services/data';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  
  providers: [Data],
})
export class App {
  users$: Observable<any>;

 constructor(private dataService: Data) {
  this.users$ = this.dataService.getUsers();
 }
}
