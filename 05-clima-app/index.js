require('dotenv').config();
const { inquirerMenu, pausa, leerInput, listarLugares } = require("./helpers/inquirer");
const Searchs = require("./models/searchs");

const main = async() => {

    const searchs = new Searchs();
    let opt;

    do {

        opt = await inquirerMenu();
        
        switch (opt) {
            case 1:
                // Mostrar mensaje
                const inputPlace = await leerInput('Place: ');
                // Buscar los lugares
                const places = await searchs.city( inputPlace );
                // Seleccionar lugar
                const id = await listarLugares(places);
                if( id === '0' ) continue;
                const placeSelected = places.find( place => place.id === id );
                searchs.addHistory(placeSelected.name);
                // Clima
                const weather = await searchs.weatherPlace(placeSelected.lat, placeSelected.lng);
                
                // Mostrar resultados
                console.log('\nInformation about the city\n'.green);
                console.log('Ciudad:', placeSelected.name);
                console.log('Lat:', placeSelected.lat);
                console.log('Lng:', placeSelected.lng);
                console.log(`Temperature: ${weather.temp} °C`);
                console.log(`Minium: ${weather.min} °C`);
                console.log(`Maximum: ${weather.max} °C`);
                console.log('Description:', weather.desc);
            break;
            
            case 2:
                searchs.history.forEach( (place, index) => {
                    const idx = `${ index + 1}.`.green;
                    console.log(`${ idx } ${ place }`);
                })
            break;
            default:
                break;
        }

        if(opt !== 0) await pausa();

    } while (opt !== 0);

}

main();