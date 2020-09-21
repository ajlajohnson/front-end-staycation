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
  clicked: boolean = false;
  clickedInterests: string[] = [];
  show: number = 1;
  q1Selection: string;
  q2Selection: number;
  q3Selection: number;
  q4Selection: string[] = [];
  kidFriendly: number = 0;

  constructor(private service: DataService, private router: Router) {}

  ngOnInit(): void {}

  // submit = (form: NgForm): any => {
  //   // this.add.emit(form.value);
  //   console.log(form.value);
  //   console.log('this is interests *****', form.value.interests);
  //   let test = undefined;
  //   if (form.value.kids === true) {
  //     test = 1;
  //   } else {
  //     test = 0;
  //   }
  //   let interestSelected = this.getInterests(form.value.interests);
  //   this.router.navigate(['results'], {
  //     queryParams: {
  //       city: form.value.city,
  //       tod: form.value.time,
  //       atmosphere: form.value.atmosphere,
  //       kids: test,
  //       interest: interestSelected,
  //     },
  //   });
  // };

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

  q1Method = (value: string) => {
    this.q1Selection = value;
    this.show = 2;
  };

  q2Method = (value: number) => {
    this.q2Selection = value;
    this.show = 3;
  };

  q3Method = (value: number) => {
    this.q3Selection = value;
    this.show = 4;
  };

  q4Method = (value: string) => {
    if (this.q4Selection.includes(value)) {
      let index = this.q4Selection.findIndex((interest) => {
        return interest === value;
      });
      this.q4Selection.splice(index, 1);
      if (this.q4Selection.length >= 1) {
        this.clicked = true;
      } else {
        this.clicked = false;
      }
    } else {
      this.q4Selection.push(value);
      this.clicked = true;
    }
  };

  checkInterest = (interest: string): boolean => {
    return this.q4Selection.includes(interest);
  };

  toggleCheck = () => {
    if (this.kidFriendly === 0) {
      this.kidFriendly = 1;
    } else {
      this.kidFriendly = 0;
    }
  };

  submitQuiz = () => {
    console.log(this.q1Selection);
    console.log(this.q2Selection);
    console.log(this.q3Selection);
    console.log(this.q4Selection);
    console.log(this.kidFriendly);
    this.router.navigate(['results'], {
      queryParams: {
        city: this.q1Selection,
        tod: this.q2Selection,
        atmosphere: this.q3Selection,
        interest: this.q4Selection,
        kids: this.kidFriendly,
      },
    });
  };
}
