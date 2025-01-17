import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicForm2Component } from './dynamic-form2.component';

describe('DynamicForm2Component', () => {
  let component: DynamicForm2Component;
  let fixture: ComponentFixture<DynamicForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicForm2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
