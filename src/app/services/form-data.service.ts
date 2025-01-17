import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  formElements: any[] = [];

  setFormElements(elements: any[]) {
    this.formElements = elements;
  }

  getFormElements(): any[] {
    return this.formElements;
  }
}
