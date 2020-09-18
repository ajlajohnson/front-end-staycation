import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  selectRest: any = [];
  selectAct: any = [];
  selectDrink: any = [];
  restaurants: any;

  constructor(private service: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getFaveRest();
  }

  getFaveRest = () => {
    this.selectRest = this.service.getFaveRestaurants();
    console.log(this.selectRest());
  };
}
