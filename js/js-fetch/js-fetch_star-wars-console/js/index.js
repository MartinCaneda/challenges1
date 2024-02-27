/* Have a look at the `./js/index.js` 
file: There is an `url` variable and an 
empty `fetchData()` function.

Inside of the `fetchData()` function, 
use the `url` variable to fetch data 
from the Star Wars API.

Log the fetched data to the console and 
play around with it:

- log the entire data object
- log different values of the data 
object
- Bonus: Can you log the eye color of 
R2-D2?

The following hints may guide you:

- use a `try...catch` block
- make sure to wait for all asynchronous 
operations
- make sure to handle bad responses 
from the API as well
- you can test bad responses via adding 
a random string of characters to the 
end of the URL stored in the url 
variable
 */
console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    console.log(response);

    if (!response.ok) {
      console.error("nope");
      return;
    }
  } catch (error) {
    console.log(error);
  }
}

fetchData();
