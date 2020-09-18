import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { analyzeFileForInjectables } from '@angular/compiler';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  @Input() info: any;
  restaurant: any;
  activity: any = [];
  barOrCoffee: any;
  barOrCoffeeGoogle: any;
  restaurantGoogle: any;
  activityGoogle: any = [];
  @Output() added = new EventEmitter<void>();

  constructor(private service: DataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: any) => {
      console.log(params.params);
      this.getRestaurants(params.params);
      this.getBars(params.params);
      this.getActivities(params.params);
    });
  }

  displayRestaurant = (restaurant: any) => {
    console.log(restaurant);
    this.service.retrievePlace(restaurant).subscribe((response) => {
      console.log(response);
      this.restaurantGoogle = response;
    });
  };

  getRestaurants = (params) => {
    this.service.getRestaurants(params).subscribe((response) => {
      console.log(response);
      this.restaurant = response;
      this.displayRestaurant(this.restaurant[0].place_id);
      console.log(this.restaurant[0].place_id);
    });
  };

  displayBarsOrCoffee = (bar: any) => {
    console.log(bar);
    this.service.retrievePlace(bar).subscribe((response) => {
      console.log(response);
      this.barOrCoffeeGoogle = response;
    });
  };

  // displayActivity = (activity: any) => {
  //   console.log(activity);
  //   this.service.retrievePlace(activity).subscribe((response) => {
  //     console.log(response);
  //     this.activityGoogle = response;
  //   });
  // };

  getBars = (params) => {
    this.service.getBars(params).subscribe((response) => {
      console.log('Found Bars!!!!!!!! ', response);
      this.barOrCoffee = response;
      this.displayBarsOrCoffee(this.barOrCoffee[0].place_id);
    });
  };
  displayActivity = (activity: any) => {
    console.log(activity);
    this.service.retrievePlace(activity).subscribe((response) => {
      console.log(response);
      this.activityGoogle.push(response);
      console.log(this.activityGoogle);
    });
  };

  getActivities = (params) => {
    this.service.getActivities(params).subscribe((response) => {
      console.log(response);
      this.activity = response;
      this.activity.forEach((item) => {
        this.displayActivity(item.place_id);
      });
    });
  };

  addFavRest = (restaurant: any) => {
    this.service.addFavoriteRestaurant(restaurant);
  };
  addFavAct = (activity: any) => {
    this.service.addFavoriteActivities(activity);
  };
  addFavDrink = (drink: any) => {
    this.service.addFavoriteDrinks(drink);
  };
}
