var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var FireBase = require('firebase');
var rootUrl = 'https://resplendent-inferno-4387.firebaseio.com/';

var Hello = React.createClass({
  mixins: [ReactFire],
  componentWillMount: function() {
    this.bindAsObject(new FireBase(rootUrl + 'items/'), 'items');
  },
  render: function() {
    console.log(this.state);
    return <h1 className="red">
      Hello WORLD!
    </h1>
  }
});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
