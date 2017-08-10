var React = require('react');
var ReactDOM = require('react-dom');
var ProductsList = require('./products-list');
var productCollection = require('../utils/products.json');
console.log(productCollection);
var Shop = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
					  <h1>Best shop ever</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
					  <h3>Products</h3>
					  <div id="products-list" className="products-list">
					  	<ProductsList data={productCollection} />
					  </div>
					</div>
				</div>
		    </div>
		);
	}
});

module.exports =  Shop;