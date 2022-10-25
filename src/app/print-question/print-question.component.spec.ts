import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintQuestionComponent } from './print-question.component';

describe('PrintQuestionComponent', () => {
  let component: PrintQuestionComponent;
  let fixture: ComponentFixture<PrintQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
