import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css'],
})
export class QuizFormComponent implements OnInit {
  constructor(private service: DataService) {}

  ngOnInit(): void {}

  // submit = ()=>{

  // }
}
