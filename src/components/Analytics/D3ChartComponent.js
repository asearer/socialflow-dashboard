import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { fetchAnalyticsData } from './analyticsApi'; // Import the function to fetch data
import './D3ChartComponent.css'; 

const D3ChartComponent = ({ timeframe }) => {
    const svgRef = useRef();
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchAnalyticsData(timeframe);
                console.log('Fetched Data:', result); // Debugging line
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error); // Error handling
            }
        };
        getData();
    }, [timeframe]);

    useEffect(() => {
        if (data.length === 0) return;

        const svg = d3.select(svgRef.current)
            .attr('width', 600) // Adjusted width for a smaller chart
            .attr('height', 400); // Adjusted height for a smaller chart

        const barWidth = 60; // Adjusted width of bars for visibility
        const margin = 20; // Adjusted margin between bars
        const chartHeight = 300; // Adjusted height for the chart

        // Clear previous content
        svg.selectAll('*').remove();

        // Set the x and y scales
        const xScale = d3.scaleBand()
            .domain(data.map(d => d.label))
            .range([0, 600])
            .padding(0.1);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)])
            .nice() // Round the domain to nice values
            .range([chartHeight, 0]);

        // Create bars
        svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', d => xScale(d.label))
            .attr('y', d => yScale(d.value))
            .attr('width', xScale.bandwidth())
            .attr('height', d => chartHeight - yScale(d.value))
            .attr('fill', 'steelblue');

        // Add text labels
        svg.selectAll('text')
            .data(data)
            .enter()
            .append('text')
            .attr('x', d => xScale(d.label) + xScale.bandwidth() / 2)
            .attr('y', d => yScale(d.value) - 5) // Adjusted to fit better
            .attr('text-anchor', 'middle')
            .attr('font-size', '12px') // Adjust font size for smaller text
            .text(d => d.value);

        // Add x-axis
        svg.append('g')
            .attr('transform', `translate(0,${chartHeight})`)
            .call(d3.axisBottom(xScale));

        // Add y-axis
        svg.append('g')
            .call(d3.axisLeft(yScale));

    }, [data]);

    return <svg ref={svgRef}></svg>;
};

export default D3ChartComponent;





