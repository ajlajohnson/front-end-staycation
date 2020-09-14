import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { analyzeFileForInjectables } from '@angular/compiler';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  placeId: any;
  @Input() info: any;
  restaurants: any = [];


  constructor(private service: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.displayResults();
    this.route.queryParamMap.subscribe((params: any) => {
      console.log(params.params);
      this.getRestaurants(params.params);
    })
  }

  displayResults = () => {
    return this.service.retrievePlace().subscribe((response) => {
      console.log(response);
    });
  }

  getRestaurants = (params) => {
    this.service.getRestaurants(params).subscribe((response) => {
      console.log(response);
    });
  }

  // filterRestaurants = () => {
  //   this.restaurants.filter((restaurant)=> {
  //     restaurant.city == 
  //   });

}
