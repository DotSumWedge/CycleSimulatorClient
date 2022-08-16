import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import './ResponsiveBar.css';

const Chart = ({riders, riderStat}) => {

	//Todo: onhover of a rider show the rider card?

	const attributeBarChart = useRef()

	// Ref for updating dimention 
	const [dimensions, setDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight
	})

	// Ref for resize event update
	const update = useRef(false)

	useEffect(()=>{

		// Listen for any resize event update
		window.addEventListener('resize', ()=>{
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight
			})

			// If resize, remove the previous chart
			if(update.current){
				d3.selectAll('g').remove()
				d3.selectAll('text').remove()
			} else {update.current = true}
		})

		// Draw chart using the data and updated dimensions
		DrawChart(riders,dimensions)

	},[dimensions])

	const margin = {top: 50, right:30, bottom: 30, left:60}

	function DrawChart(data, dimensions){

		if(isNaN(data[0][riderStat]) || riderStat === "id"){
			return;
		}

		const chartwidth = parseInt(d3.select('#riderBarChart').style('width')) - margin.left - margin.right
		const chartheight = parseInt(d3.select('#riderBarChart').style('height')) - margin.top - margin.bottom

		console.log(chartwidth, chartheight)

		const svg = d3.select(attributeBarChart.current)
						.attr('width', chartwidth + margin.left + margin.right)
						.attr('height', chartheight + margin.top + margin.bottom)

		// x scale
		const x = d3.scaleBand()
					.domain(d3.range(data.length))
					.range([margin.left, chartwidth - margin.right])
					.padding(0.1)

		svg.append('g')
			.attr('transform', 'translate(0,'+ chartheight + ')')
			.style("font-size", "16px")
			.call(d3.axisBottom(x).tickFormat(i=>data[i].name).tickSizeOuter(0))

		const max = d3.max(data, function(d){return d[riderStat]})

		// y scale
		const y = d3.scaleLinear()
					.domain([0, max])
					.range([chartheight, margin.top])

		svg.append('g')
			.attr('transform', 'translate(' + margin.left + ',0)')
			.call(d3.axisLeft(y))

		// Draw bars
		svg.append('g')
			.attr('fill','#65f0eb')
			.selectAll('rect')
			.data(data)
			.join('rect')
				.attr('x', (d,i) => x(i))
				.attr('y', d => y(d[riderStat]))
				.attr('height', d=>y(0)-y(d[riderStat]))
				.attr('width', x.bandwidth())
		
		svg.append("text")
			.attr("x", (chartwidth / 2))             
			.attr("y", (margin.top / 2))
			.attr("text-anchor", "middle")  
			.style("font-size", "25px")
			.style("fill", "#ffffff")
			.style("text-decoration", "underline")
			.text("Rider Attribute: " + riderStat);
	}

	return (
		<div id='riderBarChart' style={barChartDivStyle}>
		  <svg ref={attributeBarChart}></svg>
		</div>
	)
}

const barChartDivStyle = {
    backgroundColor: '#0d1e54', 
    color: '#ffffff',
    border: '7px solid #630c01',
    padding: '20px',
	margin: '15px',
	width: '1700px'
}

export default Chart