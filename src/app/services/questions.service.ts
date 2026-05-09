import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QuestionCategory, QuestionsData } from '../models/questions.model';

@Injectable({ providedIn: 'root' })
export class QuestionsService {
  private http = inject(HttpClient);

  getQuestions(): Observable<QuestionCategory[]> {
    return this.http
      .get<QuestionsData>('/data/questionsv2.json')
      .pipe(map(data => data.questions));
  }
}
