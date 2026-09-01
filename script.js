const ProfileName = document.querySelector('.Input_bar');
const SearchBtn = document.querySelector('.Search_btn');

const ProfileSearch = () => {
  try {
    const input = ProfileName.value.trim();
    if (input === "") {
      alert("Enter a username to search");
      return;
    }
  } catch {}
};

SearchBtn.addEventListener("click", ProfileSearch);
