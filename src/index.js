import React from 'react'
import ReactDOM from 'react-dom'


//need to be Uppercase
//import First from './components/first'
//import GM from './components/GoodMorning'
//import Good, { See} from './components/Mult'
//import Multi from './components/Mult'
import Father from './components/Father'
import Son from './components/Son'

import Greetings from './components/Greetings'


ReactDOM.render(
<div>
    <Father name="Palu" lastName="Silva">
        <Son name="Pedro" ></Son>
        <Son name="Carla AB"></Son>
        <Son name="Ant At"></Son>
    </Father>
</div>, document.getElementById('root'))
