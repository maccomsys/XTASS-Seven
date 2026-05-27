export interface SitemapItem {
  num: string;
  to: string;
  title: string;
  description: string;
}

export interface SitemapSection {
  title: string;
  items: SitemapItem[];
}

export const sitemapData: SitemapSection[] = [
  {
    "title": "Main Pages",
    "items": [
      {
        "num": "1.",
        "to": "/sitemap",
        "title": "XTASS Site Directory",
        "description": "Full directory of every page on the XTASS platform"
      },
      {
        "num": "2.",
        "to": "/start-reservation",
        "title": "Reserve a Vehicle",
        "description": "The main booking entry page with the full reservation form"
      },
      {
        "num": "3.",
        "to": "/manage-reservation",
        "title": "View, Modify, or Cancel Reservation",
        "description": "Look up and modify or cancel an existing booking"
      },
      {
        "num": "4.",
        "to": "/service-areas",
        "title": "XTASS Service Areas",
        "description": "View the regions, cities, and airports where XTASS operates"
      },
      {
        "num": "5.",
        "to": "/pricing",
        "title": "XTASS Pricing Policy",
        "description": "Learn about our fixed, all-inclusive pricing structure"
      },
      {
        "num": "6.",
        "to": "/safety-guidelines",
        "title": "XTASS Safety Standards",
        "description": "Review our driver vetting and vehicular inspection standards"
      },
      {
        "num": "7.",
        "to": "/careers",
        "title": "Careers at XTASS",
        "description": "Join the XTASS team as a driver or corporate professional"
      },
      {
        "num": "8.",
        "to": "/press",
        "title": "Press &amp; Media",
        "description": "Official announcements and brand assets for journalists"
      },
      {
        "num": "9.",
        "to": "/emergency",
        "title": "Emergency Hotline",
        "description": "Immediate 24/7 assistance for urgent trip and security matters"
      },
      {
        "num": "10.",
        "to": "/rental-faqs",
        "title": "Car Rental FAQs",
        "description": "Frequently asked questions about car rental rates and policies"
      },
      {
        "num": "11.",
        "to": "/report-issue",
        "title": "Report an Issue",
        "description": "Report a problem with a trip, vehicle, or booking"
      },
      {
        "num": "12.",
        "to": "/lost-found",
        "title": "Lost &amp; Found",
        "description": "Report and track items left behind in a vehicle"
      },
      {
        "num": "13.",
        "to": "/terms-conditions",
        "title": "Terms &amp; Conditions",
        "description": "Full legal terms governing the use of the XTASS platform"
      },
      {
        "num": "14.",
        "to": "/privacy-policy",
        "title": "Privacy Policy",
        "description": "How we collect, use, and protect your personal data"
      },
      {
        "num": "15.",
        "to": "/cookie-policy",
        "title": "Cookie Policy",
        "description": "How XTASS uses cookies to improve your digital experience"
      },
      {
        "num": "16.",
        "to": "/refund-cancel-policy",
        "title": "Refund &amp; Cancellation",
        "description": "Transparent policies for changes and cancellations"
      },
      {
        "num": "17.",
        "to": "/driver-agreement",
        "title": "Driver Agreement",
        "description": "Professional obligations for XTASS personnel"
      },
      {
        "num": "18.",
        "to": "/community-guidelines",
        "title": "Community Guidelines",
        "description": "Fostering a safe environment for drivers and passengers"
      },
      {
        "num": "19.",
        "to": "/data-protection",
        "title": "Data Protection Policy",
        "description": "Compliance with the Ghana Data Protection Act"
      },
      {
        "num": "20.",
        "to": "/compliance-safety",
        "title": "Compliance &amp; Safety",
        "description": "Regulatory compliance and vehicle standards"
      },
      {
        "num": "21.",
        "to": "/licensing-information",
        "title": "Licensing Information",
        "description": "Company registration and transport licensing details"
      },
      {
        "num": "22.",
        "to": "/insurance-coverage",
        "title": "Insurance Coverage",
        "description": "Insurance coverage for passengers and vehicles"
      },
      {
        "num": "23.",
        "to": "/session-timeout",
        "title": "Session Timeout",
        "description": "Booking session expiry and resumption"
      },
      {
        "num": "24.",
        "to": "/help-support",
        "title": "Help & Support",
        "description": "In-app support hub with contact options and shortcuts"
      }
    ]
  },
  {
    "title": "Vehicles & Services",
    "items": [
      {
        "num": "25.",
        "to": "/instant-pickup",
        "title": "INSTANT PICKUP",
        "description": "On-demand transport — nearest driver dispatched immediately"
      },
      {
        "num": "26.",
        "to": "/scheduled-pickup",
        "title": "SCHEDULED PICKUP",
        "description": "Plan and pre-book your ride for any future date and time"
      },
      {
        "num": "27.",
        "to": "/airport-transfers",
        "title": "Airport Transfers",
        "description": "Reliable airport connections at all 6 Ghana airports"
      },
      {
        "num": "28.",
        "to": "/group-transportation",
        "title": "Group Transportation",
        "description": "Larger vehicles for families, events, and team travel"
      },
      {
        "num": "29.",
        "to": "/accessibility",
        "title": "Accessibility Transport",
        "description": "Inclusive mobility options for passengers with special needs"
      },
      {
        "num": "30.",
        "to": "/one-way-rental",
        "title": "One-Way Rental",
        "description": "Pick up at one location, drop off at another"
      },
      {
        "num": "31.",
        "to": "/long-term-rental",
        "title": "Take Advantage of Weekly &amp; Monthly Rates",
        "description": "Weekly or monthly rental discounts with unlimited mileage"
      },
      {
        "num": "32.",
        "to": "/weekend-rental",
        "title": "Your Weekend,",
        "description": "Off-peak weekend rental rates with flexible Sunday returns"
      },
      {
        "num": "33.",
        "to": "/vehicle-fleet",
        "title": "XTASS Vehicle Fleet",
        "description": "Complete details and classifications of the XTASS fleet"
      },
      {
        "num": "34.",
        "to": "/vehicle-comparison",
        "title": "Compare Vehicles",
        "description": "Compare specifications to choose the right vehicle"
      },
      {
        "num": "35.",
        "to": "/available-vehicles",
        "title": "Available Rides",
        "description": "List of available vehicles for the selected ride type"
      },
      {
        "num": "36.",
        "to": "/vehicle-detail/v1",
        "title": "Vehicle Detail",
        "description": "Full specification sheet for a ride-pickup vehicle"
      },
      {
        "num": "37.",
        "to": "/rental-vehicle-detail/r1",
        "title": "Vehicle Detail",
        "description": "Premium detail view for a Car Rental vehicle"
      },
      {
        "num": "38.",
        "to": "/driver-details/d1",
        "title": "Driver Assigned",
        "description": "Profile of the assigned XTASS driver and vehicle"
      },
      {
        "num": "39.",
        "to": "/payment-selection",
        "title": "Payment Selection",
        "description": "Choose payment method for immediate payment"
      },
      {
        "num": "40.",
        "to": "/payment-processing",
        "title": "Processing",
        "description": "Loading and success/failure states for payment"
      },
      {
        "num": "41.",
        "to": "/rental-confirmation",
        "title": "Review & Reserve",
        "description": "Review details specific to car rentals before reserving"
      }
    ]
  },
  {
    "title": "Authentication",
    "items": [
      {
        "num": "42.",
        "to": "/signin",
        "title": "Customer Login",
        "description": "Log in to your XTASS customer account"
      },
      {
        "num": "43.",
        "to": "/register",
        "title": "Create Account",
        "description": "Create a new XTASS customer account"
      },
      {
        "num": "44.",
        "to": "/forgot-password",
        "title": "Forgot Password?",
        "description": "Reset your password via email or phone number"
      },
      {
        "num": "45.",
        "to": "/verify-otp",
        "title": "Verify Your Identity",
        "description": "Verify your identity using a 6-digit one-time code"
      },
      {
        "num": "46.",
        "to": "/live-photo-login",
        "title": "Live Photo Login",
        "description": "Log in using a live selfie capture"
      },
      {
        "num": "47.",
        "to": "/post-login-verification",
        "title": "Verified!",
        "description": "Security interstitial after successful login"
      },
      {
        "num": "48.",
        "to": "/booking/step-1",
        "title": "Trip Details",
        "description": "Select trip type, location, schedule, and passenger requirements"
      },
      {
        "num": "49.",
        "to": "/booking/step-2",
        "title": "Location & Schedule",
        "description": "Visual confirmation of trip details"
      },
      {
        "num": "50.",
        "to": "/booking/step-3",
        "title": "Choose a Vehicle",
        "description": "Browse and filter premium fleet options"
      },
      {
        "num": "51.",
        "to": "/booking/step-4",
        "title": "Optional Extras",
        "description": "Add protection coverages and equipment add-ons"
      },
      {
        "num": "52.",
        "to": "/booking/step-5",
        "title": "Review & Reserve",
        "description": "Review details, policies, and confirm booking"
      },
      {
        "num": "53.",
        "to": "/booking-confirmation",
        "title": "Booking Confirmed!",
        "description": "Success screen with assigned booking ID and summary"
      },
      {
        "num": "54.",
        "to": "/trip-tracking",
        "title": "Trip Tracking",
        "description": "Real-time driver location and trip status tracking"
      },
      {
        "num": "55.",
        "to": "/trip-receipt",
        "title": "Trip Completed",
        "description": "Completed trip summary, fare breakdown, and rating prompt"
      },
      {
        "num": "56.",
        "to": "/dashboard",
        "title": "Customer Dashboard",
        "description": "Personalized home screen with upcoming trips and booking shortcuts"
      },
      {
        "num": "57.",
        "to": "/my-bookings",
        "title": "My Bookings",
        "description": "List of all customer's bookings (Upcoming, Active, Completed, Cancelled)"
      },
      {
        "num": "58.",
        "to": "/booking-detail/XTA-12345",
        "title": "Booking Detail",
        "description": "Full detail view of a single booking"
      },
      {
        "num": "59.",
        "to": "/modify-booking/XTA-12345",
        "title": "Modify Reservation",
        "description": "Change details of an upcoming booking"
      },
      {
        "num": "60.",
        "to": "/cancel-booking/XTA-12345",
        "title": "Cancel Reservation",
        "description": "Cancel an upcoming booking"
      },
      {
        "num": "61.",
        "to": "/trip-history",
        "title": "Trip History",
        "description": "Chronological timeline of past completed and cancelled trips"
      },
      {
        "num": "62.",
        "to": "/account",
        "title": "My Account",
        "description": "Main account management hub"
      },
      {
        "num": "63.",
        "to": "/profile-edit",
        "title": "Edit Profile",
        "description": "Update personal profile information"
      },
      {
        "num": "64.",
        "to": "/saved-passengers",
        "title": "Saved Passengers",
        "description": "Manage saved profiles for regular co-passengers"
      },
      {
        "num": "65.",
        "to": "/emergency-contacts",
        "title": "Emergency Contacts",
        "description": "Manage up to 3 emergency contacts"
      },
      {
        "num": "66.",
        "to": "/saved-payment-methods",
        "title": "Payment Methods",
        "description": "Manage saved credit cards and mobile money accounts"
      },
      {
        "num": "67.",
        "to": "/saved-locations",
        "title": "Saved Locations",
        "description": "Manage frequently used pickup and dropoff locations"
      },
      {
        "num": "68.",
        "to": "/security-settings",
        "title": "Security Settings",
        "description": "Change password, enable 2FA, and manage sessions"
      },
      {
        "num": "69.",
        "to": "/notification-preferences",
        "title": "Notifications",
        "description": "Control SMS, email, and in-app alert settings"
      },
      {
        "num": "70.",
        "to": "/recently-viewed",
        "title": "Saved & History",
        "description": "List of saved and recently visited vehicles"
      }
    ]
  },
  {
    "title": "4. Admin Control Panel",
    "items": [
      {
        "num": "71.",
        "to": "/admin/login",
        "title": "Admin Portal",
        "description": "Secure login for authorised staff"
      },
      {
        "num": "72.",
        "to": "/admin/recovery",
        "title": "Admin Recovery",
        "description": "Password reset flow for admins"
      },
      {
        "num": "73.",
        "to": "/admin/dashboard",
        "title": "Overview Dashboard",
        "description": "High-level view of platform operational status"
      },
      {
        "num": "74.",
        "to": "/admin/reservations",
        "title": "All Reservations",
        "description": "Complete list of all platform bookings"
      },
      {
        "num": "75.",
        "to": "/admin/reservations/XTA-1234",
        "title": "Booking Detail",
        "description": "Full detail view and admin controls for a single booking"
      },
      {
        "num": "76.",
        "to": "/admin/reservations/create",
        "title": "Create Reservation",
        "description": "Manually create a booking on behalf of a customer"
      },
      {
        "num": "77.",
        "to": "/admin/reservations/XTA-1234/edit",
        "title": "Modify Reservation",
        "description": "Modify any field in an existing booking"
      },
      {
        "num": "78.",
        "to": "/admin/cancel-reservation/XTA-1234",
        "title": "Cancel Reservation",
        "description": "Cancel an existing booking"
      },
      {
        "num": "79.",
        "to": "/admin/fleet",
        "title": "Fleet Overview",
        "description": "Main fleet management screen for company-owned vehicles"
      },
      {
        "num": "80.",
        "to": "/admin/fleet/add",
        "title": "Add New Vehicle",
        "description": "Form for registering a new company-owned vehicle"
      },
      {
        "num": "81.",
        "to": "/admin/fleet/V-101/edit",
        "title": "Edit Vehicle",
        "description": "Pre-filled form for updating an existing fleet vehicle"
      },
      {
        "num": "82.",
        "to": "/admin/fleet/V-101",
        "title": "Toyota Camry 2023",
        "description": "Full profile view for a single fleet vehicle"
      },
      {
        "num": "83.",
        "to": "/admin/fleet/V-101/availability",
        "title": "Availability Calendar",
        "description": "Month-view calendar showing availability status"
      },
      {
        "num": "84.",
        "to": "/admin/fleet/V-101/maintenance",
        "title": "Maintenance Log",
        "description": "Complete maintenance history and logging"
      },
      {
        "num": "85.",
        "to": "/admin/fleet/pricing",
        "title": "Classes & Pricing",
        "description": "Editable rate matrix for setting pricing across classes"
      },
      {
        "num": "86.",
        "to": "/admin/fleet/V-101/images",
        "title": "Image Management",
        "description": "Manage photos displayed for a specific vehicle"
      },
      {
        "num": "87.",
        "to": "/admin/locations",
        "title": "Service Locations",
        "description": "List of all service locations"
      },
      {
        "num": "88.",
        "to": "/admin/locations/add",
        "title": "Add New Location",
        "description": "Form for adding a new service location"
      },
      {
        "num": "89.",
        "to": "/admin/locations/LOC-001/edit",
        "title": "Edit Location",
        "description": "Pre-filled form for updating an existing location"
      },
      {
        "num": "90.",
        "to": "/admin/locations/LOC-001",
        "title": "Kotoka International Airport (ACC)",
        "description": "Full profile view for a single location"
      },
      {
        "num": "91.",
        "to": "/admin/customers",
        "title": "Customers",
        "description": "List of all registered customers"
      },
      {
        "num": "92.",
        "to": "/admin/customers/CUST-001",
        "title": "Kwame Mensah",
        "description": "Full customer profile in the admin panel"
      },
      {
        "num": "93.",
        "to": "/admin/customers/CUST-001/bookings",
        "title": "Booking History",
        "description": "Complete booking history for a specific customer"
      },
      {
        "num": "94.",
        "to": "/admin/customers/CUST-001/payments",
        "title": "Payment Records",
        "description": "Admin view of all customer payment transactions"
      },
      {
        "num": "95.",
        "to": "/admin/drivers",
        "title": "Drivers",
        "description": "Complete roster of all employed XTASS drivers"
      },
      {
        "num": "96.",
        "to": "/admin/drivers/earnings",
        "title": "Driver Earnings Overview",
        "description": "All driver earnings records and withdrawal management"
      },
      {
        "num": "97.",
        "to": "/admin/rates",
        "title": "Rate Management",
        "description": "Admin screen for viewing and editing platform pricing"
      },
      {
        "num": "98.",
        "to": "/admin/rates/add",
        "title": "Create Custom Rate",
        "description": "Form for creating or editing rate rules"
      },
      {
        "num": "99.",
        "to": "/admin/extras/protection",
        "title": "Protection Products",
        "description": "Manage protection extras in booking flow"
      },
      {
        "num": "100.",
        "to": "/admin/extras/equipment",
        "title": "Equipment & Accessories",
        "description": "Manage equipment accessories available in booking"
      },
      {
        "num": "101.",
        "to": "/admin/extras/equipment/add",
        "title": "Add/Edit Extra Item",
        "description": "Form for creating or updating extra items"
      },
      {
        "num": "102.",
        "to": "/admin/content/homepage",
        "title": "Homepage Editor",
        "description": "WYSIWYG editor for homepage content sections"
      },
      {
        "num": "103.",
        "to": "/admin/content/faqs",
        "title": "FAQ Management",
        "description": "Manage FAQ entries and ordering"
      },
      {
        "num": "104.",
        "to": "/admin/content/articles",
        "title": "Articles & News",
        "description": "List of all blog and news articles"
      },
      {
        "num": "105.",
        "to": "/admin/articles/add",
        "title": "Create Article",
        "description": "Full editor for blog posts and news"
      },
      {
        "num": "106.",
        "to": "/admin/content/deals",
        "title": "Deals Content Editor",
        "description": "Edits the content displayed on the public Deals & Coupons page"
      },
      {
        "num": "107.",
        "to": "/admin/content/policies",
        "title": "Policy Pages Management",
        "description": "Lists all legal and policy pages with an edit option for each"
      },
      {
        "num": "108.",
        "to": "/admin/content/vehicles",
        "title": "Vehicle Type Pages",
        "description": "Edits the content of the three vehicle type detail pages"
      },
      {
        "num": "109.",
        "to": "/admin/content/services",
        "title": "Service Pages Editor",
        "description": "Edits the content of each service detail page"
      },
      {
        "num": "110.",
        "to": "/admin/reports/revenue",
        "title": "Revenue Report",
        "description": "Financial analytics dashboard showing total revenue"
      },
      {
        "num": "111.",
        "to": "/admin/reports/bookings",
        "title": "Booking & Reservation Report",
        "description": "Analytics dashboard showing booking volume and trends"
      },
      {
        "num": "112.",
        "to": "/admin/reports/fleet",
        "title": "Vehicle Utilisation",
        "description": "Analytics showing how efficiently the fleet is used"
      },
      {
        "num": "113.",
        "to": "/admin/reports/customers",
        "title": "Customer Analytics",
        "description": "Analytics focused on customer behaviour and demographics"
      },
      {
        "num": "114.",
        "to": "/admin/reports/drivers",
        "title": "Driver Performance",
        "description": "Analytics comparing performance metrics across drivers"
      },
      {
        "num": "115.",
        "to": "/admin/notifications",
        "title": "Notification Management",
        "description": "Overview and creation of system notifications"
      },
      {
        "num": "116.",
        "to": "/admin/settings/emails",
        "title": "Email Template Management",
        "description": "Manages all automated email templates"
      },
      {
        "num": "117.",
        "to": "/admin/settings/sms",
        "title": "SMS Template Management",
        "description": "Manages all automated SMS templates"
      },
      {
        "num": "118.",
        "to": "/admin/settings/general",
        "title": "General Settings",
        "description": "Platform-wide configuration settings"
      },
      {
        "num": "119.",
        "to": "/admin/settings/security",
        "title": "Session & Security Settings",
        "description": "Security configuration for bookings and auth"
      },
      {
        "num": "120.",
        "to": "/admin/settings/payments",
        "title": "Payment Display Settings",
        "description": "Configures available payment methods"
      },
      {
        "num": "121.",
        "to": "/admin/settings/airports",
        "title": "Supported Airports",
        "description": "Manages airports served as service locations"
      },
      {
        "num": "122.",
        "to": "/admin/settings/cancellation",
        "title": "Cancellation Policy Settings",
        "description": "Configures cancellation fee rules"
      },
      {
        "num": "123.",
        "to": "/admin/settings/booking-rules",
        "title": "Booking Rules Configuration",
        "description": "Configures operational booking rules"
      },
      {
        "num": "124.",
        "to": "/admin/settings/extras",
        "title": "Extras & Add-Ons Configuration",
        "description": "Controls Extras step displayed to customers"
      },
      {
        "num": "125.",
        "to": "/admin/operations/live",
        "title": "Live Operations",
        "description": "Real-time overview of all platform trips"
      },
      {
        "num": "126.",
        "to": "/admin/operations/map",
        "title": "Active Trips",
        "description": "Full-width map view showing active XTASS driver positions"
      },
      {
        "num": "127.",
        "to": "/admin/logs/activity",
        "title": "Activity Log",
        "description": "Timestamped record of all admin actions"
      },
      {
        "num": "128.",
        "to": "/admin/logs/system",
        "title": "System Events Log",
        "description": "Automated system event log tracking"
      },
      {
        "num": "129.",
        "to": "/admin/settings/sitemap",
        "title": "Sitemap Overview",
        "description": "Admin view of the public Sitemap page"
      },
      {
        "num": "130.",
        "to": "/driver/login",
        "title": "Driver Gateway",
        "description": "Login for employed XTASS drivers"
      },
      {
        "num": "131.",
        "to": "/driver/forgot-password",
        "title": "Password Reset",
        "description": "Password reset for employed drivers"
      },
      {
        "num": "132.",
        "to": "/driver/setup-password",
        "title": "Secure Your Account",
        "description": "First-time login password setup"
      },
      {
        "num": "133.",
        "to": "/driver/profile",
        "title": "My Profile",
        "description": "Read-only employment profile"
      },
      {
        "num": "134.",
        "to": "/driver/vehicle",
        "title": "Assigned Vehicle",
        "description": "Details of assigned company vehicle"
      },
      {
        "num": "135.",
        "to": "/driver/dashboard",
        "title": "Driver Dashboard",
        "description": "Main screen for employed XTASS drivers"
      },
      {
        "num": "136.",
        "to": "/driver/trip-request",
        "title": "New Booking Request Nearby",
        "description": "Read-only incoming booking request details"
      },
      {
        "num": "137.",
        "to": "/driver/trip-management",
        "title": "Booking Details",
        "description": "Active trip progression and controls"
      },
      {
        "num": "138.",
        "to": "/driver/trip-completion",
        "title": "Trip Completed",
        "description": "Fare summary and passenger rating"
      },
      {
        "num": "139.",
        "to": "/driver/earnings",
        "title": "Driver Earnings Overview",
        "description": "Driver's detailed earnings history and daily/weekly charts"
      },
      {
        "num": "140.",
        "to": "/driver/settings",
        "title": "Driver Settings",
        "description": "Notification and app preferences"
      },
      {
        "num": "141.",
        "to": "/driver/support",
        "title": "Support & Resources",
        "description": "Contact operations and report issues"
      },
      {
        "num": "142.",
        "to": "/driver/history",
        "title": "Trip History",
        "description": "Complete history of all completed trips"
      },
      {
        "num": "143.",
        "to": "/admin/drivers/add",
        "title": "Add New Driver",
        "description": "Form for registering a new driver"
      },
      {
        "num": "144.",
        "to": "/admin/drivers/D-101",
        "title": "Driver Detail Profile",
        "description": "Full profile view for a single driver"
      },
      {
        "num": "145.",
        "to": "/admin/drivers/D-101/edit",
        "title": "Edit Driver",
        "description": "Form to update an existing driver's details"
      },
      {
        "num": "146.",
        "to": "/admin/payments",
        "title": "All Transactions",
        "description": "High-level view of all customer payments and transactions"
      },
      {
        "num": "147.",
        "to": "/admin/tickets",
        "title": "Helpdesk Tickets",
        "description": "Customer support and issue resolution center"
      },
      {
        "num": "148.",
        "to": "/admin/tickets/TKT-9921",
        "title": "Ticket Detail",
        "description": "Detailed view and response pane for a single support ticket"
      }
    ]
  }
];
