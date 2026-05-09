import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cheatsheet, CheatsheetData } from '../models/cheatsheet.model';

@Injectable({ providedIn: 'root' })
export class CheatsheetsService {
  private http = inject(HttpClient);

  getCheatsheets(): Observable<Cheatsheet[]> {
    return this.http
      .get<CheatsheetData>('/data/cheatsheets.json')
      .pipe(map(data => data.cheatsheets));
  }
}
