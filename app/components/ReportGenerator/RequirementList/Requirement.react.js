/**
 * @jsx React.DOM
 */

var React = require('react');
ReactPropTypes = React.PropTypes;
var Fail = require('.//Requirement/Fail.react.js');
var NotApplicable = require('./Requirement/NotApplicable.react.js');
var Pass = require('./Requirement/Pass.react.js');

var Component = React.createClass({
    propTypes: {
        chapterNr: ReactPropTypes.string.isRequired,
        nr: ReactPropTypes.string.isRequired,
        shortTitle: ReactPropTypes.string.isRequired,
        title: ReactPropTypes.string.isRequired,
        help: ReactPropTypes.object
    },

    render: function() {
        return (
            <section>
                <header>
                    <h1>v{this.props.chapterNr}.{this.props.nr}. {this.props.shortTitle}</h1>
                </header>
                <p>{this.props.title}</p>

                <h2>General Help</h2>
                <p> Help! </p>

                <button>Fail</button>
                <button>N/A</button>
                <button>Pass</button>
                <Fail />
                <NotApplicable />
                <Pass />
            </section>
            );
    }
});

module.exports = Component;