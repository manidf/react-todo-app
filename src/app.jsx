var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var FireBase = require('firebase');
var Header = require('./header');
var List = require('./list');
var rootUrl = 'https://resplendent-inferno-4387.firebaseio.com/';

var App = React.createClass({
  mixins: [ReactFire],
  getInitialState: function() {
    return {
      items: {}
    }
  },
  componentWillMount: function() {
    this.bindAsObject(new FireBase(rootUrl + 'items/'), 'items');
  },
  render: function() {
    //console.log(this.state);
    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          To-Do List
        </h2>
        <Header itemStore={this.firebaseRefs.items} />
        <List items={this.state.items} />
      </div>
    </div>
  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
