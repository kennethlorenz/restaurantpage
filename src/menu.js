export default function menu() {
  const content = document.createElement("div");
  const menuH1 = document.createElement("h1");

  menuH1.innerHTML = "YOU'RE IN MENU PAGE";
  content.append(menuH1);

  return content;
}
