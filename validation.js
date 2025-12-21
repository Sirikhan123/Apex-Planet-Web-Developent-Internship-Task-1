
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;

  if (!email.includes("@") || name.trim() === "") {
    alert("Please enter a valid name and email.");
  } else {
    alert("Form submitted successfully!");
    this.reset();
  }
});
