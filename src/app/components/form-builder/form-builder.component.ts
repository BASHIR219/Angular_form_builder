import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataService } from '../../services/form-data.service';

@Component({
  selector: 'app-form-builder',
  imports:[ReactiveFormsModule,FormsModule],
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  inputName: string = '';
  inputType: string = 'text';
  required: string = 'false';
  inputLabel: string = '';
  formElements: any[] = [];
  generatedFormHtml: string = '';

  constructor(private router: Router,private formDataService: FormDataService) {}

  navigateToDynamicForm() {
    this.router.navigate(['/dynamic-form'], {
      queryParams: { formElements: JSON.stringify(this.formElements) },
    });
  }

  navigateToDynamicForm2() {
    this.formDataService.setFormElements(this.formElements);
    this.router.navigate(['/dynamic-form2']);
  }

  navigateToDynamicForm3() {
    this.router.navigate(['/dynamic-form3'],{state:{formElements:this.formElements}});
  }

  addElement() {
    if (!this.inputName || !this.inputLabel) {
      alert('Please fill in all fields');
      return;
    }

    const newElement = {
      name: this.inputName,
      type: this.inputType,
      required: this.required === 'true',
      label: this.inputLabel,
    };

    this.formElements.push(newElement);

    // Reset the form inputs
    this.inputName = '';
    this.inputType = 'text';
    this.required = 'false';
    this.inputLabel = '';
  }

  createForm() {
    let formHTML = '<form id="dynamicForm">\n';

    this.formElements.forEach(element => {
      formHTML += `  <label for="${element.name}">${element.label}</label>\n`;

      if (element.type === 'dropdown') {
        formHTML += `  <select name="${element.name}" id="${element.name}"${element.required ? ' required' : ''}>\n`;
        formHTML += `    <option value="Option 1">Option 1</option>\n`;
        formHTML += `  </select>\n`;
      } else {
        formHTML += `  <input type="${element.type}" name="${element.name}" id="${element.name}"${element.required ? ' required' : ''}>\n`;
      }
    });

    formHTML += '</form>';

    this.generatedFormHtml = formHTML;
  }
}
