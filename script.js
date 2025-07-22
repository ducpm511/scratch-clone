document.getElementById("signInBtn").addEventListener("click", function () {
  const modal = document.getElementById("signinModal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
});

// Optional: Đóng khi click ngoài modal
document.addEventListener("click", function (event) {
  const modal = document.getElementById("signinModal");
  const toggle = document.getElementById("signInBtn");
  if (!modal.contains(event.target) && !toggle.contains(event.target)) {
    modal.style.display = "none";
  }
});


const signInBtn = document.getElementById("signInBtn");
const loginModal = document.getElementById("signinModal");
const submitLogin = document.getElementById("submitLogin");
const trickedModal = document.getElementById("youGotTrickedModal");
const closeTrickedModal = document.getElementById("closeTrickedModal");

signInBtn.addEventListener("click", () => {
  loginModal.classList.toggle("hidden");
});

submitLogin.addEventListener("click", () => {
  loginModal.classList.add("hidden");
  trickedModal.classList.remove("hidden");
});

closeTrickedModal.addEventListener("click", () => {
    console.log("Modal closed");
  trickedModal.classList.add("hidden");
});
