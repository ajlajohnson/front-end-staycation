import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favoriteRest: any[];
  favoriteAct: any[];
  favoriteDrink: any[];
  selectRest: any = [];
  selectAct: any = [];
  selectDrink: any = [];
  restaurants: any;

  constructor(private service: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getFaveRest();
    this.getFaveAct();
    this.getFaveDrink();
  }

  getFaveRest = () => {
    this.favoriteRest = this.service.getFaveRestaurants();
    console.log(this.favoriteRest);
  };
  getFaveAct = () => {
    this.favoriteAct = this.service.getFaveActivities();
    console.log(this.favoriteRest);
  };
  getFaveDrink = () => {
    this.favoriteDrink = this.service.getFaveDrinks();
  };

  deleteRest(index: number) {
    this.favoriteRest.splice(index, 1);
  }
  deleteAct(index: number) {
    this.favoriteAct.splice(index, 1);
  }
  deleteDrink(index: number) {
    this.favoriteDrink.splice(index, 1);
  }
}
