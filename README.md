# RythuConnect (రైతుకి మంచి ధర • రైతు కోసం.. రైతుతోనే)

> **Farmer &rarr; Market &rarr; Better Price**
> A modern, responsive, full-stack ready agricultural web application empowering local farmers to connect directly with regional traders, list crop yields, accept competitive bids, track logistics, and receive transparent payouts.

---

## 🚀 Key Modules & Features

- 🌾 **Landing & Hero Marketplace**: High-impact agricultural landing page with live market price ticker for Paddy (MTU 1121), quick action service cards, top regional buyers preview, and customer support portal (+91 98765 43210).
- 📊 **Farmer Dashboard**: Real-time earnings summary (₹2,48,000 Total Monthly Earnings), active crop listing metrics, pending offers alert, and 7-day market price trajectory chart.
- 📝 **Sell Crop Wizard (4-Step Form)**:
  1. *Crop Info*: Select crop (Paddy / వరి, Cotton, Chilli, Maize), variety (MTU 1121), available quantity (100 Quintals), and expected price per quintal.
  2. *Quality & Harvest Details*: Harvest date picker, location (Dudukuru, East Godavari), quality notes.
  3. *Photo Gallery*: Drag & drop photo upload zone with sample crop thumbnail management.
  4. *Review & Submit*: Complete specifications summary card and confirmation checkbox.
- 🏬 **Buyer Marketplace**: Filterable trader directory (Agri Traders, Sri Sai Traders, Green Foods) with distance markers, star ratings, required stock, buying price per quintal, and direct chat/offer buttons.
- 💬 **Offer Management**: Received Offers (3) vs Accepted Offers (1) dashboard featuring instant Reject (red outline) and Accept Offer (emerald solid) actions.
- 🚚 **Order Confirmation & Logistics Tracking**: Confirmed deal invoice (Total: ₹2,50,000), pickup schedule (22-06-2024 via Bank Transfer), vertical step-by-step progress timeline, and simulated live GPS map tracking widget.
- 💳 **Payments & Earnings Dashboard**: Direct bank payout tracking (SBI A/C ••••4821), monthly earnings metrics, and transaction history table.
- 👤 **Farmer Profile & Settings**: Verified farmer account details for Rama Krishna, land acreage records, verification documents, security settings, and language toggle (తెలుగు / English).

---

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Autoprefixer + Custom Palette (Emerald/Agricultural Green)
- **Icons**: Lucide React
- **Routing**: React Router DOM v6
- **Build Tool**: Vite

---

## 📦 Project Structure

```
rythu-connect/
├── public/
├── src/
│   ├── components/
│   │   ├── common/         # Stepper, HeaderNav, BottomNav, PhoneFrame
│   │   ├── landing/        # Promo Sidebar, Features, Mission, Support
│   │   └── layout/         # Navbar, Footer, MainLayout
│   ├── data/               # Mock data (Crops, Buyers, Offers, Orders, Payments, Profile)
│   ├── pages/              # Web Application Pages
│   │   ├── LandingPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── SellCropPage.tsx
│   │   ├── MarketplacePage.tsx
│   │   ├── CropDetailPage.tsx
│   │   ├── MakeOfferPage.tsx
│   │   ├── OffersPage.tsx
│   │   ├── OrderConfirmedPage.tsx
│   │   ├── OrderTrackingPage.tsx
│   │   ├── PaymentsPage.tsx
│   │   └── ProfilePage.tsx
│   ├── routes/             # React Router Setup
│   ├── types/              # TypeScript Type Definitions
│   ├── App.tsx             # Root Application Component
│   ├── main.tsx            # Entry Point
│   └── index.css           # Tailwind Styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

---

## 💻 Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/saimuramalla07/rythu-connect.git
   cd rythu-connect
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📜 License

Created for RythuConnect • All Rights Reserved.
