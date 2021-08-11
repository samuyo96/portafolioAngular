import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../services/items.service';
import { ItemComplete } from '../../interfaces/itemComplete.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemDescrp: ItemComplete = {};
  itemId?: string;
  load = false;

  constructor(private route: ActivatedRoute,
              public itemServ: ItemsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.itemServ.getItem(params['id'])
      .subscribe ((item: ItemComplete) => {
        this.itemDescrp = item;
        this.itemId = params['id'];
        this.load = true;
      });
    });
  }

}
