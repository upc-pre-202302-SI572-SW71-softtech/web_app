import {Component, Input} from '@angular/core';
import {PricingCard} from "../../model/valueobjects/pricing-card";

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.css']
})
export class PricingCardComponent {
  @Input()
  pricingData: PricingCard = {
    title: '',
    description: '',
    price: '',
    period: '',
    devicesAmount: '',
    premiumSupport: '',
    freeUpdates: '',
    firstFeat: '',
    secondFeat: '',
  };
}
