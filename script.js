function hack(value) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;
  value.onmouseover = (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };
}
hack(document.querySelector(".hacker1"));
hack(document.querySelector(".hacker2"));

// ----------------------------------------------
const blob = document.getElementById("blob");

window.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};

// --------nav------------
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    menuItems.forEach((item) => {
      item.classList.remove("selected");
    });

    menuItem.classList.add("selected");
  });
});
const form = document.querySelector("form");
const fullName = document.getElementById("yname");
const email = document.getElementById("yemail");
const mess = document.getElementById("yarea");
function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value} <br> Email ID: ${email.value} <br> Message: ${mess.value}`;
  const sub = `Message from ${fullName.value}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "sagayabritto23@gmail.com",
    Password: "72F40879ADFC517F8E98BD1E678BA1405AF8",
    To: "sagayabritto23@gmail.com",
    From: "sagayabritto23@gmail.com",
    Subject: sub,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success",
        text: "Message Sent succesfully!",
        icon: "success",
      });
    }
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
