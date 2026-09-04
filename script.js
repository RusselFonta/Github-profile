const profileNameInput = document.querySelector(".input-bar");
const searchBtn = document.querySelector(".search-btn");
const avatarImg = document.querySelector(".avatar");
const nameDisplay = document.querySelector(".username");
const userFollower = document.querySelector(".follower");
const userFollowing = document.querySelector(".following");
const profileLink = document.querySelector(".profile-link");
const repoList = document.querySelector(".repo-list");
const avatarLink = document.querySelector(".profile-image");
const searchRepoInput = document.querySelector(".search-repo");

function clearResponse() {
  avatarImg.src = 'asset/image/avatar.PNG'
  avatarImg.alt = 'Avatar'
  nameDisplay.textContent = ''
  userFollower.textContent = ''
  userFollowing.textContent = ''
  profileLink.href = '#'
  avatarLink.href = '#'
  repoList.innerHTML = ''
  searchRepoInput.value = ''
  currentRepoData = []
}
const profileSearch = async () => {
  try {
    const username = profileNameInput.value.trim();
    if (username === "") {
      alert("Enter a username to search");
      return;
    }

    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        alert(`${username} not found`);
        clearResponse();
        return;
      }
      throw new Error(`Response Status : ${response.status}`);
    }

    const data = await response.json();

    avatarImg.src = data.avatar_url;
    avatarImg.alt = `${data.name || data.login}`;
    nameDisplay.textContent = `${data.name || data.login}`;
    userFollower.textContent = data.followers;
    userFollowing.textContent = data.following;
    profileLink.href = data.html_url;
    avatarLink.href = data.html_url;

    const repoUrl = `${data.repos_url}?per_page=100`;
    const repoResponse = await fetch(repoUrl);

    if (!repoResponse.ok) {
      throw new Error(`Response Status : ${repoResponse.status}`);
    }

    currentRepoData = await repoResponse.json();
    renderRepositoryList(currentRepoData);
  } catch (error) {
    alert(error.message);
    clearResults();
  }
};

SearchBtn.addEventListener("click", ProfileSearch);
ProfileName.addEventListener("keypress", (e) => {
  if (e.key === "Enter") ProfileSearch;
});
