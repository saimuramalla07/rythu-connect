export type ScreenId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

export interface ScreenMetadata {
  id: ScreenId;
  title: string;
  name: string;
  category: 'Farmer' | 'Buyer' | 'Auth' | 'Order' | 'Account';
  path: string;
}

export interface CropItem {
  id: string;
  name: string;
  nameTelugu: string;
  variety: string;
  quantity: number;
  unit: string;
  expectedPrice: number;
  harvestDate: string;
  description: string;
  location: string;
  farmerName: string;
  isVerified: boolean;
  quality: string;
  postedAgo: string;
  images: string[];
}

export interface BuyerItem {
  id: string;
  name: string;
  distance: string;
  rating: number;
  needsQuantity: number;
  unit: string;
  offerPrice: number;
  avatar: string;
}

export interface OfferItem {
  id: string;
  buyerName: string;
  time: string;
  pricePerQuintal: number;
  quantity: number;
  unit: string;
  status: 'received' | 'accepted' | 'rejected';
}

export interface OrderItem {
  id: string;
  buyerName: string;
  cropName: string;
  variety: string;
  quantity: number;
  unit: string;
  pricePerQuintal: number;
  totalAmount: number;
  pickupDate: string;
  paymentType: string;
  status: string;
}

export interface TrackingStep {
  step: number;
  title: string;
  date: string;
  time: string;
  completed: boolean;
}

export interface PaymentItem {
  id: string;
  cropName: string;
  buyerName: string;
  date: string;
  amount: number;
  status: 'Completed' | 'Pending';
}

export interface UserProfile {
  name: string;
  phone: string;
  location: string;
  avatar: string;
}
