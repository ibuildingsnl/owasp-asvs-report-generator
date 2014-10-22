/**
 * @jsx React.DOM
 */

var http            = require('http');
var React           = require('react');
ReactPropTypes      = React.PropTypes;
var markdown        = require( "markdown" ).markdown;

var Fail            = require('.//Requirement/Fail.react.js');
var NotApplicable   = require('./Requirement/NotApplicable.react.js');
var Pass            = require('./Requirement/Pass.react.js');

var Component = React.createClass({
    propTypes: {
        chapterNr   : ReactPropTypes.string.isRequired,
        nr          : ReactPropTypes.string.isRequired,
        shortTitle  : ReactPropTypes.string.isRequired,
        title       : ReactPropTypes.string.isRequired,
        help        : ReactPropTypes.object
    },

    getInitialState: function() {
        return { help: "Loading..." };
    },

    componentDidMount: function() {
        var url = '/owasp-asvs/node_modules/owasp-aasvs/src/help/2/1/en/General.md';

        http.get({ path : url }, function (res) {
            var help = "";
            res.on('data', function (buf) {
                help += buf;
            }.bind(this));

            res.on('end', function () {
                this.setState({ "help": markdown.toHTML(help) });
            }.bind(this));
        }.bind(this));
    },


    render: function() {
        return (
            <section>
                <header>
                    <h1>v{this.props.chapterNr}.{this.props.nr}. {this.props.shortTitle}</h1>
                </header>
                <p>{this.props.title}</p>

                <h2>General Help</h2>
                <section className="general-help" dangerouslySetInnerHTML={{__html: this.state.help}} />

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