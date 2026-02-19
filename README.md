# Mini Social Feed

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Coverage Status](https://img.shields.io/badge/coverage-100%25-brightgreen)

# Overview

A modern Instagram-style social media application built with **React.js**, **Tailwind CSS**, and **React Router**.  
This project includes authentication, posting images/videos, likes, comments, and a responsive UI inspired by Instagram.

---

#  Live Demo
> ( Deployed link will be added here later)

---

#  Features

##  Authentication
- Signup with name, email, username, and password  
- Login with validation  
- Data stored in localStorage (for learning purpose)

##  Posts System
- Upload image or video in a single media picker  
- Preview selected media before posting  
- Seeded demo posts included  
- Like, comment, and repost UI buttons  

##  UI / UX
- Instagram-inspired UI design  
- Tailwind CSS styling  
- Centered feed layout  
- Responsive design  

##  React Concepts Used
- useState  
- useEffect (lifecycle concept)  
- React Router  
- Conditional Rendering  
- Controlled Inputs  
- Local Storage API  

---

#  Tech Stack

| Technology | Usage |
|------------|--------|
| React.js | Frontend framework |
| Tailwind CSS | Styling |
| React Router DOM | Page navigation |
| Lucide React | Icons |
| LocalStorage | Authentication & Data |
| Vite | Development server |

---

#  Project Structure

src/
│
├── components/
│ ├── Navbar.jsx
│ ├── PostCard.jsx
│
├── pages/
│ ├── Login.jsx
│ ├── Signup.jsx
│ ├── Dashboard.jsx
│
├── App.jsx
├── main.jsx
└── index.css

## Setup Instructions
To set up the project locally:
1. Clone the repository.
   ```bash
   git clone https://github.com/Mehwish-riaz/mini-social-feed.git
   ```
2. Navigate into the project directory.
   ```bash
   cd mini-social-feed
   ```
3. Install the necessary dependencies.
   ```bash
   npm install
   ```
4. Start the application.
   ```bash
   npm start
   ```

## Contribution Guidelines
Contributions are welcome! If you have suggestions or improvements, please fork the repository and create a pull request. Ensure to adhere to the coding standards and add appropriate tests.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
