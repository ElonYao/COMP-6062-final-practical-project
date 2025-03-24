// This initalizes our Vue app
const app = Vue.createApp({
    data() {
        return {
            FirstName: 'Y',
            LastName: 'y',
            Age: '10',
            ProfilePhoto: '',
       };
    },
    computed: {
        fullName() {
            return `${this.FirstName} ${this.LastName}`;
        }

    },
    methods:{
        fetchData() {
            fetch('http://comp6062.liamstewart.ca/random-user-profile/')
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
                console.log('error');
            })
        }
    }
});
// this connects to the div with the id of app
app.mount('#app');
