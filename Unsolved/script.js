var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute(
  "src",
  "  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGYy3hZqzbgWcoik8NOIoPjdrXe0I9hIVkkSDxyTm1f2vJARwxMlH-WuEmaup6vVBOzxo&usqp=CAU"
);
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods
li1.innerText = "Apples🍎";
li2.innerText = "Pizza🍕";
li3.innerText = "Dumplings🥟";
li4.innerText = "Cupcakes🧁";

listEl.append(li1, li2, li3, li4);

listEl.setAttribute("style", "background-color: #333333; padding: 20px");
li1.setAttribute(
  "style",
  "background-color: #ffffff55;color: white; margin-left: 35px; padding: 5px"
);
li2.setAttribute(
  "style",
  "background-color: #ffffff66;color: white; margin-left: 35px; padding: 5px"
);
li3.setAttribute(
  "style",
  "background-color: #ffffff77;color: white; margin-left: 35px; padding: 5px"
);
li4.setAttribute(
  "style",
  "background-color: #ffffff88;color: white; margin-left: 35px; padding: 5px"
);
