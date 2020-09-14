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

  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void { }

  submit = (form: NgForm): any => {
    // this.add.emit(form.value);
    console.log(form.value);
    this.router.navigate(['results'], {
      queryParams: {
        city: form.value.city,
        tod: form.value.time,
        atmosphere: form.value.atmosphere,
        kids: form.value.kids,
        // interest: form.value
      }
    });
  }






}
