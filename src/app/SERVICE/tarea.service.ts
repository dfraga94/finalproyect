import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  url = 'http://localhost:8080/api/tareas';
  constructor(private Http: HttpClient) { }

  getTareas(): Observable<any> {
    return this.Http.get(this.url);
  }

  getUnaTarea(id: string): Observable<any> {
    return this.Http.get(this.url + '/' + id);
  }

  saveTarea(tarea: Tarea): Observable<any> {
    return this.Http.post(this.url, tarea);
  }

  editTarea(id: string, tarea: Tarea): Observable<any> {
    return this.Http.put(this.url + '/' + id, tarea);
  }

  deleteTarea(id: string): Observable<any> {
    return this.Http.delete(this.url + '/' + id);
  }

}


export interface Tarea {
  id:string; 
  tarea:string;
  finalizado:boolean;
}