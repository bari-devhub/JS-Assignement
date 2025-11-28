const output = document.getElementById("output");

// ==============================
// Chapter 1 – Alerts
// ==============================
const chapter1 = {
  task1() { alert("Welcome to our website! Have a great day!"); },
  task2() { alert("Error! Please enter a valid password."); },
  task3() { alert("Welcome to JS Land...\nHappy Coding!"); },
  task4() { alert("Welcome to JS Land..."); alert("Happy Coding!"); },
  task5() {
    console.log("Hello... I can run JS through my web browser’s console.");
    alert("Check your browser console to see the message!");
  },
  task6() {
    alert("This is how alerts can be used inside a project!");
    output.innerHTML = "<p class='success'>Alert executed successfully inside the project!</p>";
  },
  task7() {
    alert(
      "Placement of <script> tag:\n" +
      "a. In Head – runs before page loads\n" +
      "b. Before Body – early execution\n" +
      "c. Inside Body – runs with content\n" +
      "d. After Body – best for performance"
    );
  },
};
