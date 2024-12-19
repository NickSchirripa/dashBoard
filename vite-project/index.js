document.getElementById("btn").addEventListener("click", function () {
  fetch(
    "https://api.unsplash.com/photos/random/?client_id=fJ0M9egBXvaO6gEgCjvmyMAwl1EBZ1tJS18xYfcwq3I"
  )
    .then((res) => res.json())
    .then((data) => {
      const imageUrl = data.urls.full;
      console.log(imageUrl);

      document.getElementById(
        "container"
      ).style.backgroundImage = `url("${imageUrl}")`;
    });
});
