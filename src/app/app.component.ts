import { Component } from '@angular/core';
import { InfopageService } from './services/infopage.service';
import { ItemsService } from './services/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public _infopage: InfopageService,
              public _itemServ: ItemsService){

  }
}
