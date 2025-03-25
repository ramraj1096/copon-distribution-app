# Round-Robin Coupon Distribution with Admin Panel

## Overview
The **Round-Robin Coupon Distribution** application allows guest users to claim coupons sequentially while preventing abuse through IP and cookie-based tracking. The admin panel enables management of coupons, claim history, and system settings.

## Features
### **User Side (Coupon Distribution)**
- Users can claim a coupon without logging in.
- Coupons are assigned in a round-robin manner.
- Prevents multiple claims from the same IP/browser within a cooldown period.
- Displays appropriate feedback messages.

### **Admin Panel (Management Features)**
- Secure login for admin access.
- View all available and claimed coupons.
- Add, update, and delete coupons.
- Track claim history (IP/browser session details).
- Toggle coupon availability dynamically.

## Tech Stack
- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (for admin login)
- **Deployment**: Hosted on [Your Hosting Service]

## Installation & Setup
### **Prerequisites**
Ensure you have the following installed:
- Node.js (>= 16.x)
- MongoDB

### **Clone the Repository**
```sh
 git clone https://github.com/ramraj1096/copon-distribution-app
 cd round-robin-coupon
```

### **Backend Setup**
1. Navigate to the backend directory:
```sh
 cd backend
```
2. Install dependencies:
```sh
 npm install
```
3. Configure environment variables in a `.env` file:
```
ACCESS_TOKEN_SECRET=your token secret
MONGODB_URI=mongodb url
```
4. Start the backend server:
```sh
 npm run dev
```

### **Frontend Setup**
1. Navigate to the frontend directory:
```sh
 cd frontend
```
2. Install dependencies:
```sh
 npm install
```
3. Start the frontend server:
```sh
 npm run dev
```

## Usage Guide
### **User Side**
- Visit the website and click **"Claim Coupon"**.
- If eligible, the next available coupon will be assigned.
- If restricted, a message will display the reason.

### **Admin Panel**
1. **Login** with admin credentials.
2. **Manage Coupons**: Add, update, delete, or toggle availability.
3. **View Claim History**: Check users who have claimed coupons.

## Live Deployment
- **URL**: https://round-robin-copon-claim.vercel.app/
- **Admin Credentials**:
  - **Username**: admin
  - **Password**: [provided separately]

## API Endpoints
### **User API**
| Method | Endpoint       | Description |
|--------|--------------|-------------|
| GET    | `/api/coupons/claim` | Claim a coupon |
| GET    | `/api/coupons/status` | Check claim eligibility |

### **Admin API**
| Method | Endpoint       | Description |
|--------|--------------|-------------|
| POST   | `/api/admin/login` | Admin login |
| GET    | `/api/admin/coupons` | View all coupons |
| POST   | `/api/admin/coupons` | Add a new coupon |
| PUT    | `/api/admin/coupons/:id` | Update a coupon |
| DELETE | `/api/admin/coupons/:id` | Delete a coupon |
| GET    | `/api/admin/history` | View claim history |

## Security Measures
- **IP Tracking**: Prevents multiple claims within a cooldown period.
- **Cookie-Based Tracking**: Ensures users cannot claim multiple coupons from the same session.
- **JWT Authentication**: Used for securing the admin panel.

## Future Enhancements
- Implement email-based coupon delivery.
- Improve UI/UX with animations and notifications.
- Add role-based access control (RBAC) for admins.

## Contact & Support
For any issues, reach out to ramarajuboya1096@gmail.com.


