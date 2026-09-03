# 🏷 Github Profile Tracker

> An interactive web application that allow developer to search , explore, and analyze the public profile, statistics, and achievements of any developer on GitHub in real time.


---

## 📌 Problem Statement

Navigating the native GitHub interface to quickly evaluate a developer's overall activity, top repositories, or unlocked badges can sometimes be tedious. This application solves that problem by centralizing public profile data into a clean, minimal dashboard accessible with a single click.

---


## 🎯 Project Goals

- Enable users to **dynamically search for any GitHub account** using their username.
- Extract and visually structure essential public data (repository list, followers, following ,username and link for the developer repository and github profile).
- Provide a smooth, fast exploration for developer community without heavy framework.

---

## 🛠 Tech Stack

**Technologies Used:**   
- **HTML5 :** For semantic page structuring and the search form interface. 
- **CSS3 :** For a modern and clean htlm design
- **Javascript :** For capturing search events, DOM manipulation, and handling API requests. 

**Third-party Tool :** 
- **GitHub REST API:** Endpoint (`https://api.github.com/users/${username}`) used to fetch live profile data.

---

## 🖥 Features

- **Dynamic Search Bar:** Instantly lookup any public GitHub username.
- **User Not Found Handling:** Displays a clear, user-friendly error message if a searched profile does not exist (404 Error handling).
- **Instant UI Updates:** Updates the DOM seamlessly without reloading the page using asynchronous JavaScript.

---

## 📷 Screenshots

![Github profile tracker](<asset/image/Github profile image.PNG>)

---

## ⚙️ Installation & Setup

To clone and run this project locally, execute the following commands in your terminal:

```bash
# Clone the repository
git clone https://github.com/RusselFonta/Github-profile.git

# Navigate into the project directory
cd Github-profile

# Switch Branch to feature/github-user-search if your are on the main branch
 git checkout feature/github-user-search
```

---

## 🧠 Challenges Faced

- **Image Pathing:** Managing correct relative paths to display assets accurately within the document.
- **Form Tag Nuances:** Mastering semantic HTML5 structure, specifically binding `<label>` and `<input>` tags using the `for` attribute.
- **Code Architecture:** Organizing CSS style sheets efficiently to avoid redundancy and maintain clean code.

---

```

📚 What I Learned
How to structure a fullstack application
Managing state in React
Writing RESTful APIs
Debugging network errors


 Future Improvements
Add payment integration
Improve UI animations
Add role-based access control
Write unit tests

👨🏽‍💻 Author
Your Name
Junior Fullstack Developer
📩 Email: your@email.com
🌍 Based in Cameroon | Open to remote opportunities

