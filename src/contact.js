import "./style.css";
export default function contact() {
  const content = document.createElement("div");
  const phoneNumber = document.createElement("p");
  const address = document.createElement("p");
  const restoGoogleImage = new Image();

  phoneNumber.innerHTML = "📞 123-456-789";
  address.innerHTML = "🏠 Hollywood Boulevard 42, Los Angeles, USA";
  restoGoogleImage.src = "../src/photos/restaurant-location.png";

  content.append(phoneNumber);
  content.append(address);
  content.append(restoGoogleImage);
  content.classList.add("contact");
  return content;
}
