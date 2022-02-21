const fs = require('fs');

const axios = require('axios');

class Searchs {

    history = [];
    dbPath = './db/database.json';

    constructor() {
        this.leerDB();
    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'en'
        }
    }
    capitalizarHistorial() {
        
        this.history = this.history.map( data => {
            let array = data.split(' ');
             array = array.map( word => `${ word.charAt(0).toUpperCase()}${word.slice(1,word.length)}` );
             return array.join(' ');
        }); 

    }

    descapitalizarHistorial() {
        this.history = this.history.map( value => value.toLowerCase());
    }
    paramsOpenWeather(lat, lon, appid) {
        return {
            lat,
            lon,
            appid,
            'units': 'metric',
            'lang': 'en'
        }
    }
    async city(place = '') {

        try {
            // Petition HTTP
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ place }.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();

            // return the cities
            return resp.data.features.map( place => ({
                id: place.id,
                name: place.place_name,
                lng: place.center[0], 
                lat: place.center[1]
            }));

        } catch (error) {
            return [];
        }

    }

    async weatherPlace( lat, lon ) {

        try {
            
            // instance axios.create()
            const instance = axios.create({
                baseURL: 'https://api.openweathermap.org/data/2.5/weather',
                params: this.paramsOpenWeather(lat, lon, process.env.OPENWEATHER_KEY)
            });
            // respuesta.data
            const resp = await instance.get();

            return {
                desc: resp.data.weather[0].description,
                min: resp.data.main.temp_min,
                max: resp.data.main.temp_max,
                temp: resp.data.main.temp
            }   
            
        } catch (error) {
            console.log(error);
        }
    }

    addHistory( place = '' ) {

        // TODO: prevenir duplicados

        if( this.history.includes( place.toLocaleLowerCase() )) return;
        this.history.unshift( place.toLocaleLowerCase() );

        // Grabar en DB
        this.guardarDB();
    }   

    guardarDB() {
        this.descapitalizarHistorial();
        fs.writeFileSync(this.dbPath, JSON.stringify(this.history));
    }

    leerDB() {
        if( !fs.existsSync(this.dbPath)) return;
        
        const info = fs.readFileSync(this.dbPath, {encoding: 'UTF-8'})

        const data = JSON.parse(info);
        this.history = data;
        this.capitalizarHistorial();
    }
}

module.exports = Searchs;