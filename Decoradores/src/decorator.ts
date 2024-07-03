interface ApiEndpoint {
    get(): string[];
    post(request:{token:string, body:string}): void;
}

let httpServer: {[key: string]: ApiEndpoint} = {}

@registerEndpoint
class Families implements ApiEndpoint {
    private houses = ['Lannister', 'May'];

    get() {
        return this.houses;
    }

    post(request: {token: string, body: string}) {
        this.houses.push(request.body);
    }
}

@registerEndpoint
class Castles implements ApiEndpoint {
    private castles = ['Winterfell', 'Caster'];

    get() {
        return this.castles;
    }

    @protect('123')
    post(request: {token: string, body: string}) {
        this.castles.push(request.body);
    }

    getCastles(@paramdecorator index: number, otherParam: string) {
        return this.castles;
    }
}

// function protect(target: any, key: string, descriptor: PropertyDescriptor) {
//     const method = descriptor.value;
//     descriptor.value = (request: {token: string, body: string}) => {
//         if(request.token !== '123') {
//             console.log('Error')
//         } else {
//             const bindingOgFunction = method.bind(this);
//             const result = bindingOgFunction(request);
//             return result;
//         }
//     }
// }

//Decorator Factory
function protect(token: string) {
    return function(target: any, key: string, descriptor: PropertyDescriptor) {
        const method = descriptor.value;
        descriptor.value = (request: {token: string, body: string}) => {
            if(request.token !== token) {
                console.log('Error')
            } else {
                const bindingOgFunction = method.bind(this);
                const result = bindingOgFunction(request);
                return result;
            }
        }
    }    
}

function paramdecorator(target: any, key: string, index: number) {
    console.log(target);
    console.log(key);
    console.log(index);
}


function registerEndpoint(target: any) {
    const classname = target.name;
    const endpoint = '/' + classname.toLowerCase();   
    httpServer[endpoint] = new target();
}

registerEndpoint(Families);

console.log(httpServer['/families'].get());
httpServer['/families'].post({token: '123', body: 'Nuevo'});
console.log(httpServer['/families'].get());
