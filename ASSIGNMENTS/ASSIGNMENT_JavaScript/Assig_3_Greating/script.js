var greetingElement = document.getElementById("greeting");

var currentTime = new Date().getHours(); 

    if (currentTime >= 6 && currentTime < 12) {
      greetingElement.textContent = "Good Morning";
    } else if (currentTime >= 12 && currentTime < 16) {
      greetingElement.textContent = "Good Afternoon";
    } else if (currentTime >= 16) {
      greetingElement.textContent = "Good Evening";
    }
