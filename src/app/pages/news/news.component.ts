import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../lib/services/store.service';
import { ApiService } from '../../lib/services/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(
    public store: StoreService,
    private api: ApiService
  ) {

    if(!this.store.data.documents) {
      this.api.getDocuments();
    }

   }

  ngOnInit() {
  }

}
