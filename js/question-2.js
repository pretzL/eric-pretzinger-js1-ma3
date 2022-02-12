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

async function callRawg() {
  try {
    const response = await fetch(url);
    const resolvedResponse = await response.json();
    console.log(resolvedResponse);

    resultsContainer.innerHTML = "";
    resultsContainer.classList.remove("loader");

    rawgResults = resolvedResponse.results;

    for (let i = 0; i < rawgResults.length; i++) {
      if (i === 8) {
        break;
      }

      const numberOfTags = rawgResults[i].tags;

      resultsContainer.innerHTML += `<div class="result"><p>Name: ${rawgResults[i].name}</p>
                                    <p>Rating: ${rawgResults[i].rating}</p>
                                    <p>Tags: ${numberOfTags.length}</p>
                                    </div>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = "An error occurred when calling the API";
  }
}

callRawg();
