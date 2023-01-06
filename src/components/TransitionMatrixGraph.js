import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import {select} from "d3";

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

const TransitionMatrixGraph = ({}) => {
    
	const transitionGraph = useRef()
	const wrapperRef = useRef()
	const dimensions = useResizeObserver(wrapperRef)

	useEffect(()=>{
		const svg = select(transitionGraph.current)
		// Remove all previous elements
		svg.selectAll("*").remove();
		// Draw chart using the data and updated dimensions
		DrawGraph(dimensions)

	},[dimensions])

    const margin = {top: 50, right:30, bottom: 30, left:60}

    function DrawGraph(dimensions){

		if(!dimensions){
			return;
		}

        const chartwidth = dimensions.width;
        const chartheight = dimensions.height - margin.top - margin.bottom;

        console.log("------------")
        console.log(dimensions)
		console.log(chartwidth)
        console.log(chartheight)

        const svg = d3.select(transitionGraph.current)
            .attr('width', chartwidth + margin.left + margin.right)
            .attr('height', chartheight + margin.top + margin.bottom)

        svg.append('circle')
            .attr('cx', '50%')
            .attr('cy', '25%')
            .attr('r', 20)
            .style('fill', '#74EC11');

        svg.append('circle')
            .attr('cx', '25%')
            .attr('cy', '75%')
            .attr('r', 20)
            .style('fill', '#74EC11');

        svg.append('circle')
            .attr('cx', '75%')
            .attr('cy', '75%')
            .attr('r', 20)
            .style('fill', '#74EC11');
    }

	return (
		<div id='transitionMatrixGraph' style={transitionGraphDivStyle} ref={wrapperRef}>
		  <svg ref={transitionGraph}></svg>
		</div>
	)

}

const transitionGraphDivStyle = {
    backgroundColor: '#3F8C00', 
    border: '7px solid #8C002B',
    padding: '20px',
	margin: '15px',
	width: '100%'
}

export default TransitionMatrixGraph