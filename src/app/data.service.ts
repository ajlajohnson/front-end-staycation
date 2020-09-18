import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl: string = 'http://localhost:3000';
  key: string = 'AIzaSyAx6C2ZoVVCy_9NNDpn4ZzzpSaFBd1FOT4';
  // place_id: string = 'ChIJX80xAaIyO4gR8GDwgVUFi6I';
  restaurants: any = [];
  favoriteRest: any = [];
  favoriteAct: any = [];
  favoriteDrink: any = [];

  // submissions: any;

  constructor(private http: HttpClient, private router: Router) {}

  retrievePlace = (placeid: string) => {
    return this.http.get(`${this.baseUrl}/results`, {
      params: {
        key: this.key,
        place_id: placeid,
      },
    });
  };

  getRestaurants = (params): any => {
    return this.http.get(`${this.baseUrl}/restaurants`, {
      params: params,
    });
  };

  getBars = (params): any => {
    return this.http.get(`${this.baseUrl}/bars`, {
      params: params,
    });
  };

  getActivities = (params): any => {
    return this.http.get(`${this.baseUrl}/activities`, {
      params: params,
    });
  };

  getFaveRestaurants = () => {
    return this.favoriteRest;
  };

  getFaveActivities = () => {
    return this.favoriteAct;
  };

  getFaveDrinks = () => {
    return this.favoriteDrink;
  };

  addFavoriteRestaurant = (restaurant: any) => {
    this.favoriteRest.unshift(restaurant);
    console.log(this.favoriteRest);
  };

  addFavoriteActivities = (activity: any) => {
    this.favoriteAct.unshift(activity);
    console.log(this.favoriteAct);
  };

  addFavoriteDrinks = (drink: any) => {
    this.favoriteDrink.unshift(drink);
    console.log(this.favoriteDrink);
  };

  // addFavoriteRestaurant = (restaurant: any) => {
  //   let index = this.favoriteRest.findIndex((favorite) => {
  //     return favorite === restaurant;
  //   });
  //   if (index >= 0) {
  //     this.favoriteRest.splice(index, 1);
  //   } else {
  //     this.favoriteRest.push(restaurant);
  //   }
  // };
}
