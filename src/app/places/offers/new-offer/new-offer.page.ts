import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Place } from '../../places.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  @Input()
  place: Place = { id:'',title: '', description: '', imageUrl: '', price:0 };

  @Output()
  added = new EventEmitter<Place>();

  constructor(){}

  ngOnInit() {
  }
  handleSubmit() {
    this.added.emit(this.place);
  }

  ajouter(){
    console.log('offers ajoutés')
  }

}
