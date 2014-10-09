/**
 * @jsx React.DOM
 */

var React = require('react');

var Component = React.createClass({
    render: function() {
        return (
            <form>
                <h1>Pass</h1>

                <label>Verified:</label>
                <textarea></textarea>
            </form>
            );
    }
});

module.exports = Component;