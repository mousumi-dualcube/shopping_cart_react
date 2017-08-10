var React = require('react');
var Product = require('../components/product');

var ProductsList = React.createClass({
    render: function() {
        var products = this.props.data.map(function(product) {
            return (
              <li key={product.id}>
                <Product data={product} />
              </li>
            )
        });

        return (
          <ul className="clearfix">
            {products}
          </ul>
        );
    }
});
module.exports =  ProductsList;
