import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  data: any = {};
  user: any = {};
  status: any = {
    loading: 0
  };

  constructor() { }
}
