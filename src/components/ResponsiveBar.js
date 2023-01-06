import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import {select} from "d3";
import './ResponsiveBar.css';

//https://www.tutorialsteacher.com/d3js/animated-bar-chart-d3


/*
	https://reactjs.org/docs/react-api.html
	Practice using hooks:

		useState
		useEffect
		useContext

	Numerics == numeric data
	Factors == how many of each type of non-numeric data (ie name, degree, country, color)
	Rows of data == observations
*/

const useResizeObserver = ref => {

	// Ref for updating dimention 
	const [dimensions, setDimensions] = useState(null)
	useEffect(() => {
		const observeTarget = ref.current;
		const resizeObserver = new ResizeObserver(entries =>{
			entries.forEach(entry => {
				setDimensions(entry.contentRect)
			})
		})
		resizeObserver.observe(observeTarget);
		return () => {
			resizeObserver.unobserve(observeTarget);
		}
	}, [ref])
	return dimensions;
}

const Chart = ({riders, riderStat}) => {

	//Todo: onhover of a rider show the rider card?

	const attributeBarChart = useRef()
	const wrapperRef = useRef()
	const dimensions = useResizeObserver(wrapperRef)

	useEffect(()=>{
		const svg = select(attributeBarChart.current)
		// Remove all previous elements
		svg.selectAll("*").remove();
		// Draw chart using the data and updated dimensions
		DrawChart(riders, dimensions)

	},[riders, dimensions])

	const margin = {top: 50, right:30, bottom: 30, left:60}

	function DrawChart(data, dimensions){

		if(isNaN(data[0][riderStat]) || riderStat === "id"){
			return;
		}
		if(!dimensions){
			return;
		}

		console.log("------------")
		console.log(dimensions)
		// console.log(data)
		// console.log(riderStat)
		// console.log(data[0][riderStat])

		const chartwidth = dimensions.width;
		const chartheight = dimensions.height - margin.top - margin.bottom;
		// const chartwidth = parseInt(d3.select('#riderBarChart').style('width')) - margin.left - margin.right
		// const chartheight = parseInt(d3.select('#riderBarChart').style('height')) - margin.top - margin.bottom

		//console.log(chartwidth, chartheight)

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
			.attr('fill','#5BCA00')
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
			.style("fill", "#FFFF12")
			.style("text-decoration", "underline")
			.text("Rider Attribute: " + riderStat);
	}

	return (
		<div id='riderBarChart' style={barChartDivStyle} ref={wrapperRef}>
		  <svg ref={attributeBarChart}></svg>
		</div>
	)
}

const barChartDivStyle = {
    backgroundColor: '#3F8C00', 
    color: '#FFFF12',
    border: '7px solid #8C002B',
    padding: '20px',
	margin: '15px',
	width: '100%'
}

export default Chart