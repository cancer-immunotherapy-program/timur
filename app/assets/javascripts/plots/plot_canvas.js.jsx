// Requires:
//   x = pixel coordinate for left edge
//   y = pixel coordinate for top edge
//   width = width of plot
//   height = height of plot

PlotCanvas = React.createClass({
  render: function() {
    return <g className="plot" 
            onWheel={ this.props.onWheel }
            transform={ 'translate(' + this.props.x + ',' + this.props.y + ')' }>
              <rect x="0" y="0" width={ this.props.width }
                height={ this.props.height }
                style={ { fill: 'white' } }/>
      {
        this.props.children
      }
    </g>
  }
});
