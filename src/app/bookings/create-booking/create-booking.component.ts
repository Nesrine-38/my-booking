import { Component, OnInit, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Place } from 'src/app/places/places.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent  implements OnInit {

  @Input() selectedPlace?: Place

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onBookPlace() {
    this.modalCtrl.dismiss({message: 'this is a dummy data'}, 'confirm');
  }

  onCancel() {
    this.modalCtrl.dismiss(null,'cancel');
  }

}
