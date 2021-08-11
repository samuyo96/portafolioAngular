import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../interfaces/items.interface';
import { ItemComplete } from '../interfaces/itemComplete.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  loading = true;
  items: Item[] = [];
  filteredItems: Item[] = [];

  constructor(private http: HttpClient) { 
    this.loadItems();
  }

  private loadItems() {
    return new Promise<void>((resolve, reject)=>{
      this.http.get<Item[]>('https://curso-angular-9604f-default-rtdb.europe-west1.firebasedatabase.app/items_idx.json')
      .subscribe((resp: Item[]) => {
        this.items = resp;
        this.loading = false;
        resolve();
      });
    });
  }

  getItem (id: string) {
    return this.http.get<ItemComplete>(`https://curso-angular-9604f-default-rtdb.europe-west1.firebasedatabase.app/items/${id}.json`)

  }

  searchItem (term: string){
    if (this.items.length === 0){
      this.loadItems().then(() =>{
        this.filterItems(term);
      });
    } else {
      this.filterItems(term);
    }
  }

  private filterItems (term: string){
    term = term.toLocaleLowerCase();
    this.filteredItems = [];
    this.items.forEach(item =>{
      const lower = item.titulo.toLocaleLowerCase();
      if (item.categoria.indexOf(term) >= 0 ||
          lower.indexOf(term) >= 0){
        this.filteredItems.push(item);
      }
    });
  }
}
