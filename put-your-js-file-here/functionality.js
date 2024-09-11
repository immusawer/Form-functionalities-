document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission
  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;
  var gender = document.getElementsByName("gender");
  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked === true) {
      var gen = gender[i].value;
    }
  }

  var edu = document.getElementById("education");
  var value = edu.value;
  var ed = edu.options[edu.selectedIndex].text;
  var hob = document.getElementsByName("hobbies");
  for (i = 0; i < hob.length; i++) {
    if (hob[i].checked === true) {
      var h = hob[i].value;
    }
  }

  var comm = document.getElementById("comment").value;
  const tableBody = document.querySelector("#resultTable tbody");
  tableBody.innerHTML = `
      <tr><td>Name</td><td>${name}</td></tr>
      <tr><td>Password</td><td>${password}</td></tr>
      <tr><td>Gender</td><td>${gen}</td></tr>
      <tr><td>Education</td><td>${ed}</td></tr>
      <tr><td>Hobbies</td><td>${h}</td></tr>
      <tr><td>Comment</td><td>${comm}</td></tr>
  `;
});
