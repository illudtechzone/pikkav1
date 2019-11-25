import { ModalController } from '@ionic/angular';
import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {

  user;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

}
