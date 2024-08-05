// Function that returns a promise to simulate fetching data from a server
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating a delay using setTimeout
      setTimeout(() => {
        const success = true; // Change this to false to simulate an error
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Failed to fetch data.");
        }
      }, 2000); // 2 seconds delay
    });
  }
  
  // Using the promise
  fetchData()
    .then((message) => {
      console.log(message); // Output: Data fetched successfully!
    })
    .catch((error) => {
      console.error(error); // Output: Failed to fetch data.
    });
  