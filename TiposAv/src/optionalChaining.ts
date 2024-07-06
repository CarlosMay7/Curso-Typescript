interface Media {
    title: string;
    genres: string[];
    director?: { //Para que sea opcional
        name: string
    }
}

const fetchMediaData: Media = {
    title: 'googfellas',
    genres: [
        'Drama',
        'Crime'
    ],
    director: {
        name: 'Martin Scorsese'
    }
}

console.log(fetchMediaData.director?.name); //Para decir que puede o no haber valor pero sin que salga error
console.log(fetchMediaData.director?.name ?? 'Director no encontrado'); //Mostrar algo diferente a null (Nullish coallesing)