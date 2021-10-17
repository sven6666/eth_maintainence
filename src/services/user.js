export function loginUser(username, password) {
    console.log("Calling user now");
    return fetch('http://localhost:8080/api/v1/user?username=admin&password=password1')
        .then(data => data.json())
}

const users = [{
    username: 'tom@eth.ch',
    password: 'tom123',
    admin: true,
  }, {
    username: 'michael@eth.ch',
    password: 'mic123',
    admin: false
}];

export function loginUserPromise(username, pwd) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let foundUser;
            for (const user of users) {
                if (user.username === username && user.password === pwd) {
                    foundUser = user;
                }
            }
            resolve(
             foundUser
        )
        }, 1500)
    })
}