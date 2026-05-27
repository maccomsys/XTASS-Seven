import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import GlobalNavigation from './components/GlobalNavigation';
import AirportTransfers from './components/AirportTransfers';
import Footer from './components/Footer';
import ForgotPassword from './components/ForgotPassword';
import GroupTransportation from './components/GroupTransportation';
import Header from './components/Header';
import InstantPickup from './components/InstantPickup';
import LongTermRental from './components/LongTermRental';
import MainContent from './components/MainContent';
import OneWayRental from './components/OneWayRental';
import VehicleFleet from './components/VehicleFleet';
import WeekendRental from './components/WeekendRental';
import StartReservation from './components/StartReservation';
import ManageReservation from './components/ManageReservation';
import ServiceAreas from './components/ServiceAreas';
import PricingInformation from './components/PricingInformation';
import SafetyGuidelines from './components/SafetyGuidelines';
import AccessibilityServices from './components/AccessibilityServices';
import Careers from './components/Careers';
import PressMedia from './components/PressMedia';
import EmergencyHotline from './components/EmergencyHotline';
import RentalFaqs from './components/RentalFaqs';
import VehicleComparison from './components/VehicleComparison';
import ReportIssue from './components/ReportIssue';
import LostFound from './components/LostFound';
import TermsConditions from './components/TermsConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';
import RefundCancelPolicy from './components/RefundCancelPolicy';
import DriverAgreement from './components/DriverAgreement';
import CommunityGuidelines from './components/CommunityGuidelines';
import DataProtectionPolicy from './components/DataProtectionPolicy';
import ComplianceSafetyPolicy from './components/ComplianceSafetyPolicy';
import LicensingInformation from './components/LicensingInformation';
import InsuranceCoverage from './components/InsuranceCoverage';
import SessionTimeout from './components/SessionTimeout';
import Register from './components/Register';
import ScheduledPickup from './components/ScheduledPickup';
import SignIn from './components/SignIn';
import OtpVerification from './components/OtpVerification';
import LivePhotoLogin from './components/LivePhotoLogin';
import PostLoginVerification from './components/PostLoginVerification';
import BookingStep1 from './components/booking/BookingStep1';
import BookingStep2 from './components/booking/BookingStep2';
import BookingStep3 from './components/booking/BookingStep3';
import BookingStep4 from './components/booking/BookingStep4';
import BookingStep5 from './components/booking/BookingStep5';
import BookingConfirmation from './components/BookingConfirmation';
import TripTracking from './components/TripTracking';
import TripReceipt from './components/TripReceipt';
import CustomerDashboard from './components/CustomerDashboard';
import MyBookings from './components/MyBookings';
import BookingDetail from './components/BookingDetail';
import ModifyBooking from './components/ModifyBooking';
import CancelBooking from './components/CancelBooking';
import TripHistory from './components/TripHistory';
import MyAccountDashboard from './components/MyAccountDashboard';
import ProfileEdit from './components/ProfileEdit';
import SavedPassengers from './components/SavedPassengers';
import EmergencyContacts from './components/EmergencyContacts';
import SavedPaymentMethods from './components/SavedPaymentMethods';
import SavedLocations from './components/SavedLocations';
import SecuritySettings from './components/SecuritySettings';
import NotificationPreferences from './components/NotificationPreferences';
import AvailableVehicles from './components/AvailableVehicles';
import VehicleDetail from './components/VehicleDetail';
import DriverDetails from './components/DriverDetails';
import RentalVehicleDetail from './components/RentalVehicleDetail';
import PaymentSelection from './components/PaymentSelection';
import PaymentProcessing from './components/PaymentProcessing';
import Sitemap from './components/Sitemap';
import SpecialNeeds from './components/SpecialNeeds';
import HelpSupport from './components/HelpSupport';
import RecentlyViewed from './components/RecentlyViewed';
import RentalConfirmation from './components/RentalConfirmation';
import AdminLogin from './components/admin/AdminLogin';
import AdminPasswordRecovery from './components/admin/AdminPasswordRecovery';
import AdminDashboard from './components/admin/AdminDashboard';
import AllReservations from './components/admin/AllReservations';
import ReservationDetail from './components/admin/ReservationDetail';
import CreateReservation from './components/admin/CreateReservation';
import ModifyReservation from './components/admin/ModifyReservation';
import CancelReservation from './components/admin/CancelReservation';
import FleetOverview from './components/admin/FleetOverview';
import AddVehicle from './components/admin/AddVehicle';

import EditVehicle from './components/admin/EditVehicle';
import AdminVehicleDetail from './components/admin/AdminVehicleDetail';
import VehicleAvailability from './components/admin/VehicleAvailability';
import VehicleMaintenance from './components/admin/VehicleMaintenance';
import VehiclePricing from './components/admin/VehiclePricing';
import VehicleImages from './components/admin/VehicleImages';

import AllLocations from './components/admin/AllLocations';
import AddLocation from './components/admin/AddLocation';
import EditLocation from './components/admin/EditLocation';
import LocationDetail from './components/admin/LocationDetail';

import CustomerList from './components/admin/CustomerList';
import CustomerProfile from './components/admin/CustomerProfile';
import CustomerBookingHistory from './components/admin/CustomerBookingHistory';
import CustomerPaymentHistory from './components/admin/CustomerPaymentHistory';

import DriverList from './components/admin/DriverList';
import AddDriver from './components/admin/AddDriver';
import EditDriver from './components/admin/EditDriver';
import AdminDriverDetail from './components/admin/AdminDriverDetail';
import DriverEarnings from './components/admin/DriverEarnings';
import RateDashboard from './components/admin/RateDashboard';
import AddEditRate from './components/admin/AddEditRate';
import ProtectionManagement from './components/admin/ProtectionManagement';
import EquipmentManagement from './components/admin/EquipmentManagement';
import AddEditExtra from './components/admin/AddEditExtra';
import HomepageEditor from './components/admin/HomepageEditor';
import FAQManagement from './components/admin/FAQManagement';
import ArticleList from './components/admin/ArticleList';
import AddEditArticle from './components/admin/AddEditArticle';
import DealsEditor from './components/admin/DealsEditor';
import PolicyManagement from './components/admin/PolicyManagement';
import VehiclePagesEditor from './components/admin/VehiclePagesEditor';
import ServicePagesEditor from './components/admin/ServicePagesEditor';
import RevenueReport from './components/admin/RevenueReport';

import BookingReport from './components/admin/BookingReport';
import VehicleUtilisationReport from './components/admin/VehicleUtilisationReport';
import CustomerAnalytics from './components/admin/CustomerAnalytics';
import DriverPerformanceReport from './components/admin/DriverPerformanceReport';
import NotificationManagement from './components/admin/NotificationManagement';

import EmailTemplateManagement from './components/admin/EmailTemplateManagement';
import SmsTemplateManagement from './components/admin/SmsTemplateManagement';
import GeneralSettings from './components/admin/GeneralSettings';
import SessionSecuritySettings from './components/admin/SessionSecuritySettings';
import PaymentDisplaySettings from './components/admin/PaymentDisplaySettings';

import SupportedAirports from './components/admin/SupportedAirports';
import CancellationPolicySettings from './components/admin/CancellationPolicySettings';
import BookingRulesConfig from './components/admin/BookingRulesConfig';
import ExtrasConfig from './components/admin/ExtrasConfig';
import LiveOperationsDashboard from './components/admin/LiveOperationsDashboard';
import ActiveTripsMap from './components/admin/ActiveTripsMap';
import ActivityLog from './components/admin/ActivityLog';
import SystemEventsLog from './components/admin/SystemEventsLog';
import SitemapOverview from './components/admin/SitemapOverview';

import AllPayments from './components/admin/AllPayments';
import SupportTickets from './components/admin/SupportTickets';
import TicketDetail from './components/admin/TicketDetail';

import DriverLogin from './components/driver/DriverLogin';
import DriverPasswordRecovery from './components/driver/DriverPasswordRecovery';
import DriverSetupPassword from './components/driver/DriverSetupPassword';
import DriverProfile from './components/driver/DriverProfile';
import AssignedVehicle from './components/driver/AssignedVehicle';
import DriverDashboard from './components/driver/DriverDashboard';
import TripRequestScreen from './components/driver/TripRequestScreen';
import TripManagementScreen from './components/driver/TripManagementScreen';
import TripCompletionScreen from './components/driver/TripCompletionScreen';
import DriverSettings from './components/driver/DriverSettings';
import DriverSupport from './components/driver/DriverSupport';
import DriverTripHistory from './components/driver/DriverTripHistory';

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isSessionTimeout = location.pathname === '/session-timeout';
  const isPostLoginVerification = location.pathname === '/post-login-verification';
  const isAdmin = location.pathname.startsWith('/admin');
  const isDriver = location.pathname.startsWith('/driver');

  if (isSessionTimeout || isPostLoginVerification || isAdmin || isDriver) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <Header />
      <div className="flex-1 flex flex-col">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <GlobalNavigation />
      <Layout>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/recovery" element={<AdminPasswordRecovery />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/reservations" element={<AllReservations />} />
          <Route path="/admin/reservations/create" element={<CreateReservation />} />
          <Route path="/admin/reservations/:id" element={<ReservationDetail />} />
          <Route path="/admin/reservations/:id/edit" element={<ModifyReservation />} />
          <Route path="/admin/cancel-reservation/:id" element={<CancelReservation />} />
          <Route path="/admin/fleet" element={<FleetOverview />} />
          <Route path="/admin/fleet/add" element={<AddVehicle />} />
          <Route path="/admin/fleet/:id" element={<AdminVehicleDetail />} />
          <Route path="/admin/fleet/:id/edit" element={<EditVehicle />} />
          <Route path="/admin/fleet/:id/availability" element={<VehicleAvailability />} />
          <Route path="/admin/fleet/:id/maintenance" element={<VehicleMaintenance />} />
          <Route path="/admin/fleet/pricing" element={<VehiclePricing />} />
          <Route path="/admin/fleet/:id/images" element={<VehicleImages />} />
          <Route path="/admin/locations" element={<AllLocations />} />
          <Route path="/admin/locations/add" element={<AddLocation />} />
          <Route path="/admin/locations/:id" element={<LocationDetail />} />
          <Route path="/admin/locations/:id/edit" element={<EditLocation />} />
          
          <Route path="/admin/customers" element={<CustomerList />} />
          <Route path="/admin/customers/:id" element={<CustomerProfile />} />
          <Route path="/admin/customers/:id/bookings" element={<CustomerBookingHistory />} />
          <Route path="/admin/customers/:id/payments" element={<CustomerPaymentHistory />} />
          
          <Route path="/admin/drivers" element={<DriverList />} />
          <Route path="/admin/drivers/add" element={<AddDriver />} />
          <Route path="/admin/drivers/:id" element={<AdminDriverDetail />} />
          <Route path="/admin/drivers/:id/edit" element={<EditDriver />} />
          <Route path="/admin/drivers/earnings" element={<DriverEarnings />} />

          <Route path="/admin/rates" element={<RateDashboard />} />
          <Route path="/admin/rates/add" element={<AddEditRate />} />
          <Route path="/admin/rates/:id/edit" element={<AddEditRate />} />
          
          <Route path="/admin/extras/protection" element={<ProtectionManagement />} />
          <Route path="/admin/extras/equipment" element={<EquipmentManagement />} />
          <Route path="/admin/extras/equipment/add" element={<AddEditExtra />} />
          <Route path="/admin/extras/protection/add" element={<AddEditExtra />} />
          <Route path="/admin/extras/edit/:id" element={<AddEditExtra />} />
          
          <Route path="/admin/content/homepage" element={<HomepageEditor />} />
          <Route path="/admin/content/faqs" element={<FAQManagement />} />
          <Route path="/admin/content/articles" element={<ArticleList />} />
          <Route path="/admin/articles/add" element={<AddEditArticle />} />
          <Route path="/admin/articles/edit/:id" element={<AddEditArticle />} />
          
          <Route path="/admin/content/deals" element={<DealsEditor />} />
          <Route path="/admin/content/policies" element={<PolicyManagement />} />
          <Route path="/admin/content/vehicles" element={<VehiclePagesEditor />} />
          <Route path="/admin/content/services" element={<ServicePagesEditor />} />
          <Route path="/admin/reports/revenue" element={<RevenueReport />} />
          <Route path="/admin/reports/bookings" element={<BookingReport />} />
          <Route path="/admin/reports/fleet" element={<VehicleUtilisationReport />} />
          <Route path="/admin/reports/customers" element={<CustomerAnalytics />} />
          <Route path="/admin/reports/drivers" element={<DriverPerformanceReport />} />
          <Route path="/admin/notifications" element={<NotificationManagement />} />
          
          <Route path="/admin/settings/emails" element={<EmailTemplateManagement />} />
          <Route path="/admin/settings/sms" element={<SmsTemplateManagement />} />
          <Route path="/admin/settings/general" element={<GeneralSettings />} />
          <Route path="/admin/settings/security" element={<SessionSecuritySettings />} />
          <Route path="/admin/settings/payments" element={<PaymentDisplaySettings />} />
          <Route path="/admin/settings/airports" element={<SupportedAirports />} />
          <Route path="/admin/settings/cancellation" element={<CancellationPolicySettings />} />
          <Route path="/admin/settings/booking-rules" element={<BookingRulesConfig />} />
          <Route path="/admin/settings/extras" element={<ExtrasConfig />} />
          <Route path="/admin/operations/live" element={<LiveOperationsDashboard />} />
          <Route path="/admin/operations/map" element={<ActiveTripsMap />} />
          <Route path="/admin/logs/activity" element={<ActivityLog />} />
          <Route path="/admin/logs/system" element={<SystemEventsLog />} />
          <Route path="/admin/settings/sitemap" element={<SitemapOverview />} />

          <Route path="/admin/payments" element={<AllPayments />} />
          <Route path="/admin/tickets" element={<SupportTickets />} />
          <Route path="/admin/tickets/:id" element={<TicketDetail />} />

          <Route path="/driver/login" element={<DriverLogin />} />
          <Route path="/driver/forgot-password" element={<DriverPasswordRecovery />} />
          <Route path="/driver/setup-password" element={<DriverSetupPassword />} />
          <Route path="/driver/profile" element={<DriverProfile />} />
          <Route path="/driver/vehicle" element={<AssignedVehicle />} />
          <Route path="/driver/dashboard" element={<DriverDashboard />} />
          <Route path="/driver/trip-request" element={<TripRequestScreen />} />
          <Route path="/driver/trip-management" element={<TripManagementScreen />} />
          <Route path="/driver/trip-completion" element={<TripCompletionScreen />} />
          <Route path="/driver/earnings" element={<DriverEarnings />} />
          <Route path="/driver/settings" element={<DriverSettings />} />
          <Route path="/driver/support" element={<DriverSupport />} />
          <Route path="/driver/history" element={<DriverTripHistory />} />
          
          <Route path="/help-support" element={<HelpSupport />} />
          <Route path="/recently-viewed" element={<RecentlyViewed />} />
          <Route path="/rental-confirmation" element={<RentalConfirmation />} />
          <Route path="/instant-pickup" element={<InstantPickup />} />
          <Route path="/scheduled-pickup" element={<ScheduledPickup />} />
          <Route path="/airport-transfers" element={<AirportTransfers />} />
          <Route path="/group-transportation" element={<GroupTransportation />} />
          <Route path="/special-needs-transport" element={<SpecialNeeds />} />
          <Route path="/one-way-rental" element={<OneWayRental />} />
          <Route path="/long-term-rental" element={<LongTermRental />} />
          <Route path="/weekend-rental" element={<WeekendRental />} />
          <Route path="/vehicle-fleet" element={<VehicleFleet />} />
          <Route path="/start-reservation" element={<StartReservation />} />
          <Route path="/manage-reservation" element={<ManageReservation />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/pricing" element={<PricingInformation />} />
          <Route path="/safety-guidelines" element={<SafetyGuidelines />} />
          <Route path="/accessibility" element={<AccessibilityServices />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<PressMedia />} />
          <Route path="/emergency" element={<EmergencyHotline />} />
          <Route path="/rental-faqs" element={<RentalFaqs />} />
          <Route path="/vehicle-comparison" element={<VehicleComparison />} />
          <Route path="/report-issue" element={<ReportIssue />} />
          <Route path="/lost-found" element={<LostFound />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/refund-cancel-policy" element={<RefundCancelPolicy />} />
          <Route path="/driver-agreement" element={<DriverAgreement />} />
          <Route path="/community-guidelines" element={<CommunityGuidelines />} />
          <Route path="/data-protection" element={<DataProtectionPolicy />} />
          <Route path="/compliance-safety" element={<ComplianceSafetyPolicy />} />
          <Route path="/licensing-information" element={<LicensingInformation />} />
          <Route path="/insurance-coverage" element={<InsuranceCoverage />} />
          <Route path="/session-timeout" element={<SessionTimeout />} />
          <Route path="/verify-otp" element={<OtpVerification />} />
          <Route path="/live-photo-login" element={<LivePhotoLogin />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/post-login-verification" element={<PostLoginVerification />} />
          <Route path="/booking/step-1" element={<BookingStep1 />} />
          <Route path="/booking/step-2" element={<BookingStep2 />} />
          <Route path="/booking/step-3" element={<BookingStep3 />} />
          <Route path="/booking/step-4" element={<BookingStep4 />} />
          <Route path="/booking/step-5" element={<BookingStep5 />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          <Route path="/trip-tracking" element={<TripTracking />} />
          <Route path="/trip-receipt" element={<TripReceipt />} />
          <Route path="/dashboard" element={<CustomerDashboard />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/booking-detail/:id" element={<BookingDetail />} />
          <Route path="/modify-booking/:id" element={<ModifyBooking />} />
          <Route path="/cancel-booking/:id" element={<CancelBooking />} />
          <Route path="/trip-history" element={<TripHistory />} />
          <Route path="/account" element={<MyAccountDashboard />} />
          <Route path="/profile-edit" element={<ProfileEdit />} />
          <Route path="/saved-passengers" element={<SavedPassengers />} />
          <Route path="/emergency-contacts" element={<EmergencyContacts />} />
          <Route path="/saved-payment-methods" element={<SavedPaymentMethods />} />
          <Route path="/saved-locations" element={<SavedLocations />} />
          <Route path="/security-settings" element={<SecuritySettings />} />
          <Route path="/notification-preferences" element={<NotificationPreferences />} />
          <Route path="/available-vehicles" element={<AvailableVehicles />} />
          <Route path="/vehicle-detail/:id" element={<VehicleDetail />} />
          <Route path="/driver-details/:id" element={<DriverDetails />} />
          <Route path="/rental-vehicle-detail/:id" element={<RentalVehicleDetail />} />
          <Route path="/payment-selection" element={<PaymentSelection />} />
          <Route path="/payment-processing" element={<PaymentProcessing />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

