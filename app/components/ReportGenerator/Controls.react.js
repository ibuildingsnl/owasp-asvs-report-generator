/**
 * @jsx React.DOM
 */

var React = require('react');

var Controls = React.createClass({
    render: function() {
        return (
            <header>
                <select>
                    <option>English</option>
                    <option>Français</option>
                    <option>Nederlands</option>
                </select>
                <button>Reset</button>
                <button>Download</button>
            </header>
            );
    }
});

module.exports = Controls;