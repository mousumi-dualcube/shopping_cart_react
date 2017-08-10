var React = require('react');

var ShopContainer = React.createClass({

	//used for route transition
	contextTypes: {
	  router: React.PropTypes.object.isRequired
	},
	
	render: function () {
	    return (
	      <shop/>
	    )
    }
});

module.exports = ShopContainer;