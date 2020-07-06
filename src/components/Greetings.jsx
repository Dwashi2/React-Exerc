import React, { Component } from 'react'

export default class Greetings extends Component {
    state = {
        typee: this.props.typee,
        name: this.props.name
    }

    constructor(props) {
        super(props)
        this.setTypee = this.setTypee.bind(this)
       

       // this.state = {
       //     typee: this.props.typee,
        //    name: this.props.name
       // }
    }


    setTypee(e) {
        // let i = 1
        // setInterval(()=> {
        //     this.setState({ typee: ++i})
        // }, 1000)
        this.setState({ typee: e.target.value })
    }

    setName(e) {
        this.setState({ name: e.target.value })
    }

    render() {
        const { typee, name } = this.state
        return (
            <div>
                <h1>{typee} {name}!</h1>
                <hr></hr>
                <input type="text" placeholder="type..." value={typee} onChange={this.setTypee}></input>
                <input type="text" placeholder="name..." value={name} onChange={e => this.setName(e)}></input>
            </div>
        )
    }
}

//<input type="text" placeholder="type..." value={typee} onChange={e => this.setTypee(e)}></input>