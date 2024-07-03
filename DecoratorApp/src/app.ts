interface ValidationData {
    [className: string]: {
        [propName: string]: string[];
    }
}

const validation: ValidationData = {};

function validator(types: string[]) {
    return function (target: any, propName:string) {
        validation[target.constructor.name] = {
            [propName]: types
        }
    }
}

class Person {
    @validator(['required'])
    email: string;
    @validator(['required', 'password'])
    private password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}

function validate(obj: any) {
    const registeredValidations = validation[obj.constructor.name];

    if(!registeredValidations) {
        return true;
    }

    let isValid = true;
    for (const prop in registeredValidations) {
        for(const validator of registeredValidations[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;                
                case 'password':
                    isValid = isValid && obj[prop].length > 5;
                    break;
                default:
                    break;
            }
        }
    }

    return isValid;
}

const personForm = document.querySelector('form');
personForm?.addEventListener('submit', event => {
    event?.preventDefault();

    const emailElem = document.getElementById('email') as HTMLInputElement;
    const passwordElem = document.getElementById('password') as HTMLInputElement;

    const persona = new Person(emailElem.value, passwordElem.value);
    if(!validate(persona)){
        alert('Valor ingresado incorrecto');
        return;
    }
    console.log(persona);
})