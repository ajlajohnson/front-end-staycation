import { Component, Input, OnInit } from '@angular/core';
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
  activity: any;
  barOrCoffee: any;
  barOrCoffeeGoogle: any;
  restaurantGoogle: any;
  activityGoogle: any;

  constructor(private service: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: any) => {
      console.log(params.params);
      this.getRestaurants(params.params);
      this.getBars(params.params);
      this.getActivities(params.params);

    });
  }

  displayRestaurant = (restaurant) => {
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
      this.displayRestaurant(this.restaurant[0].placeid);
      console.log(this.restaurant);
    });
  };


  displayBarsOrCoffee = (bar: any) => {
    console.log(bar);
    this.service.retrievePlace(bar).subscribe((response) => {
      console.log(response);
      this.barOrCoffeeGoogle = response;
    });
  };

  displayActivity = (activity: any) => {
    console.log(activity);
    this.service.retrievePlace(activity).subscribe((response) => {
      console.log(response);
      this.activityGoogle = response;
    });
  };


  getBars = (params) => {
    this.service.getBars(params).subscribe((response) => {
      console.log('Found Bars!!!!!!!! ', response);
      this.barOrCoffee = response;
      this.displayBarsOrCoffee(this.barOrCoffee[0].place_id);
    });
  };

  getActivities = (params) => {
    this.service.getActivities(params).subscribe((response) => {
      console.log(response);
      this.activity = response;
      this.displayActivity(this.activityGoogle[0].place_id);
    });
  };
}
