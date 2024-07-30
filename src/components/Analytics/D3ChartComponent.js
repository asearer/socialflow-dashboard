import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './D3ChartComponent.css'; 

const D3ChartComponent = () => {
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current)
            .attr('width', 600) // Adjusted width for a smaller chart
            .attr('height', 400); // Adjusted height for a smaller chart

        // Example D3 chart code (simple bar chart)
        const data = [30, 80, 45, 60, 20];
        const barWidth = 20; // Adjusted width of bars
        const margin = 10; // Adjusted margin between bars
        const chartHeight = 200; // Same as SVG height

        svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', (d, i) => i * (barWidth + margin))
            .attr('y', d => chartHeight - d)
            .attr('width', barWidth)
            .attr('height', d => d)
            .attr('fill', 'steelblue');

        svg.selectAll('text')
            .data(data)
            .enter()
            .append('text')
            .attr('x', (d, i) => i * (barWidth + margin) + barWidth / 2)
            .attr('y', d => chartHeight - d - 5) // Adjusted to fit better
            .attr('text-anchor', 'middle')
            .attr('font-size', '12px') // Adjust font size for smaller text
            .text(d => d);
    }, []);

    return <svg ref={svgRef}></svg>;
};

export default D3ChartComponent;



