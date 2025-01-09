
const apiUrl = "https://api.example.com/data";

function fetchData(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error fetching data: " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Fetched Data:", data);
    })
    .catch((error) => {
      console.error("Error in Fetching Data:", error);
    });
}

fetchData(apiUrl);


function postData(url, data) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error sending data: " + response.statusText);
      }
      return response.json();
    })
    .then((responseData) => {
      console.log("Data sent successfully:", responseData);
    })
    .catch((error) => {
      console.error("Error in Sending Data:", error);
    });
}

const dataToPost = {
  name: "John Doe",
  age: 21,
};

postData(apiUrl, dataToPost);
