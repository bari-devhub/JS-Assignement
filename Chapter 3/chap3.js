
// ==============================
// Chapter 3 – Variables for Numbers
// ==============================
const chapter3 = {
  task1() {
    let age = 20;
    alert("I am " + age + " years old.");
  },
  task2() {
    let visits = localStorage.getItem("visitCount");
    visits = visits ? Number(visits) + 1 : 1;
    localStorage.setItem("visitCount", visits);
    output.innerHTML = `<p>You have visited this site <strong>${visits}</strong> times.</p>`;
  },
  task3() {
    let birthYear = 2005;
    output.innerHTML = `<p>My birth year is ${birthYear}.<br>Data type of my declared variable is number.</p>`;
  },
  task4() {
    let visitorName = "Muhammed Ahmed";
    let productTitle = "T-shirt";
    let quantity = 5;
    output.innerHTML =
      `<p><strong>${visitorName}</strong> ordered <strong>${quantity}</strong> ${productTitle}(s) on XYZ Clothing Store.</p>`;
  },
};
