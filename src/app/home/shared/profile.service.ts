import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private homeUrl = 'assets/pending-profiles.json'; // Path to the JSON file

  constructor(private http: HttpClient) {   
  }


  // Method to get profile data from the JSON file
  getProfiles(): Observable<any> {
    return this.http.get<any>(this.homeUrl);
  }

}
