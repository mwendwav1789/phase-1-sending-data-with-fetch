// Function to submit data and handle responses
function submitData(name, email) {
  // Absolute URL for the local server (update the URL as needed)
  const url = "http://localhost:3000/users";

  // Create data object
  const data = {
    name: name,
    email: email,
  };

  // Make a POST request to the '/users' endpoint
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": application / json,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Unauthorized Access");
      }
      return response.json();
    })
    .then((data) => {
      // Retrieve and append the new ID value to the DOM
      const idElement = document.createElement("p");
      idElement.textContent = `New ID: ${data.id}`;
      document.body.appendChild(idElement);
    })
    .catch((error) => {
      // Append the error message to the DOM
      const errorElement = document.createElement("p");
      errorElement.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorElement);
    });
}
