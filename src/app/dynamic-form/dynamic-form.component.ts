import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  imports:[CommonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  formElements: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve data from query parameters
    this.route.queryParams.subscribe((params) => {
      if (params['formElements']) {
        this.formElements = JSON.parse(params['formElements']);
      }
    });
  }
}
