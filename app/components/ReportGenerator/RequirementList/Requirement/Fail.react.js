/**
 * @jsx React.DOM
 */

var React = require('react');

var Component = React.createClass({
    render: function() {
        return (
                <form>
                    <h1>Fail</h1>
                    <label>Rating</label>
                    <select><option>1</option><option>10</option></select>
                    <label>Description</label>
                    <textarea></textarea>
                    <label> Description Template</label>
                    <select><option>Utter and complete failure</option></select>
                    <input type="checkbox" />
                    <label>Exploitable</label>
                    <label>Exploit</label>
                    <textarea></textarea>
                </form>
            );
    }
});

module.exports = Component;