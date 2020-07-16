import React from 'react'
import {Weather} from './components/LandingComponent/weather.component'
import {Searcher} from './components/Searcher/Searcher'
import 'weather-icons/css/weather-icons.css'

//api.openweathermap.org/data/2.5/weather?q=
const API_key = "1650a6d758f7faf28488e5c529dcf0c4";

class App extends React.Component {

    state = {
        countryToSearch: {
            cityName: 'London',
            countryShortCode: 'uk'
        }, 
        countryData: {
            city: '',
            country: '',
            temp: '',
            temp_min: '',
            temp_max: '',
            description: '',
        },
        loading: false,
        error: false

    }
    
    componentDidMount(){
        this.setState({
            loading: true,
            error: false
        })
        const api_call = fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_key}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                countryData: {
                    city: data.name,
                    country: data.sys.country,
                    temp: this.calCelsius(data.main.temp),
                    temp_min: this.calCelsius(data.main.temp_min),
                    temp_max: this.calCelsius(data.main.temp_max),
                    description: data.weather[0].description 
                }, 
                loading: false,
                error: false 
            })
            
        })
        .catch(e => {
            console.log(e)
            this.setState({
                loading: false,
                error: true
            })
        })

    }

    calCelsius(temp){
        let cell = Math.floor(temp - 273.15);
        return cell
    }

    handleSubmit = (e) => {
        this.setState({loading: true, error: false})
        const fetchData = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.countryToSearch.cityName},${this.state.countryToSearch.countryShortCode}&appid=${API_key}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                countryData: {
                    city: data.name,
                    country: data.sys.country,
                    temp: this.calCelsius(data.main.temp),
                    temp_min: this.calCelsius(data.main.temp_min),
                    temp_max: this.calCelsius(data.main.temp_max),
                    description: data.weather[0].description
                }, 
                loading: false,
                error: false
            })
            
        })
        .catch(err => {
            console.log(err)
            this.setState({error: true, loading: false})
        })
        
    }

    handleChangeCity = (e) => {
        this.setState({
            ...this.state,
            countryToSearch:{
                ...this.state.countryToSearch,
                cityName: e.target.value
            }
            
        })

    }
    handleChangeCountry = (e) => {
        this.setState({
            ...this.state,
            countryToSearch:{
                ...this.state.countryToSearch,
                countryShortCode: e.target.value
            }
            
        })

    }
    
    render(){
        return(
            <>
                <Searcher handleChangeCity={this.handleChangeCity} handleChangeCountry={this.handleChangeCountry} handleSubmit={this.handleSubmit}/>
                {this.state.loading || this.state.error
                    ? this.state.loading ? 'loading...' : 'error 123213'
                    : <Weather {...this.state.countryData} />
                }
            </>
        )
    }
}


export default App;