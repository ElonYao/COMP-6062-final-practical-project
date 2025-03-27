// This initalizes our Vue app
const app = Vue.createApp({
    data() {
        return {
            FirstName: '',
            LastName: '',
            Age: '',
            ProfilePhoto: '',
            city:'London',
            province:'Ontario',
            country:'Canada',
            temperature: '',
            wind: '',
            description: '',
       };
    },
    created() {
        this.fetchWeather();
    },
    computed: {
        fullName() {
            return `${this.FirstName} ${this.LastName}`;
        }

    },
    methods:{
        fetchData() {
            fetch('http://comp6062.liamstewart.ca/random-user-profile')
            .then(response => {
                if(response.ok) {
                    return response.json();
                } else {
                    console.log('Unknown error, please try again');
                }
            })
            .then(data => {
                this.FirstName = data.first_name;
                this.LastName = data.last_name;
                this.Age = data.age;
                this.ProfilePhoto = data.profile_picture;
            })
            .catch(error => {
                console.error('Error:', error);
        })
        },
        fetchWeather() {
            fetch('http://comp6062.liamstewart.ca/weather-information?city='+this.city+'&province='+this.province+'&country='+this.country)
            .then(response => {
                if(response.ok) {
                    return response.json();
                } else {
                    console.log('Unknown error, please try again');
                }
            })
            .then(weatherData => {
                this.temperature = weatherData.temperature;
                this.wind = weatherData.wind_speed;
                this.description = weatherData.weather_description;
            })
            .catch(error => {
                console.error('Error:', error);
        })
        }
    }
});
// this connects to the div with the id of app
app.mount('#app');
