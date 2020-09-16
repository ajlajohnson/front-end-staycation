import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css'],
})
export class QuizFormComponent implements OnInit {
  // @Output() add = new EventEmitter<any>();
  clicked: boolean = false;
  clickedInterests: string[] = [];

  constructor(private service: DataService, private router: Router) {}

  ngOnInit(): void {}

  submit = (form: NgForm): any => {
    // this.add.emit(form.value);
    console.log(form.value);
    console.log('this is interests *****', form.value.interests);
    let test = undefined;
    if (form.value.kids === true) {
      test = 1;
    } else {
      test = 0;
    }
    let interestSelected = this.getInterests(form.value.interests);
    this.router.navigate(['results'], {
      queryParams: {
        city: form.value.city,
        tod: form.value.time,
        atmosphere: form.value.atmosphere,
        kids: test,
        interest: interestSelected,
      },
    });
  };

  getInterests = (optionsObj: any) => {
    let checkedInterests: string[] = [];
    for (const [key, value] of Object.entries(optionsObj)) {
      // console.log(`${key}: ${value}`);
      if (value) {
        console.log(`pushed ${key}: ${value}`);
        checkedInterests.push(key);
      }
    }
    console.log(`checkedInterests ${checkedInterests}`);
    return checkedInterests;
  };

  toggleClicked = (interest: string) => {
    if (this.clickedInterests.includes(interest)) {
      let index = this.clickedInterests.findIndex((interest) => {
        return interest === interest;
      });
      this.clickedInterests.splice(index, 1);
      if (this.clickedInterests.length >= 1) {
        this.clicked = true;
      } else {
        this.clicked = false;
      }
    } else {
      this.clickedInterests.push(interest);
      this.clicked = true;
    }
  };
}
