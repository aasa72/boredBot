const message = document.getElementById("message")

//Fetches the activity from boredapi and displays it in the DOM
  button.addEventListener("click", function() {
    fetch("https://www.boredapi.com/api/activity")
      .then(res => res.json())
      .then(data => {
      message.innerHTML = `${data.activity}`
    })
  })