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
- **clear() Function :** Clears the DOM or previous search results before rendering new data, ensuring the user interface remains clean and up-to-date.
- **renderRepositoryList() Function :** Dynamically generates and handles the presentation of the fetched repository data into a clean, structured list format.
- **Event Listener Cleanup :** Added logic inside the `async` function to properly remove event listeners when they are no longer needed, preventing potential memory leaks and duplicate execution errors.

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

- **Dynamic API URL Handling:** Building the request URL dynamically based on user input.
- **Error Handling:** Implementing `try...catch` blocks and checking the `response.ok` status to prevent the UI from breaking during network issues or when an invalid username is entered.
- **Dynamic Repository Filtering:** Building a robust repository filter function that tracks real-time user input to instantly filter and update the displayed repository list without page reloads.
- **Abstraction of event listener in asyc function :** Added logic inside the `async` function to properly remove event listeners when they are no longer needed, preventing potential memory leaks and duplicate execution errors.

---

## 📚 What I Learned

- Fetching and parsing dynamic parameters in JavaScript to update a `fetch()` request.
- Safely injecting dynamic HTML content into the DOM based on real-time API responses.
- Tracking real-time user input to instantly filter data and update the display.

---

## 🚀 Future Improvements

- Add a search history feature using `localStorage`.
- Implement a side-by-side comparison feature for two different GitHub profiles.
- List the most popular repositories (sorted by stars) for the searched profile.

---

## 👨🏽‍💻 Author

**Russel Fonta Fadil**  
_Junior Fullstack Developer_

- 📩 **Email:** fontawestbrook99@gmail.com
- 🌍 **Location:** Cameroon (Open to remote opportunities)
- 💼 **GitHub:** [RusselFonta](https://github.com/RusselFonta)
