export interface PricingCard {
  title: string;
  description: string;
  price: string;
  period: string;
  devicesAmount: string;
  premiumSupport: string;
  freeUpdates: string;
  firstFeat: string;
  secondFeat: string;
}
export interface PricingCardData
  extends Array<PricingCard> {}
