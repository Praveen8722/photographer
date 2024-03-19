function handleSubmit() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("msg").value;
  if (name && email && msg) {
    alert("Successfully submited....! ");
  } else {
    alert("Enter required fields...!");
  }
}

function navigation() {
  const links = document.querySelectorAll(".header a");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);

      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
}

navigation();

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", function () {
  scrollToTopBtn.style.opacity = window.scrollY > 20 ? "1" : "0";
});

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


