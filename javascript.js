document.addEventListener("DOMContentLoaded", () => {
  const myelement = document.getElementById('home-id')

  const mybutton = document.getElementById("homebutton")



  mybutton.addEventListener("click", (e) => {
    myelement.scrollIntoView({
        behavior: "smooth"
    })
  })
});


