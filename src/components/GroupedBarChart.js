import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const margin = {top: 50, right:30, bottom: 30, left:60}

const Chart = ({riders, riderStat}) => {

  const attributeGroupedBarChart = useRef()
  const update = useRef(false)

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(()=>{
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      // Draw chart using the data and updated dimensions
      DrawChart(riders)
    }
  })

  // Listen for any resize event update
  window.addEventListener('resize', ()=>{
    // If resize, remove the previous chart
    handleResize()
    if(update.current){
      d3.select(attributeGroupedBarChart.current)
    } else {update.current = true}
  })

  handleResize();

  return () => window.removeEventListener("resize", handleResize);

  function DrawChart(data){
    console.log("===============")
    console.log(data)
    console.log(data[0])
    console.log(riderStat)
    console.log("===============")

    const chartwidth = parseInt(d3.select('#riderGroupedBarChart').style('width')) - margin.left - margin.right
    const chartheight = parseInt(d3.select('#riderGroupedBarChart').style('height')) - margin.top - margin.bottom  

    const svg = d3.select(attributeGroupedBarChart.current)
      .attr('width', 1500)
      .attr('height', 650)

    const x = d3.scaleBand()
      .domain(d3.range(data.length))
      .range([margin.left, chartwidth - margin.right])
      .padding(0.1)

    svg.append('g')
			.attr('transform', 'translate(0,'+ chartheight + ')')
			.style("font-size", "16px")
			.call(d3.axisBottom(x).tickFormat(i=>data[i].name).tickSizeOuter(0))

    // Text for Header
    svg.append("text")
      .attr("x", (750))             
      .attr("y", (325))
      .attr("text-anchor", "middle")  
      .style("font-size", "25px") 
      .style("text-decoration", "underline")
      .text("Rider Attribute: " + riderStat);

    // Bar
    svg.append("g")
      .attr('fill','#65f0eb')
      .selectAll('rect')
      .data(data)
      .join('rect')
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