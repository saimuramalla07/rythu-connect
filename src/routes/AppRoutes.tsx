import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { SellCropPage } from '../pages/SellCropPage';
import { MarketplacePage } from '../pages/MarketplacePage';
import { CropDetailPage } from '../pages/CropDetailPage';
import { MakeOfferPage } from '../pages/MakeOfferPage';
import { OffersPage } from '../pages/OffersPage';
import { OrderConfirmedPage } from '../pages/OrderConfirmedPage';
import { OrderTrackingPage } from '../pages/OrderTrackingPage';
import { PaymentsPage } from '../pages/PaymentsPage';
import { ProfilePage } from '../pages/ProfilePage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/sell-crop" element={<SellCropPage />} />
      <Route path="/marketplace" element={<MarketplacePage />} />
      <Route path="/crop-detail" element={<CropDetailPage />} />
      <Route path="/make-offer" element={<MakeOfferPage />} />
      <Route path="/offers" element={<OffersPage />} />
      <Route path="/order-confirmed" element={<OrderConfirmedPage />} />
      <Route path="/order-tracking" element={<OrderTrackingPage />} />
      <Route path="/payments" element={<PaymentsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
