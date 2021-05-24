document.addEventListener("DOMContentLoaded", () => {
    // store constant url for form dom element; request url
    const requestUrl = "https://randomuser.me/api/?results="
    let inputForm = document.querySelector("form")
    let peopleList = document.querySelector("#peopleList")

    // REQUEST DATA
    // take form element and prevent default behavior
    inputForm.addEventListener("submit", (e) => {
        e.preventDefault()
        // get user inputed number
        let userInput = input.value
        
        // make fetch request to const api url with given user number
        fetch(requestUrl + userInput)
            // .then --> take response data and format
            .then((res) => {
                console.log("Response came back!")
            })
            // .catch --> catch errors
            .catch((err) => {
                console.log(err)
                return err
            })

    })
        

    // RESPONSE DATA
    // collect formated data
        // create an li element for each response
        // add li element to DOM

})