import { ScreenMetadata, CropItem, BuyerItem, OfferItem, OrderItem, TrackingStep, PaymentItem, UserProfile } from '../types';

export const SCREEN_LIST: ScreenMetadata[] = [
  { id: 1, name: "Splash Screen", title: "Splash Screen", category: "Auth", path: "/splash" },
  { id: 2, name: "Login / Register", title: "Login / Register", category: "Auth", path: "/login" },
  { id: 3, name: "Farmer Home Dashboard", title: "Farmer Home Dashboard", category: "Farmer", path: "/dashboard" },
  { id: 4, name: "Add Crop / Sell My Crop", title: "Add Crop / Sell My Crop", category: "Farmer", path: "/add-crop" },
  { id: 5, name: "Crop Photos", title: "Crop Photos", category: "Farmer", path: "/crop-photos" },
  { id: 6, name: "Crop Review & Submit", title: "Crop Review & Submit", category: "Farmer", path: "/crop-review" },
  { id: 7, name: "Browse Buyers (Buyer Side)", title: "Find Buyers", category: "Buyer", path: "/buyers" },
  { id: 8, name: "Crop Details", title: "Crop Details", category: "Farmer", path: "/crop-details" },
  { id: 9, name: "Make Offer", title: "Make Offer", category: "Buyer", path: "/make-offer" },
  { id: 10, name: "Offers Received (Farmer Side)", title: "Offers Received", category: "Farmer", path: "/offers-received" },
  { id: 11, name: "Order / Deal Confirmed", title: "Order Details", category: "Order", path: "/order-confirmed" },
  { id: 12, name: "Order Tracking", title: "Order Tracking", category: "Order", path: "/order-tracking" },
  { id: 13, name: "Payments", title: "My Payments", category: "Account", path: "/payments" },
  { id: 14, name: "Farmer Profile", title: "My Profile", category: "Account", path: "/profile" },
];

export const MOCK_USER: UserProfile = {
  name: "Rama Krishna",
  phone: "+91 XXXXXXXXXX",
  location: "Dudukuru, East Godavari",
  avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=250&q=80"
};

export const MOCK_CROP: CropItem = {
  id: "CROP-1121",
  name: "Paddy",
  nameTelugu: "వరి",
  variety: "MTU 1121",
  quantity: 100,
  unit: "Quintals",
  expectedPrice: 2500,
  harvestDate: "20-06-2024",
  description: "Good quality, moisture max 14%",
  location: "Dudukuru, East Godavari",
  farmerName: "Rama Krishna",
  isVerified: true,
  quality: "Moisture max 14%, Good quality",
  postedAgo: "2 hrs ago",
  images: [
    "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=600&q=80"
  ]
};

export const MOCK_BUYERS: BuyerItem[] = [
  {
    id: "B-101",
    name: "Agri Traders",
    distance: "18 km away",
    rating: 4.6,
    needsQuantity: 100,
    unit: "Quintals",
    offerPrice: 2550,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "B-102",
    name: "Sri Sai Traders",
    distance: "12 km away",
    rating: 4.6,
    needsQuantity: 200,
    unit: "Quintals",
    offerPrice: 2500,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "B-103",
    name: "Green Foods",
    distance: "15 km away",
    rating: 4.6,
    needsQuantity: 50,
    unit: "Quintals",
    offerPrice: 2430,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  }
];

export const MOCK_OFFERS: OfferItem[] = [
  {
    id: "OFF-01",
    buyerName: "Agri Traders",
    time: "Today, 10:30 AM",
    pricePerQuintal: 2480,
    quantity: 100,
    unit: "Quintals",
    status: "received"
  },
  {
    id: "OFF-02",
    buyerName: "Sri Sai Traders",
    time: "Today, 09:15 AM",
    pricePerQuintal: 2500,
    quantity: 100,
    unit: "Quintals",
    status: "received"
  },
  {
    id: "OFF-03",
    buyerName: "Green Foods",
    time: "Yesterday, 04:00 PM",
    pricePerQuintal: 2430,
    quantity: 100,
    unit: "Quintals",
    status: "received"
  }
];

export const MOCK_ORDER: OrderItem = {
  id: "ORD-9921",
  buyerName: "Agri Traders",
  cropName: "MTU 1121 (Paddy)",
  variety: "MTU 1121",
  quantity: 100,
  unit: "Quintals",
  pricePerQuintal: 2500,
  totalAmount: 250000,
  pickupDate: "22-06-2024",
  paymentType: "Bank Transfer",
  status: "Confirmed"
};

export const MOCK_TRACKING: TrackingStep[] = [
  { step: 1, title: "Order Confirmed", date: "20-06-2024", time: "10:45 AM", completed: true },
  { step: 2, title: "Pickup Scheduled", date: "21-06-2024", time: "09:00 AM", completed: true },
  { step: 3, title: "Picked Up", date: "22-06-2024", time: "11:38 AM", completed: true },
  { step: 4, title: "In Transit", date: "22-06-2024", time: "12:45 PM", completed: true },
  { step: 5, title: "Out for Delivery", date: "22-06-2024", time: "04:15 PM", completed: true },
  { step: 6, title: "Delivered", date: "22-06-2024", time: "05:30 PM", completed: true },
];

export const MOCK_PAYMENTS: PaymentItem[] = [
  {
    id: "PAY-801",
    cropName: "MTU 1121 (Paddy)",
    buyerName: "Agri Traders",
    date: "22-06-2024",
    amount: 248000,
    status: "Completed"
  },
  {
    id: "PAY-802",
    cropName: "MTU 1121 (Paddy)",
    buyerName: "Sri Sai Traders",
    date: "15-06-2024",
    amount: 120000,
    status: "Completed"
  }
];

export const MARKET_PRICE_DATA = {
  crop: "MTU 1121 (Paddy)",
  currentPrice: "₹2,450",
  unit: "/Quintal",
  change: "+50 (2.08%)",
  isPositive: true
};
