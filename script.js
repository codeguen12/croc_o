// menu burger
const burger = document.querySelector(".burger");

const navLinksContainer = document.querySelector(".navlinks-container");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
});

burger.addEventListener("click", () => {
  navLinksContainer.classList.toggle("open");
});
// une modal pour le formulaire de connexion
const modalContainer = document.querySelector(".modal-container");

const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleModal)
);

function toggleModal() {
  modalContainer.classList.toggle("active");
}
//message change par rapport au horaire d'ouverture
function updateMessage() {
  let currentTime = new Date().getHours();
  let message;
  if (currentTime >= 11 && currentTime < 23) {
    message = "Bonjour, nous sommes ouverts maintenant.";
  } else {
    message = "Désolé, nous sommes fermés pour le moment.";
  }
  document.getElementById("openingHours").innerHTML = message;
}
setInterval(updateMessage, 1000);
