fetch(
  "https://api.unsplash.com/photos/random?query=pretzels&query=dragon&client_id=fJ0M9egBXvaO6gEgCjvmyMAwl1EBZ1tJS18xYfcwq3I"
)
  .then((res) => res.json())
  .then((data) => {
    const imageUrl = data.urls.full;
    const name = `${data.user.first_name} ${data.user.last_name}`;
    console.log(name);

    document.getElementById("body").style.backgroundImage = `url(${imageUrl})`;

    document.getElementById("artist").innerHTML = `<p>By: ${name}</p>`;
  });

function displayLocalTime() {
  const now = new Date();
  const localTime = now.toLocaleTimeString();
  document.getElementById("localTime").innerText = `${localTime}`;
}

displayLocalTime();
setInterval(displayLocalTime, 1000);
