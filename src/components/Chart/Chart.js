import * as React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import * as d3 from 'd3';
import * as d3group from 'd3-array';
import { line as d3Line } from 'd3-shape';

const ChartWrapper = styled.div`
  margin: 5rem;
`;

export class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.drawChart = this.drawChart.bind(this);
  }

  componentDidUpdate() {
    this.drawChart();
  }

  drawChart = () => {
    const node = this.node;
    let data = this.props.data;

    var margin = { top: 20, right: 20, bottom: 30, left: 40 };

    var width = this.props.width - margin.left - margin.right,
      height = this.props.height - margin.top - margin.bottom;

    const svg = d3.select('svg');

    document.body.style.margin = '0px';

    var dat = d3
      .nest()
      .key(function(d) {
        return d.name;
      })
      .object(this.props.commits);

    var seriesNames = Object.keys(dat);

    var series = seriesNames.map(function(name) {
      return dat[name].map(function(d) {
        return { x: d.commitDate, y: d.count };
      });
    });

    var x = d3
      .scaleTime() // interpolator for X axis -- inner plot region
      .range([0, width]);

    var y = d3
      .scaleLinear() // interpolator for Y axis -- inner plot region
      .range([height, 0]);

    var z = d3
      .scaleOrdinal()
      .domain(series)
      .range(d3.schemeCategory10);

    x.domain(
      d3.extent(d3.merge(series), function(d) {
        return d.x;
      })
    );
    y.domain([
      0,
      d3.max(d3.merge(series), function(d) {
        return d.y;
      })
    ]).nice();

    var xAxis = d3
      .axisBottom(x)
      .scale(x)
      .ticks(10);

    var yAxis = d3
      .axisLeft(y)
      .scale(y)
      .ticks(3);

    var g = svg
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    g.append('g') // render the Y axis in the inner plot area
      .attr('class', 'y axis')
      .call(yAxis);

    g.append('g') // render the X axis in the inner plot area
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')') // axis runs along lower part of graph
      .call(xAxis);

    g.append('text') // outer x-axis label
      .attr('class', 'x label')
      .attr('text-anchor', 'middle')
      .attr('x', width / 2)
      .attr('y', height + (2 * margin.bottom) / 3 + 6)
      .attr('color', '#342343')
      .style('fill', 'darkGrey')
      .style('font-size', '14px')
      .text('Date');

    g.append('text') // plot title
      .attr('class', 'x label')
      .attr('text-anchor', 'middle')
      .attr('x', width / 2)
      .attr('y', -margin.top / 2)
      .attr('dy', '+.75em')
      .text('Commits by Date');

    g.append('text') // outer y-axis label
      .attr('class', 'x label')
      .attr('text-anchor', 'middle')
      .attr('x', -height / 2)
      .attr('y', -6 - margin.left / 3)
      .attr('dy', '-.75em')
      .attr('transform', 'rotate(-90)')
      .text('Commits');

    // Add the points!
    svg
      .selectAll('.series')
      .data(series)
      .enter()
      .append('g')
      .attr('class', 'series')
      .style('fill', function(d, i) {
        return z(i);
      })
      .selectAll('.point')
      .data(function(d) {
        return d;
      })
      .enter()
      .append('circle')
      .attr('class', 'point')
      .attr('r', 6)
      .attr('cx', function(d) {
        return x(d.x) + margin.left;
      })
      .attr('cy', function(d) {
        return y(d.y) + margin.top;
      });
  };

  render() {
    return (
      <ChartWrapper>
        <div>
          <svg
            ref={node => (this.node = node)}
            height={this.props.height}
            width={this.props.width}
          >
            {this.drawChart()}
          </svg>
        </div>
      </ChartWrapper>
    );
  }
}

export default Chart;
