
export default function validate({data, type}) {
    let errors = []

    switch (type) {
        case 'register':
            errors = errors.concat(checkEmpty(data))
            if (errors.length) return errors

            errors = errors.concat(checkLength(data))
            if (errors.length) return errors

            errors = errors.concat(checkEmail(data))
            if (errors.length) return errors

            errors = errors.concat(checkPassword(data))
            if (errors.length) return errors

            errors = errors.concat(checkPasswordMatch(data))
            return errors

        case 'login':
            errors = errors.concat(checkEmpty(data))
            return errors
        case 'postForm':
            errors = errors.concat(checkEmpty(data))
            if (errors.length) return errors
            errors = errors.concat(checkLength(data))

            return errors
        default:
            break;
    }
}

const checkEmpty = data => Object.entries(data).filter(entry => entry[0] !== 'passwordConfirm' && entry[0] !== 'postImage' && entry[0] !== 'postImageUrl')
    .filter(entry => !entry[1])
    .map(entry =>
        //string template that turns camelCase into usual text (camelCase => camel case)
        `${entry[0].replace(/([A-Z])/g, ",$1").toLocaleLowerCase()} must be filled`)


const checkLength = data => Object.keys(data).filter(e => e !== 'passwordConfirm' && e !== 'password' && e !== 'email' && e !== 'postImage' && e !== 'postImageUrl')
    .filter(e => data[e].length <= 2 || data[e] <= 3)
    .map(e => `${e.replace(/([A-Z])/g, ",$1").toLocaleLowerCase()} is to small`)

const checkEmail = data => {
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegEx.test(data['email'])) return []
    else return ['Incorrect email format']
}

const checkPassword = data => {

    // \$\^\*  special symbols in regex are rejected by linter
    const passRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#%&])(?=.{6,})/;
    if (passRegEx.test(data['password'])) return []
    else return ['Password must be at least 6 characters long and contain 1 uppercase and 1 special symbol']
}

const checkPasswordMatch = data => data['password'] !== data['passwordConfirm'] ? ['Passwords don\'t match '] : []



