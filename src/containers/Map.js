import React from 'react';


const ISS_URL = "https://api.wheretheiss.at/v1/satellites/25544"
const MAP_KEY = process.env.REACT_APP_MAP_KEY
const img = <img src = "./iss.svg" alt = "iss" height = "30px"/>

const SpaceStation = ({ img }) => <div>{img}</div>


class Map extends React.Component{
    state = {
        center: {
            lat: 0,
            lng: 0
        },
        zoom: 1
    }

    componentDidMount(){
        this.getCoordinates()
        this.interval = setInterval(this.getCoordinates, 3000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    getCoordinates = () => {
        fetch(ISS_URL)
            .then(res => res.json())
            .then(data => this.setState({
                center: {
                    lat: data.latitude,
                    lng: data.longitude
                }
            }))
    }

    render(){
        console.log("LAT:", this.state.center.lat)
        console.log("LNG:", this.state.center.lng)
        return(
            <div>
                <p>Latitude: {this.state.center.lat}</p>
                <p>Longitude: {this.state.center.lng}</p>
                            </div>
        )
    }
}

export default Map;