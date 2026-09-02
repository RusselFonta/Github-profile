const ProfileName = document.querySelector('.Input_bar')
const SearchBtn = document.querySelector('.Search_btn')
const Avatar = document.querySelector('.Avatar')

const ProfileSearch = async () => {
  try {
    const username = ProfileName.value.trim()

    if (username === "") {
      alert("Enter a username to search")
      return;
    }

    const url = `https://api.github.com/users/${username}`;
    const data = await fetch(url);

    if (!data.ok) {
      if (data.status === 404) {
        alert(`${username} not found`);
        return;
      }
      throw new Error(`Response Status : ${data.status}`);
    }

    const response = await data.json();
    console.log(response);



  } catch (error) {
    alert(error.message);
    console.log(error.message);
  }
};

SearchBtn.addEventListener("click", ProfileSearch);
