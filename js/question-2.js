/* Question 2
Make a call to the Rawg API.
Go to https://rawg.io/apidocs and get an API key which you’ll use as part of the endpoint you’re making an API call to. 
You can use https://noroff.no for the URL and Noroff Assignment for the description.
You'll be given an API Key you can add as a "key" parameter in your fetch request.
Make a call to the following API endpoint replacing INSERTAPIKEYHERE with the key given to you from the Rawg API.
https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=INSERTAPIKEYHERE

Loop through the results and display the following properties in HTML, but only for the first eight results:
name
rating
number of tags (not the tag details, just the amount of tags) */

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=35f9fd70b7b54c25bfa1662ebdeaff60";

const resultsContainer = document.querySelector(".results");

/* function createHTML(results) {
  const rawgResults = results.all;

  resultsContainer.innerHTML = "";

  for (let i = 0; i < rawgResults.length; i++) {
    if (i === 8) {
      break;
    }

    resultsContainer.innerHTML += `<div class="result">${rawgResults[i]}</div>`;
  }
} */

async function callRawg() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    const rawgResults = results.all;
    resultsContainer.innerHTML = "";

    for (let count = 0; count < rawgResults.length; count++) {
      console.log(rawgResults[i].name);
      if (count === 8) {
        break;
      }

      const numberOfTags = rawgResults[i].tags;

      resultsContainer.innerHTML += `<div class="result">Name: ${rawgResults[i].name}
                                    Rating: ${rawgResults[i].rating}
                                    Tags: ${numberOfTags.length}
                                    </div>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = "An error occurred when calling the API";
  }
}

callRawg();
