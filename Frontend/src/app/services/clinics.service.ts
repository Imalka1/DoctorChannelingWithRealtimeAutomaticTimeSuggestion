import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clinic } from '../dtos/Clinic';

const URL = "/clinics";

@Injectable({
  providedIn: 'root'
})
export class ClinicsService {

  constructor(private http: HttpClient) { }

  saveClinic(clinic: Clinic): Observable<boolean> {
    return this.http.post<boolean>(environment.backend_url + URL + "/addClinic", clinic);
  }

  getAllClinics(): Observable<Array<Clinic>> {
    return this.http.get<Array<Clinic>>(environment.backend_url + URL + "/getAllClinics");
  }

  // updateStudent(student: Student): Observable<boolean> {
  //   return this.http.post<boolean>(environment.backend_url + URL + "/updateStudent", student);
  // }
}