import React from 'react';
import {Weather} from './components/LandingComponent/weather.component'
import {Searcher} from './components/Searcher/Searcher';
import {FilterWeather} from './components/FilterWeather/FilterWeather'
import CardCountry from './components/CardCountry/CardCountry'
import 'weather-icons/css/weather-icons.css'
import Loader from './components/Loader'


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
            icon: ''
        },
        loading: false,
        error: false,
        filter: {
            condition: false,
            code: '',
            nameContinent: ''
        }

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
                    description: data.weather[0].description, 
                    icon: data.weather[0].icon 
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
                    description: data.weather[0].description,
                    icon: data.weather[0].icon
                }, 
                loading: false,
                error: false,
                filter: {
                    condition: false,
                    code: ''
                }
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

    handleClickButtonSort = (e) =>{
        this.setState({
            filter: {
                condition: true,
                code: e.target.name,
                nameContinent: e.target.id
            }
        })
    }

    render(){
        return(
            <>
                <Searcher handleChangeCity={this.handleChangeCity} handleChangeCountry={this.handleChangeCountry} handleSubmit={this.handleSubmit}/>
                <FilterWeather handleClickButtonSort={this.handleClickButtonSort} />              
                    {this.state.loading || this.state.error
                        ? this.state.loading ? <Loader /> : 'error 123213'
                        : this.state.filter.condition ? <CardCountry continentCode={this.state.filter.code} continentName={this.state.filter.nameContinent} /> : <Weather {...this.state.countryData} /> 
                    }
            </>
        )
    }
}


export default App;