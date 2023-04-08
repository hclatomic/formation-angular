import { Component, OnInit } from '@angular/core';
import { ApiService } from '../lib/services/api.service';
import { StoreService } from '../lib/services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any;

  constructor(
    private api: ApiService,
    public store: StoreService
  ) {
      this.api.getUser();
   }
   
  ngOnInit() {}
}
