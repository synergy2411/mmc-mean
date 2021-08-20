console.log("Script loaded!")

const btnElement = document.getElementById("btnShow")

btnElement.addEventListener("click", (event) => {
    event.preventDefault();
    const txtAddress = document.getElementById("txtAddress").value
   fetch("http://localhost:9090/address?location="+txtAddress)
    .then(response => response.json())
    .then(result => console.log("RESULT : ", result))
    .catch(err => console.log(err))

})