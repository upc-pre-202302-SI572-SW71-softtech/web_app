import { Component, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { CardDevice } from "src/app/models/card-device";


@Component({
  selector: 'app-devices-iot',
  templateUrl: './devices-iot.component.html',
  styleUrls: ['./devices-iot.component.css']
})
export class DevicesIotComponent implements OnInit {
  cards: CardDevice[] = [];
  router: Router;

  constructor(Router: Router) { 
    this.router = Router;
  }

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    // create cards
    const card1: CardDevice = {
      imageUrl: 'https://media.gcflearnfree.org/content/55e073187dd48174331f516a_01_17_2014/whatisacomputer_tablet_computers.jpg',
      name: 'Mobile',
      description: 'A mobile device is a computing device small enough to hold and operate in the hand. Typically, any handheld computer device will have an LCD or OLED flatscreen interface, providing a touchscreen interface with digital buttons and keyboard or physical buttons along with a physical keyboard.',
    }; 
    const card2: CardDevice = {
      imageUrl: 'https://as1.ftcdn.net/v2/jpg/01/81/64/02/1000_F_181640288_I2Zd7jSvIlCgIHLNeSc3QqEhhZ5zMH4V.jpg',
      name: 'Milestone',
      description: 'The Milestone is a Iot Device to measure the distance between two points. This device to connect fog computing and cloud computing. Given conection of the device to the cloud, the device can send data to the cloud.',
    };
    const card3: CardDevice = {
      imageUrl: 'https://aprendelibvrefiles.blob.core.windows.net/aprendelibvre-container/course/informatica_basica/image/wearablecomp-01_xl.png',
      name: 'Wearable',
      description: 'The wearable computer is a computer that is subsumed into the personal space of the user, controlled by the user, and has both operational and interactional constancy',
    };
    // add cards to the list
    this.cards.push(card1);
    this.cards.push(card2);
    this.cards.push(card3);
  }

  // event handler for the button
  onButtonClick(): void {
    //Redirect to component iot-milestone
    this.router.navigate(['/iot-milestone']);
  }
}
