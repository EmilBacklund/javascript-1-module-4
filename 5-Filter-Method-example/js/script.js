// Filter method Example

// Example 1 Filter Method with Static Data

// 1. I want to import the data array to use it
import teams from "./data/teams.js";

// 2. select the team-container class
// 3. select the search class

console.log(teams);
const teamContainer = document.querySelector(".team-container");
const search = document.querySelector(".search");

// 4. assign the teams to data to a variable

// targets the array from the file I have imported
let teamsToRender = teams;

// 5. loop on the teams array and inject data to the DOM teamContainer
// 6. wrap this for loop in a function and then we use it

function renderTeams(someArray) {
  // clear the teamContainer
  teamContainer.innerHTML = "";
  for (let i = 0; i < someArray.length; i++) {
    console.log(someArray[i]);
    teamContainer.innerHTML += `<div class="team"><h3>${someArray[i].full_name}</h3></div>`;
  }
}

renderTeams(teamsToRender);

search.onkeyup = function (event) {
  console.log(event);
  console.log(event.target.value);
  const searchValue = event.target.value.trim().toLowerCase();
  console.log("Searchvalue: ", searchValue);

  const filteredTeams = teamsToRender.filter(function (team) {
    // check if any of the full_name property starts with the searchValue
    if (team.full_name.toLowerCase().startsWith(searchValue)) {
      return true;
    }
  });
  console.log(filteredTeams);
  // assign the new filtered array to the old array
  //   teamsToRender = filteredTeams;
  console.log("teamsTorender: ", teamsToRender);
  renderTeams(filteredTeams);
};
