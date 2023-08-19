import { Component, OnInit } from '@angular/core';
import { Place } from '../places.model';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers: Place[] = [];
  constructor(private placeservice:PlacesService, private router: Router ) { }

  ngOnInit() {
    this.offers=this.placeservice.places
  }
  onEdit(placeId: string, slidingItem: IonItemSliding){
    slidingItem.close()
    this.router.navigate(['/','places','tabs','offers','edit',placeId])
    console.log('Editing item ',placeId)
  }

}
