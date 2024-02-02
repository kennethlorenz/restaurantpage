export default function home() {
  const content = document.createElement("div");
  const heroH1 = document.createElement("h1");
  const heroTag = document.createElement("p");
  const heroBtn = document.createElement("button");

  content.classList.add("hero");

  heroH1.innerHTML = "Delicious pizza for your headtop!";
  heroTag.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellateaque soluta tempora ipsa ipsum aliquid.";
  heroBtn.innerHTML = "Order Now";

  content.append(heroH1, heroTag, heroBtn);

  return content;
}
