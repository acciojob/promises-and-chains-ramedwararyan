//your JS code here. If required.
document.getElementById("voteForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from refreshing

  const age = document.getElementById("age").value.trim();
  const name = document.getElementById("name").value.trim();

  // Validation: Check for empty fields
  if (!age || !name) {
    alert("Please enter valid details.");
    return;
  }

  // Promise: Check age condition
  const checkAge = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseInt(age, 10) > 18) {
        resolve(name);
      } else {
        reject(name);
      }
    }, 4000);
  });

  // Handle promise resolution/rejection
  checkAge
    .then((userName) => {
      alert(`Welcome, ${userName}. You can vote.`);
    })
    .catch((userName) => {
      alert(`Oh sorry ${userName}. You aren't old enough.`);
    });
});
