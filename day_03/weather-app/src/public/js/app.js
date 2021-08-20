
const btnElement = document.getElementById("btnShow")
const divMessage = document.getElementById("message");

btnElement.addEventListener("click", (event) => {
    event.preventDefault();
    const txtAddress = document.getElementById("txtAddress").value
   fetch("/address?location="+txtAddress)
    .then(response => response.json())
    .then(result => {
        divMessage.innerHTML = `
            <h4>
                The temperature at location ${result.placeName} is ${result.temperature}.
                <br/>
                It is anticipated that ${result.summary}!
            </h4>
        `
    })
    .catch(err => {
        console.log(err);
        divMessage.innerHTML = err
    })

})