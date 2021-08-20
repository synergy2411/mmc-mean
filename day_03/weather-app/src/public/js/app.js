console.log("Script loaded!")

const btnElement = document.getElementById("btnShow")
const divMessage = document.getElementById("message");

btnElement.addEventListener("click", (event) => {
    event.preventDefault();
    const txtAddress = document.getElementById("txtAddress").value
   fetch("http://localhost:9090/address?location="+txtAddress)
    .then(response => response.json())
    .then(result => {
        console.log("RESULT : ", result);
        divMessage.innerHTML = `
            <h3>
                The temperature at location ${result.placeName} is ${result.temperature}.
                <br/>
                It is anticipated that ${result.summary}!
            </h3>
        `
    })
    .catch(err => {
        console.log(err);
        divMessage.innerHTML = err
    })

})