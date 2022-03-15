import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mad-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId: string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
  }

    }
  


