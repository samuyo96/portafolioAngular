import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopageService {

  info: InfoPage = {};
  team: any[] = [];

  read = false;

  constructor(private http: HttpClient) { 
    this.chargeInfo();
    this.chargeTeam();
  }

  private chargeInfo () {
    this.http.get('assets/data/data-page.json')
    .subscribe((resp: InfoPage) => {
      this.read = true;
      this.info = resp;
    });
  }

  private chargeTeam () {
    this.http.get('https://curso-angular-9604f-default-rtdb.europe-west1.firebasedatabase.app/team.json')
    .subscribe((resp: any) => {
      this.team = resp;
    });
  }
}
