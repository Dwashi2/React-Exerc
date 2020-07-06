import React from 'react'

import {childrenWithProps  } from '../components/utils/utils'

export default props =>
    <div>
        <h1>
            {props.name}
            {props.lastName}
            <h2>
                Son
        </h2>
            <ul>
                {
                 childrenWithProps(props)   
                }
            </ul>
        </h1>
    </div>