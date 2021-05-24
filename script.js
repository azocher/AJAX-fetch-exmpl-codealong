document.addEventListener("DOMContentLoaded", () => {
    // store constant url for form dom element; request url
    const requestUrl = "https://randomuser.me/api/?results="
    let inputForm = document.querySelector("form")
    let peopleList = document.querySelector("#peopleList")
    let peopleRes = []

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
                return res.json()
            })
            // .then --> use response JSON data
            .then((jsonData) => {
                peopleRes = jsonData.results
                domPeopleList(peopleRes)
            })
            // .catch --> catch errors
            .catch((err) => {
                console.log(err)
                return err
            })

    })
        

    // RESPONSE DATA
    // collect formated data
    function domPeopleList(resArr) {
          resArr.forEach((person) => {
            // create an li element for each response
            let li = document.createElement("li")
            li.textContent = person.name.first + " " + person.name.last
            
            // add li element to DOM
            peopleList.appendChild(li)
        })
    }
})