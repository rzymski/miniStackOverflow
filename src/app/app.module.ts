import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrintQuestionComponent } from './print-question/print-question.component';
import { PrintListOfQuestionsComponent } from './print-list-of-questions/print-list-of-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    PrintQuestionComponent,
    PrintListOfQuestionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
