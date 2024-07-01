const thrwError = (message:string) => {
    throw new Error(message);

    //Con never no se retorna nada, en cambio con void puede ser return null o undefined
}