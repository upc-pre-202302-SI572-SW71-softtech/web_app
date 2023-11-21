import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Travel} from "../../../models/travel";
import {TravelService} from "../../travels/travel.service";


@Component({
  selector: 'app-travel-card',
  templateUrl: './travel-card.component.html',
  styleUrls: ['./travel-card.component.css']
})
export class TravelCardComponent{



  @Input()
  travel: Travel={};
  @Output()
  deleted= new EventEmitter<boolean>(false);

  constructor(private travelService: TravelService) { }
  getStarsArray(){
    return new Array(this.travel.stars);
  }
  deleteTravel(){
    if(this.travel.id==undefined) return;
    this.travelService.deleteTravel(this.travel.id)
    this.deleted.emit(true)
  }

}
