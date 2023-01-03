import React, { useState } from 'react'
import Graph from '../components/TransitionMatrixGraph';

function TransitionMatrixGraphPage(){
    return(
        <div style={TransitionMatrixGraphPageStyle}>
            <Graph></Graph>
        </div>
    )
}

const TransitionMatrixGraphPageStyle = {
    color: 'red',
    backgroundColor: '#262623', 
    border: '15px solid #630c01',
    padding: '50px'
}

export default TransitionMatrixGraphPage