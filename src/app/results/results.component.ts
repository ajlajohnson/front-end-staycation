import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  placeId: any;


  constructor(private service: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.displayResults();
  }

  displayResults = () => {
    return this.service.retrievePlace().subscribe((response) => {
      console.log(response);
    });
  }

}
