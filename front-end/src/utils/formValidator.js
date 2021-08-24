export default function validate(data , type){
    let errors = []

    switch (type) {
        case 'register':
        errors = errors.concat(checkEmpty(data))
        
        
        
        return errors
        case 'login':
        errors = errors.concat(checkEmpty(data))
        
        
        
        return errors
        case 'postForm':
        errors = errors.concat(checkEmpty(data))


        return errors
        default:
            break;
    }
}

const checkEmpty = (data) => Object.entries(data).filter(entry => !entry[1]).map(entry => `${entry[0]} is empty`)


