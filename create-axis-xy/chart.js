// set the dimensions and margins of the graph
const margin = {
    top: 20,
    right: 20,
    bottom: 40,
    left: 60
},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// create svg element, respecting margins
const svg = d3.select("#my_axis")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Add X axis
const x = d3.scaleLinear().domain([0, 10]).range([0, width]);
svg.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(x));

// Add Y axis
const y = d3.scaleLinear().domain([0, 1]).range([ height, 0]);
svg.append("g").call(d3.axisLeft(y));

// Add X axis label:
svg.append("text")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height + margin.top + 20)
    .text("Number tested");

// Y axis label:
svg.append("text")
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left+20)
    .attr("x", -margin.top)
    .text("Probability")
