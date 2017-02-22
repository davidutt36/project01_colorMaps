var bbox, radii, svg, target;

svg = d3.select('#Friday');
bbox = svg[0][0].getBoundingClientRect();

radii = [20, 60, 160, 240];

target = svg.append('g')
    .attr('transform', "translate(" + (bbox.width / 2) + "," + (bbox.height / 2) + ")");

target.selectAll('circle')
      .data(radii)
      .enter().append('circle')
      .attr('r', function(d) {return d;});
