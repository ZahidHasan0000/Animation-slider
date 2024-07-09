const logos = document.querySelectorAll(".logo");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  logos.forEach((logo) => {
    logo.setAttribute("data-animated", true);

    const logosInner = logo.querySelector(".logo__inner");
    const logosContent = Array.from(logosInner.children);

    // Define the number of duplications
    const numberOfDuplications = 20;

    // Loop to duplicate items
    for (let i = 0; i < numberOfDuplications; i++) {
      logosContent.forEach((item) => {
        const duplicatedValue = item.cloneNode(true);
        duplicatedValue.setAttribute("aria-hidden", true);
        logosInner.appendChild(duplicatedValue);
      });
    }
  });
}

function updateAnimationDuration() {
  logos.forEach((logo) => {
    const logoInner = logo.querySelector(".logo__inner");
    const logoItems = logoInner.children;

    const animationFactor = 3; // Adjust as needed

    const totalItems = logoItems.length;
    const animationDuration = animationFactor * totalItems;
    logo.style.setProperty("--_animation-duration", `${animationDuration}s`);
  });
}

// Call updateAnimationDuration() whenever you add a new list item programmatically
function addNewListItem() {
  const newItem = document.createElement("li");
  newItem.textContent = "";

  // Append new item to the first logo found
  const firstLogo = document.querySelector(".logo");
  const logoInner = firstLogo.querySelector(".logo__inner");
  logoInner.appendChild(newItem);

  updateAnimationDuration();
}

// Example of adding new list item
addNewListItem();



