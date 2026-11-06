const popup = document.getElementById("cookiePopup");
const Acceptbutton= document.getElementById("acceptButton");

if (localStorage.getItem("cookieConsent") === "accepted") {
    popup.classList.add("hidden");
}

Acceptbutton.addEventListener("click", function() {
    localStorage.setItem("cookieConsent", "accepted");
    popup.classList.add("hidden");
});ssss