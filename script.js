const ProfileName = document.querySelector('.Input_bar')
const SearchBtn = document.querySelector('.Search_btn')
const Avatar = document.querySelector('.Avatar')
const Name = document.getElementById('Username')
const userFollower = document.querySelector('.Follower')
const userFollowing = document.querySelector('.following')

const ProfileSearch = async () => {
  try {
    const username = ProfileName.value.trim()

    if (username === "") {
      alert("Enter a username to search")
      return;
    }

    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        alert(`${username} not found`);
        return;
      }
      throw new Error(`Response Status : ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    Avatar.src = data.avatar_url
    Avatar.alt = data.name 
    Name.textContent = `${data.name || data.login}`
    userFollower.textContent = data.followers
    userFollowing.textContent = data.following


  } catch (error) {
    alert(error.message);
    console.log(error.message);
  }
};

SearchBtn.addEventListener("click", ProfileSearch);
