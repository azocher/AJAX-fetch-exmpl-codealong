console.log("This script is humming along...🦚")

// GET request to reddit for kitten
fetch("https://www.reddit.com/search.json?q=kittens")
    .then((res) => {
        console.log("it worked! 🎉")
        return res.json()
    })
    .then((jsonDat) => {
        jsonDat.data.children.forEach((elem) => {
            console.log(elem.data.subreddit)
        })
        return jsonDat
    })
    .catch((err) => {
        console.log(err)
        return err
    })