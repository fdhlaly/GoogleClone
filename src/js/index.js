function search() {
  const { value } = document.getElementById("searchInput");
  performSearch(value);
}

function performSearch(query) {
  const baseUrl = "https://google.com/search?q=";
  location.replace(baseUrl + query);
}

const searchInput = document.getElementById("searchInput");
const searchButton = document.querySelector(".search__action button");

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    performSearch(searchInput.value);
  }
});

searchButton.addEventListener("click", function () {
  search();
});
