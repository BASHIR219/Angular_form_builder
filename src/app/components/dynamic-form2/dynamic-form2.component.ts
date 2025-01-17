import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../../services/form-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-form2',
  imports: [CommonModule],
  templateUrl: './dynamic-form2.component.html',
  styleUrls: ['./dynamic-form2.component.css'],
})
export class DynamicForm2Component implements OnInit {
  formElements: any[] = [];

  constructor(private formDataService: FormDataService) {}

  ngOnInit() {
    this.formElements = this.formDataService.getFormElements();
    console.log(this.formElements);
  }
}
