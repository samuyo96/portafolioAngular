import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../interfaces/items.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  loading = true;
  items: Item[] = [];

  constructor(private http: HttpClient) { 
    this.loadItems();
  }

  private loadItems() {
    this.http.get<Item[]>('https://curso-angular-9604f-default-rtdb.europe-west1.firebasedatabase.app/items_idx.json')
    .subscribe((resp: Item[]) => {
      this.items = resp;
      this.loading = false;
    });
  }
}
