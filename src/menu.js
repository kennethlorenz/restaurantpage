export default function menu() {
  const content = document.createElement("div");
  content.classList.add("menu");

  content.append(
    createMenuItem(
      "Carne",
      "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
    )
  );
  content.append(
    createMenuItem(
      "Colorato",
      "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"
    )
  );
  content.append(
    createMenuItem(
      "Gamberi",
      "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"
    )
  );
  content.append(
    createMenuItem(
      "Pepe",
      "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil"
    )
  );
  content.append(
    createMenuItem(
      "Disgustoso",
      "Tomato sauce, Bacon, Pineapple, Olives, Basil"
    )
  );
  content.append(
    createMenuItem(
      "Salsiccia",
      "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
    )
  );
  content.append(
    createMenuItem(
      "Pomodoro",
      "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"
    )
  );
  content.append(
    createMenuItem(
      "Crema",
      "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil"
    )
  );

  return content;
}

function createMenuItem(pizzaName, description) {
  const card = document.createElement("div");
  card.classList.add("menu-item");

  const image = new Image();
  image.src = `../src/photos/${pizzaName}.png`;
  image.alt = "alt";
  card.appendChild(image);

  const name = document.createElement("h2");
  name.innerHTML = pizzaName;
  card.appendChild(name);

  const desc = document.createElement("p");
  desc.innerHTML = description;

  card.appendChild(desc);
  return card;
}
