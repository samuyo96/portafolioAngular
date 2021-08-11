import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               public itemService: ItemsService) { 

  }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.itemService.searchItem(params['term']);
    });
  }

}
