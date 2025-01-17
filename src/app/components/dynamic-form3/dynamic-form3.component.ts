import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-form3',
  imports: [CommonModule],
  templateUrl: './dynamic-form3.component.html',
  styleUrls: ['./dynamic-form3.component.css'],
})
export class DynamicForm3Component implements OnInit {
  formElements: any[] = [];

  constructor() {}

  ngOnInit() {
    this.formElements = history.state.formElements;
  }
}
