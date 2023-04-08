import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { StoreService }  from './store.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private store: StoreService
  ) { 

  }

  getUser = () => {
    this.store.status.loading++;
    setTimeout( () => {
      this.http.get('assets/user.json').subscribe({
        next: result => { this.store.user = result; },
        error: err => { console.error('Error: ' + err); },
        complete: () => { 
          console.log('-- call ended --'); 
          this.store.status.loading--;
        }  
      });
    },2000);
  }

  getDocuments = () => {
    this.store.status.loading++;
    setTimeout( () => {
      this.http.get('assets/documents.json').subscribe({
        next: result => { this.store.data.documents = result; },
        error: err => { console.error('Error: ' + err); },
        complete: () => { 
          console.log('-- call ended --'); 
          this.store.status.loading--;
        }  
      });
    },2000);
  }
 


}
