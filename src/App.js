// create your App component here
import React, { Component } from 'react'

class App extends Component {

    constructor() {
        super()
        this.state = {
            astronauts: []
        }
    }
    //or just do: state = {
        //astronauts: []
    //}

    componentDidMount() {
        const url = 'http://api.open-notify.org/astros.json'
        fetch(url)
            .then( resp => resp.json() )
            .then( json => {
                this.setState({
                    astronauts: json.people
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.astronauts.map((personObj, id) => <h1 key={id}> {personObj.name }</h1>)}
            </div>
        )
    }

}

export default App