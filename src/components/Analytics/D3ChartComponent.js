// D3ChartComponent.js
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './D3ChartComponent.css'; 

const D3ChartComponent = ({ data, chartType }) => {
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current)
            .attr('width', 600)
            .attr('height', 400);

        svg.selectAll('*').remove(); // Clear previous content

        const margin = { top: 20, right: 30, bottom: 40, left: 40 };
        const width = svg.attr('width') - margin.left - margin.right;
        const height = svg.attr('height') - margin.top - margin.bottom;

        const xScale = d3.scaleBand()
            .domain(data.map(d => d.label))
            .range([0, width])
            .padding(0.1);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)])
            .nice()
            .range([height, 0]);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        if (chartType === 'bar') {
            g.selectAll('.bar')
                .data(data)
                .enter().append('rect')
                .attr('class', 'bar')
                .attr('x', d => xScale(d.label))
                .attr('y', d => yScale(d.value))
                .attr('width', xScale.bandwidth())
                .attr('height', d => height - yScale(d.value))
                .attr('fill', 'steelblue');

            g.selectAll('.text')
                .data(data)
                .enter().append('text')
                .attr('x', d => xScale(d.label) + xScale.bandwidth() / 2)
                .attr('y', d => yScale(d.value) - 5)
                .attr('text-anchor', 'middle')
                .text(d => d.value);
        } else if (chartType === 'line') {
            const line = d3.line()
                .x(d => xScale(d.label) + xScale.bandwidth() / 2)
                .y(d => yScale(d.value));

            g.append('path')
                .data([data])
                .attr('class', 'line')
                .attr('d', line)
                .attr('fill', 'none')
                .attr('stroke', 'steelblue')
                .attr('stroke-width', 2);

            g.selectAll('.dot')
                .data(data)
                .enter().append('circle')
                .attr('class', 'dot')
                .attr('cx', d => xScale(d.label) + xScale.bandwidth() / 2)
                .attr('cy', d => yScale(d.value))
                .attr('r', 5)
                .attr('fill', 'steelblue');
        }

        // X axis
        g.append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(xScale));

        // Y axis
        g.append('g')
            .attr('class', 'y-axis')
            .call(d3.axisLeft(yScale));
    }, [data, chartType]);

    return <svg ref={svgRef}></svg>;
};

export default D3ChartComponent;






