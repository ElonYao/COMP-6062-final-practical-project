// This initalizes our Vue app
const app = Vue.createApp({
    data() {
        return {
            firstName: '',
            lastName: '',
            age: '',
            profilePhoto: '',
            city:'London',
            province:'Ontario',
            country:'Canada',
            temperature: '',
            wind: '',
            description: '',
            word:'',
            phonetic:'',
            definition:'llll'
       };
    },
    mounted() {
        this.fetchData();
        this.fetchWeather();
    },
    computed: {
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        }

    },
    methods:{
        fetchData() {
            fetch('http://comp6062.liamstewart.ca/random-user-profile')
            .then(response => {
                if(!response.ok) {
                    throw new Error('Unknown error, please try again');
                    
                } 
                return response.json();
            })
            .then(data => {
                this.firstName = data.first_name;
                this.lastName = data.last_name;
                this.age = data.age;
                this.profilePhoto = data.profile_picture;
            })
            .catch(error => {
                console.error('Error:', error);
        })
        },
        fetchWeather() {
            fetch('http://comp6062.liamstewart.ca/weather-information?city='+this.city+'&province='+this.province+'&country='+this.country)
            .then(response => {
                if(!response.ok) {
                    throw new Error('Unknown error, please try again');
                        
                } 
                return response.json();
            })
            .then(weatherData => {
                this.temperature = weatherData.temperature;
                this.wind = weatherData.wind_speed;
                this.description = weatherData.weather_description;
            })
            .catch(error => {
                console.error('Error:', error);
        })
        },
        fetchDefinition() {
            console.log("Fetching definition for:", this.word);
            fetch('https://comp6062.liamstewart.ca/define?word='+this.word)
            .then(response => {
                if(!response.ok) {
                    throw new Error('Unknown error, please try again');
                } 
                return response.json();
            })
            .then(definitionData => {
                console.log("API Response:", definitionData); 
                this.definition = definitionData.definition;
                //this.phonetic = definitionData.phonetic;    
            })
            .catch(error => {
                console.error('Error:', error);
        })
        }
    }
});
// this connects to the div with the id of app
app.mount('#app');
