import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const Chart = ({riders, riderStat}) => {

    const attributeGroupedBarChart = useRef()

    const update = useRef(false)

    useEffect(()=>{

		// Listen for any resize event update
		window.addEventListener('resize', ()=>{
			// If resize, remove the previous chart
			if(update.current){
				d3.select(attributeGroupedBarChart.current)
			} else {update.current = true}
		})

		// Draw chart using the data and updated dimensions
		DrawChart()

	})

    function DrawChart(){
        const svg = d3.select(attributeGroupedBarChart.current)
            .attr('width', 1500)
            .attr('height', 650)

        svg.append("text")
            .attr("x", (750))             
            .attr("y", (325))
            .attr("text-anchor", "middle")  
            .style("font-size", "25px") 
            .style("text-decoration", "underline")
            .text("Rider Attribute: Hill");
    }

    return (
		<div id='riderGroupedBarChart' style={groupedBarChartDivStyle}>
		  <svg ref={attributeGroupedBarChart}></svg>
		</div>
	)
}

const groupedBarChartDivStyle = {
    backgroundColor: 'grey', 
    color: 'blue',
    border: '7px solid gold',
    padding: '20px',
	margin: '15px',
	width: '1700px'
}

export default Chart