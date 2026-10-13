# Reflections Cafe · Chandigarh

An artisan culinary and coffee sanctuary in Sector 35C, Chandigarh. Features a modern brutalist-editorial web design, interactive 3D cylindrical dishes carousel, real-time table reservation system, and a comprehensive Host Desk / Admin Operations Portal.

---

## 🌐 Live Vercel Domain & Quick Links

| Destination | Route | Live Vercel Production Link |
| :--- | :--- | :--- |
| **Public Customer Website** | `/` | [https://reflection-cafe.vercel.app/](https://reflection-cafe.vercel.app/) |
| **Admin & Host Desk (Clean Route)** | `/admin` | [https://reflection-cafe.vercel.app/admin](https://reflection-cafe.vercel.app/admin) |
| **Admin Portal (Direct File)** | `/admin.html` | [https://reflection-cafe.vercel.app/admin.html](https://reflection-cafe.vercel.app/admin.html) |
| **Custom 404 Error Page** | `/404.html` | [https://reflection-cafe.vercel.app/404.html](https://reflection-cafe.vercel.app/404.html) |

---

## 🔐 Staff & Host Desk Credentials

- **Username:** `admin`
- **Password:** `reflections2026`
- *(Tip: Click the **"Use 1-Click Demo Fill"** button on the login screen for instant access)*

---

## ⚙️ Vercel Routing Configuration (`vercel.json`)

Clean URL rewriting is pre-configured so staff can access the portal directly at `/admin` without specifying `.html`:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "outputDirectory": ".",
  "cleanUrls": true,
  "rewrites": [
    { "source": "/admin", "destination": "/admin.html" },
    { "source": "/admin/", "destination": "/admin.html" }
  ]
}
```

---

## 🛎️ Admin & Host Desk Features

1. **Live Reservations Management:** Real-time guest seating, guest counts, and status tracking (*Confirmed*, *Seated*, *Completed*, *Cancelled*).
2. **Table Allocations:** 18 dedicated indoor atrium tables, cozy window booths, and communal wooden counters.
3. **Menu Catalog & Daily Specials:** Toggle item availability and mark items as "Sold Out" in real time.
4. **Guest Inquiries & Messages:** Real-time synchronization of contact inquiries submitted from the customer site.
5. **Operational Status:** Instantly switch between *Service Live*, *Dining Floor Full (Waitlist)*, and *Service Closed*.
6. **Data Export & LocalStorage Sync:** Instant CSV export of guest reservations and automatic cross-tab updates.

---

## 💻 Local Development

Run the local development server:
```bash
python -m http.server 8000
```

- Customer Website: `http://localhost:8000/`
- Host Desk Portal: `http://localhost:8000/admin.html` (or `http://localhost:8000/admin` when running behind a local rewrite proxy)
