import { Component } from '@angular/core';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormBuilderComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Form Builder App';
}
