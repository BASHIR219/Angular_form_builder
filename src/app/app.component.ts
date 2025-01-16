import { Component } from '@angular/core';
import { FormBuilderComponent } from './form-builder/form-builder.component';

@Component({
  selector: 'app-root',
  imports: [FormBuilderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Form Builder App';
}
