import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Data } from '../../services/data';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-details.html',
})
export class PersonDetails implements OnInit {
  person$!: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private dataService: Data
  ) {}

  ngOnInit() {
    const personId = this.route.snapshot.paramMap.get('id');
    if (personId) {
      this.person$ = this.dataService.getPersonById(+personId);
    }
  }
}
