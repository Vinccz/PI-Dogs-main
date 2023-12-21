const axios = require("axios")
const {Dog, Temperament} = require("../src/db")
const {API_KEY} = process.env;

const todosLosPerritos = async(name) =>{
// TRAER TODOOS PERROS DE LA BD

    const pichichosDB = await Dog.findAll({
        include: {
            model: Temperament,
        }
        });
// TRAER TODOS LOS PERROS DE LA API

const {data} = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)

// UNICO ARRAY CON PERROS DE BD Y API

const todosLosCachilos = [...pichichosDB, ...data]

if (todosLosCachilos < 1){
    return "Se escaparon los peshos de la api"
}
// CONDICIONAL DE QUE SI HAY QUERY DEVUELVA LA CONINCIDENCIA 
// SI NO HAY QUERY DEVUELVA TODO
if (!name){
    return todosLosCachilos
}else {
const perritos = todosLosCachilos.filter(perris => {
    return perris.name.toLowerCase().includes(name.toLowerCase())
})
if (perritos.length < 1){
    throw new Error
    }else {
    return perritos
}
}
}


const allDogsId = async(id, type) => {

if(type == "api"){
    const {data} = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    const dogId = data.filter(dogs =>{
        return dogs.id == id
    }) 
    return dogId
}else {
    const dogBd = await Dog.findByPk(id, {
        include: {
            model: Temperament,
        }
    
    })
    return dogBd
}}

const nuevoPerro = async (name, image, peso, altura, años_de_vida, temperament) => {
    try {
        const newPet = await Dog.create({
                    name,
                    image,
                    peso,
                    altura,
                    años_de_vida,
            });

            if (temperament && temperament.length > 0){
                const temperamentoArray = temperament.split(",")
                for (const temp of temperamentoArray){
                    const asosiacionTemperamento = await Temperament.findOne({
                        where: {
                            name: temp.trim()
                        }
                    })
                    console.log(temperamentoArray)
                    if(asosiacionTemperamento){
                        await newPet.addTemperament(asosiacionTemperamento) 
                    }
                }
            }

            return newPet;
    } catch (error) {
        throw new Error(error.message);
    }
}

const cargaDeTemps = async () => {
    try {
        const { data } = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);

        // Utilizar un Set para garantizar temperamentos únicos
        const todosLosTemps = new Set();

        // Iterar sobre los datos y agregar los temperamentos al conjunto
        data.forEach(breed => {
            // Verifica si 'breed' es un objeto y tiene la propiedad 'temperament'
            if (breed && breed.temperament) {
                const breedTemperaments = breed.temperament.split(',');

                // Verificar si 'breedTemperaments' es un array antes de intentar iterar sobre él
                if (Array.isArray(breedTemperaments)) {
                    breedTemperaments.forEach(temp => {
                        // Verificar si el temperamento tiene un nombre antes de buscar/crear en la base de datos
                        if (temp.trim()) {
                            todosLosTemps.add(temp.trim());
                        }
                    });
                } else {
                    console.error('Invalid breedTemperaments:', breedTemperaments);
                }
            } else {
                console.error('Invalid breed:', breed);
            }
        });

        const temperamentsArray = Array.from(todosLosTemps);

        // Almacenar los temperamentos en la base de datos
        await Promise.all(temperamentsArray.map(temp => Temperament.findOrCreate({
            where: { name: temp },
        })));

        console.log('Temperaments loaded successfully:', temperamentsArray);
    } catch (error) {
        console.error('Error loading temperaments:', error.message);
    }
};

// Llama a la función para cargar los temperamentos
cargaDeTemps();

module.exports ={ todosLosPerritos, allDogsId, nuevoPerro, cargaDeTemps}


