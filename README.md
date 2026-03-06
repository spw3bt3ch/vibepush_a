# VibePush Africa 🎵

**Amplifying African Sounds & Events**

A modern music promotion and event publicity platform built with Flask, Jinja2, Tailwind CSS, and vanilla JavaScript.

---

## 📁 Project Structure

```
VibePush Africa/
│
├── app.py                  # Flask application & routes
├── requirements.txt        # Python dependencies
├── README.md
│
├── templates/
│   ├── base.html           # Base layout (navbar, footer, WhatsApp button)
│   ├── index.html          # Homepage
│   ├── plans.html          # Promotion plans
│   ├── submit.html         # Song & event submission forms
│   └── contact.html        # Contact page
│
└── static/
    ├── css/
    │   └── style.css       # Custom styles & animations
    ├── js/
    │   └── main.js         # Interactivity & scroll animations
    └── images/             # Static images (OG image, etc.)
```

---

## 🚀 Getting Started

### 1. Clone or Download the Project

```bash
cd "VibePush Africa"
```

### 2. Create a Virtual Environment

```bash
python -m venv venv
```

Activate it:

- **Windows:** `venv\Scripts\activate`
- **macOS/Linux:** `source venv/bin/activate`

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the App

```bash
python app.py
```

Open your browser and go to: **http://127.0.0.1:5000**

---

## 🔗 Google Form Integration

The submission forms (`/submit`) and contact form (`/contact`) send data to Google Forms via the Fetch API.

### Setup Steps

1. **Create two Google Forms** — one for Song Promotion, one for Event Promotion.
2. **Get the Form Action URL** from the form's source (right-click → View Source → find `action="..."` in the `<form>` tag).
3. **Get the entry IDs** for each field from the form source (look for `entry.XXXXXXXXX`).
4. **Update `submit.html`** — replace these placeholders at the top of the `extra_head` block:
   ```js
   const SONG_FORM_URL  = 'https://docs.google.com/forms/d/e/YOUR_SONG_FORM_ID/formResponse';
   const EVENT_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_EVENT_FORM_ID/formResponse';
   // Replace entry.000000001 etc. with your actual entry IDs
   ```
5. **Update `contact.html`** — replace `YOUR_CONTACT_FORM_ID` in the script block.

---

## 🌐 Pages

| Route      | Description                                      |
|------------|--------------------------------------------------|
| `/`        | Homepage — hero, about, services, testimonials   |
| `/plans`   | Promotion plans with pricing cards & FAQ         |
| `/submit`  | Song & event submission forms                    |
| `/contact` | Contact info, WhatsApp CTA, map & contact form   |

---

## 🎨 Tech Stack

| Layer       | Technology                              |
|-------------|-----------------------------------------|
| Backend     | Python 3.x + Flask 3.x                  |
| Templates   | Jinja2                                  |
| CSS         | Tailwind CSS (CDN) + Custom CSS         |
| JavaScript  | Vanilla JS                              |
| Icons       | Font Awesome 6                          |
| Fonts       | Google Fonts (Inter + Outfit)           |
| Forms       | Google Forms (via Fetch API)            |

---

## 🚢 Deployment

### Option A: Vercel (Recommended)

1. Install the Vercel CLI: `npm i -g vercel`
2. Create a `vercel.json`:
   ```json
   {
     "builds": [{"src": "app.py", "use": "@vercel/python"}],
     "routes": [{"src": "/(.*)", "dest": "app.py"}]
   }
   ```
3. Run `vercel` in the project directory and follow the prompts.

### Option B: Railway / Render

1. Push the project to GitHub.
2. Connect your repo on [Railway](https://railway.app) or [Render](https://render.com).
3. Set start command: `python app.py`

### Option C: Traditional Hosting (cPanel / VPS)

1. Upload files via FTP.
2. Set up a Python WSGI app pointing to `app.py`.
3. Configure the server to serve `static/` files directly.

---

## 📞 Contact

**VibePush Africa**  
30 Dipeolu St, Allen, Ikeja, Lagos  
WhatsApp: +234-905-339-3828

---

*Developed by **SMI Solutions** · © 2026 VibePush Africa. All rights reserved.*
