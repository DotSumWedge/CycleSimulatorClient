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
    color: '#3F8C00',
    backgroundColor: '#262623', 
    border: '15px solid #9D9D00',
    padding: '50px'
}

export default TransitionMatrixGraphPage