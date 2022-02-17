// 1. creae a variable and assign the end pint url to it, call it randomUserUrl
const randomUserUrl = "https://randomuser.me/api/";
// 2. Select the wrapper div
const container = document.querySelector(".wrapper");

console.log(container);
// 3. make the API call

fetch(randomUserUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    console.log(jsonData.results);
    const results = jsonData.results;
    for (let i = 0; i < results.length; i++) {
      console.log(results[i]);
      const firstName = results[i].name.first;
      const lastName = results[i].name.last;
      const personImg = results[i].picture.large;
      container.innerHTML += `<h1>${firstName} ${lastName}</h1>
      <img src="${personImg}" alt="Name of the person is ${firstName} ${lastName}" title="Name of the person is ${firstName} ${lastName}">
      <p>Gender: ${results[i].gender}</p>
      <p>Phone number: ${results[i].cell}</p>
      <p>Adress: <br><span class="adress"><b>Country:</b> ${results[i].location.country}</p></span>
      <p><span class="adress"><b>City:</b> ${results[i].location.city}</p></span>
      <p><span class="adress"><b>Street Adress:</b> ${results[i].location.street.name} ${results[i].location.street.number}</p></span>
      <p><span class="adress"><b>Postcode:</b> ${results[i].location.postcode}</p></span>
      <p>Username: ${results[i].login.username}</p>
      <p>Password: ${results[i].login.password}</p>`;
    }
  })
  .catch(function (error) {
    console.log(error);
  });
