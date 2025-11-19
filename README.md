# Chapterly - Every Book, Every Chapter, Your Way

Chapterly is a digital library platform that lets users explore, add, and manage books with ease. Authenticated users can build personalized collections, update book details, and discover new titles—all in one intuitive, user-friendly space designed for passionate readers and organized book lovers.

## Table of Contents

- [Key Features](#key-features)
- [Tools & Technology](#tools--technology-used)
- [Run it Locally](#run-it-locally)
- [Live URL](#live-url)
- [Project Dependencies](#project-dependencies)
- [Connect With Me](#connect-with-me)

## Key Features

- Explore Books – Browse a wide range of genres and discover new books.
- Secure Authentication - Sign in to unlock full access and manage your own library.
- Add Your Books – Authenticated users can contribute by adding books to the library.
- Update Details – Easily edit book information to keep your collection accurate.
- Sort by Rating - Users can view books sorted by rating, making it easy to discover top-rated books and community favorites.
- Personal Library – View and manage your own curated list of saved books.
- Latest Books - Stay updated with newly added books from diverse categories.
- Book of the Week - Discover standout books featured weekly for their popularity or impact.
- Responsive Design - Enjoy a seamless experience across desktop, tablet, and mobile devices.

## Technology Used

- **Frontend**: React.js, Daisyui
- **Backend**: Node.js, Express.js
- **Authentication**: Firebase Authentication
- **Database**: Mongodb
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (Backend), Firebase (Frontend)

## Run it Locally

Please follow the below instructions to run this project in your machine:

1. Clone this repository

   ```sh
   git clone https://github.com/sagormajomder/chapterly.git
   ```

2. Open the directory "chapterly" into visual studio code
3. Open Terminal and run `npm i` to install all dependencies
4. Set up environment variables:

   Create a .env.local file in the root directory and add the following environment variables:

   ```
      // Example .env file
      VITE_APIKEY=<get from firebase>
      VITE_AUTHDOMAIN=<get from firebase>
      VITE_PROJECTID=<get from firebase>
      VITE_STORAGEBUCKET=<get from firebase>
      VITE_MESSAGINGSENDERID=<get from firebase>
      VITE_APPID=<get from firebase>

   ```

5. Run `npm run dev` to run the project into browser.

   The project will be available on http://localhost:5173/ by default.

6. goto **[chapterly backend repository](https://github.com/sagormajomder/chapterly-backend)** for run the backend

## Live URL

#### 🚀 Live Project URL: https://chapterly-sm.web.app/

## Project Dependencies

#### Dependencies List

```
   "dependencies": {
    "@tailwindcss/vite": "^4.1.17",
    "axios": "^1.13.2",
    "daisyui": "^5.4.7",
    "date-fns": "^4.1.0",
    "firebase": "^12.5.0",
    "motion": "^12.23.24",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-hot-toast": "^2.6.0",
    "react-icons": "^5.5.0",
    "react-router": "^7.9.5",
    "tailwindcss": "^4.1.17"
  },
```

#### Dev Dependencies List

```
   "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "vite": "^7.1.7"
  }
```

## Connect with Me

✨ Let's connect on different platforms! Feel free to reach out.

🐦 **Twitter:** [@sagormajomder](https://twitter.com/sagormajomder)

🐙 **GitHub:** [@sagormajomder](https://github.com/sagormajomder)

📘 **Facebook:** [@sagormajomder](https://facebook.com/sagormajomder)

🔗 **LinkedIn:** [@sagormajomder](https://www.linkedin.com/in/sagormajomder/)
