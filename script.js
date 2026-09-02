const ProfileName = document.querySelector(".Input_bar");
const SearchBtn = document.querySelector(".Search_btn");
const Avatar = document.querySelector(".Avatar");
const Name = document.getElementById("Username");
const userFollower = document.querySelector(".Follower");
const userFollowing = document.querySelector(".following");
const ProfileLink = document.querySelector(".profile_link");
const RepoList = document.querySelector(".Repo_list");
const ProfileSearch = async () => {
  try {
    const username = ProfileName.value.trim();

    if (username === "") {
      alert("Enter a username to search");
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

    Avatar.src = data.avatar_url;
    Avatar.alt = data.name;
    Name.textContent = `${data.name || data.login}`;
    userFollower.textContent = data.followers;
    userFollowing.textContent = data.following;
    ProfileLink.href = data.html_url;

    // displaying the number of repository

    const RepoUrl = `${data.repos_url}`;
    const RepoResponse = await fetch(RepoUrl);

    if (!RepoResponse.ok) {
      throw new Error(`Response Status : ${RepoResponse.status}`);
    }

    const RepoData = await RepoResponse.json();
    console.log(RepoData);

    RepoList.textContent = RepoData.map((RepoLink) => 
      `<li>
    <a href="${RepoLink.html_url}">${RepoLink.name}</a>
  </li>
`).join('');

  } catch (error) {
    alert(error.message);
    console.log(error.message);
  }
};

SearchBtn.addEventListener("click", ProfileSearch);
