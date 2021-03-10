import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError,} from 'rxjs/operators';
import { throwError, } from 'rxjs';
import { DragList } from './drag-model';
 
@Injectable({
  providedIn: 'root'
})
export class DragService {
 
  baseUrl: string;
  headers: {};
 
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3004';
    this.headers =  { 'Content-Type': 'application/json' };
  }
 
  getUiLists() {
    return this.http.get<DragList[]>(`${this.baseUrl}/uicomponents`, { headers: this.headers })
      .pipe(catchError((error: any) => throwError(error.message)));
  }
}