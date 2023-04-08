import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StoreService } from '../../lib/services/store.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  
  myform: FormGroup;

  constructor(
    private store: StoreService
  ) { }

  ngOnInit() {
    this.myform = new FormGroup({
      nom : new FormControl(),
      prenom: new FormControl()
    });
  }

  onSubmit() {
    console.log('---',this.myform.value);
    if (this.myform.value.nom) {
      this.store.user.nom = this.myform.value.nom;
    }
    if (this.myform.value.prenom) {
      this.store.user.prenom = this.myform.value.prenom;
    }
  }

}
