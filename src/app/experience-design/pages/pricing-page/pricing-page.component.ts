import { Component } from '@angular/core';
import {PricingCardData} from "../../model/valueobjects/pricing-card";

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.css']
})
export class PricingPageComponent {
  pricingData: PricingCardData = [
    {
      title: 'Starter',
      description: 'For hobby small business.',
      price: 'S/.100.00',
      period: 'per month',
      devicesAmount: '15 device',
      premiumSupport: '6',
      freeUpdates: '3',
      firstFeat: 'First feature',
      secondFeat: 'Second feature',
    },
    {
      title: 'Business',
      description: 'For solid business .',
      price: 'S/.250.00',
      period: 'per month',
      devicesAmount: '50 device',
      premiumSupport: '12',
      freeUpdates: '3',
      firstFeat: 'First feature',
      secondFeat: 'Second feature',
    },
    {
      title: 'Enterprise',
      description: 'For enterprises.',
      price: 'S/.350.00',
      period: 'per month',
      devicesAmount: '80',
      premiumSupport: '18',
      freeUpdates: '3',
      firstFeat: 'First feature',
      secondFeat: 'Second feature',
    },
  ];
}
