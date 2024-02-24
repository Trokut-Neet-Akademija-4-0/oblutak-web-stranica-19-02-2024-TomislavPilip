//DOHVACANJE MODALA I OVERLAYA
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

///////////////////O T V A R A NJ E   M O D A L A/////////////////////

//DOHVACANJE BUTTONA
const openModal = document.querySelectorAll(".button-price");

const openModalFunction = () => {
  /////Micemo klasu hidden kako bi se modal pokazao
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < openModal.length; i++) {
  console.log(openModal[i]);
  openModal[i].addEventListener("click", openModalFunction);
}

///////////////Z A T V A R A NJ E   M O D A L A///////////////////////////////

/*const closeModalFunction = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};*/

//s ARROW FUNKCIJOM (Zatim je navodimo kao argument unutar event listenera)
const closeModalFunction = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

/////DOHVACANJE CLOSE BUTTONA ZA ZATVARANJE MODALA
const closeModal = document.querySelector(".close-modal");
closeModal.addEventListener("click", closeModalFunction);

////OVERLAY EVENT LISTENER ZELIMO ZATVORITI MODAL KADA KLIKNEMO NA OVERLAY
overlay.addEventListener("click", closeModalFunction);

/////KEYPRESS KEYDOWN(najcesce se koristi) KEYUP
document.addEventListener("keydown", function (event) {
  ///event object!!!! TREBA POGLEDATI

  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModalFunction();
  }
});
