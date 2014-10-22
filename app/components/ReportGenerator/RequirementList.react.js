/**
 * @jsx React.DOM
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var Requirement = require('./RequirementList/Requirement.react.js');

var Component = React.createClass({
    propTypes: {
        requirements: ReactPropTypes.array.isRequired
    },

    render: function() {
        var requirements = this.props.requirements;
        var requirementElements = [];

        var requirement;
        for (var key in requirements) {
            requirement = requirements[key];
            requirementElements.push(
                <Requirement key={key}
                             chapterNr={requirement.chapterNr}
                             nr={requirement.nr}
                             shortTitle={requirement.shortTitle['en']}
                             title={requirement.title['en']} />
            );
        }

        return (
            <section className="requirement">
                {requirementElements}
            </section>
            );
    }
});

module.exports = Component;