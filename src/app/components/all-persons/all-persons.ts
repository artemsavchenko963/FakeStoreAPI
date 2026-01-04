import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Data } from '../../services/data';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './all-persons.html',
})
export class AllPersons implements OnInit {
  persons$!: Observable<any[]>;

  isModalOpen = false;
  selectedPersons: any =null;

  constructor(private dataService: Data) {}

  ngOnInit() {
    this.dataService.loadPersons();
    this.persons$ = this.dataService.persons$;
  }

  openModal(person: any) {
    this.isModalOpen = true;
    this.selectedPersons = person;
  }
  closeModal() {
    this.isModalOpen = false;
    this.selectedPersons = null;
  }

  delete(id: number) {
    this.dataService.deletePerson(id).subscribe();
  }
}
