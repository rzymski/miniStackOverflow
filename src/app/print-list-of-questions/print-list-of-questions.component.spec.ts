import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintListOfQuestionsComponent } from './print-list-of-questions.component';

describe('PrintListOfQuestionsComponent', () => {
  let component: PrintListOfQuestionsComponent;
  let fixture: ComponentFixture<PrintListOfQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintListOfQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintListOfQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
