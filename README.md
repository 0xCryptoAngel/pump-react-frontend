# Pump Master Frontend

Pump Master is a React + TypeScript frontend application for managing pumps and monitoring real-time pressure data. It integrates with a multi-tenant backend system, supporting subdomain-based login, pump CRUD operations, chart visualizations, and protected routing.

## 🧩 Tech Stack

- **React 18**
- **TypeScript**
- **Vite** (development/build tool)
- **React Router DOM v6**
- **Tailwind CSS**
- **Recharts** (for pressure visualization)
- **Context API** (for Auth management)
- **Axios** (for HTTP calls)

---

## 🚀 Features

### ✅ Multi-Tenant Support

- Extracts subdomain using a utility `getSubdomain.ts`
- Uses subdomain as tenant identifier in API calls

### 🔐 Authentication

- Basic login form handled via `Auth.tsx`
- Auth token and tenant saved in React Context (`AuthContext.tsx`)
- `PrivateRoute` component restricts access to protected pages

### 🛠 Pump Management

- **PumpForm**: Add or edit pump details
- **PumpList**: Displays a table of all pumps
- **PumpDetail**: Shows map and real-time pressure chart

### 📈 Pressure Chart

- Visualizes hourly pump pressure data using `Recharts`
- Example chart component: `PressureChart.tsx`

### 🗺️ Map Integration (if applicable)

- Based on coordinates provided in each pump record
- Uses `react-leaflet` (check installed dependencies)

---

## 📁 Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── api/               # Axios-based API services
│   ├── assets/            # Icons, images
│   ├── components/        # UI Components (Pump, Modal, Navbar, etc.)
│   ├── context/           # React Context (AuthContext)
│   ├── hooks/             # Custom hooks (useAuth)
│   ├── layouts/           # Layout wrappers
│   ├── pages/             # Route-based pages (Auth, Pumps, PumpDetail)
│   ├── routes/            # PrivateRoute component
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions (e.g., getSubdomain)
│   └── main.tsx           # App entry point
```

---

## 📦 Installation

```bash
# Install dependencies
npm install

# Start dev server (default: http://localhost:3000)
npm run dev
```

---

## 🔐 Multi-Tenant Configuration (Subdomain Based)

Make sure your backend API is available at subdomain URLs like:

```
http://{tenant}.localhost:5164
```

To test locally:

1. Edit your `hosts` file (Windows: `C:\Windows\System32\drivers\etc\hosts`)
2. Add lines like:
   ```
   127.0.0.1 tenant1.localhost
   127.0.0.1 tenant2.localhost
   ```

Then run frontend with Vite and open:

```
http://tenant1.localhost:3000
```

---

## 🔌 Environment Variables

Create a `.env` file for custom configurations (if needed):

```env
VITE_API_BASE=http://localhost:5164
```

> The base URL will be dynamically updated using the tenant subdomain.

---

## ⚙️ Scripts

```bash
npm run dev       # Run development server
npm run build     # Build production version
npm run preview   # Preview production build
```

---

## 📚 Key Files Overview

- `AuthContext.tsx`: Stores and manages auth token and tenant
- `PumpApi.ts`: All pump-related API calls (get, create, update, delete)
- `PumpList.tsx`, `PumpForm.tsx`: Pump UI logic
- `getSubdomain.ts`: Extracts tenant name from window location
- `PrivateRoute.tsx`: Protects private routes

---

## 🧪 TODOs / Improvements

- Add error boundary and toast notifications
- Add refresh token mechanism
- Improve form validation
- Add role-based access control

---

## 📄 License

MIT

