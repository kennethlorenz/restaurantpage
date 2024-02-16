import carne from "./photos/carne.png";
import colorato from "./photos/colorato.png";
import crema from "./photos/crema.png";
import disgustoso from "./photos/disgustoso.png";
import gamberi from "./photos/gamberi.png";
import pepe from "./photos/pepe.png";
import pomodoro from "./photos/pomodoro.png";
import salsiccia from "./photos/salsiccia.png";
export default function menu() {
  const content = document.createElement("div");
  content.classList.add("menu");

  content.append(
    createMenuItem(
      "Carne",
      carne,
      "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
    )
  );
  content.append(
    createMenuItem(
      "Colorato",
      colorato,
      "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"
    )
  );
  content.append(
    createMenuItem(
      "Gamberi",
      gamberi,
      "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"
    )
  );
  content.append(
    createMenuItem(
      "Pepe",
      pepe,
      "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil"
    )
  );
  content.append(
    createMenuItem(
      "Disgustoso",
      disgustoso,
      "Tomato sauce, Bacon, Pineapple, Olives, Basil"
    )
  );
  content.append(
    createMenuItem(
      "Salsiccia",
      salsiccia,
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

function createMenuItem(pizzaName, img, description) {
  const card = document.createElement("div");
  card.classList.add("menu-item");

  const image = new Image();
  image.src = img;
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
