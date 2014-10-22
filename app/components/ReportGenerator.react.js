/**
 * @jsx React.DOM
 */

var React = require('react');
var Controls = require('./ReportGenerator/Controls.react.js');
var Report = require('./ReportGenerator/Report.react.js');
var RequirementList = require('./ReportGenerator/RequirementList.react.js');

var asvsData = require('owasp-asvs');
var aasvsData = require('owasp-aasvs');

var ReportGenerator = React.createClass({
    getInitialState: function() {
        var requirements = asvsData.requirements;

        for (var i= 0, len = requirements.length; i < len; i++) {
            if (!aasvsData.requirements[i]) {
                continue;
            }

            for (var attrName in aasvsData.requirements[i]) {
                if (requirements[i][attrName]) {
                    continue;
                }

                requirements[i][attrName] = aasvsData.requirements[i][attrName];
            }
        }

        return { "requirements": requirements };
    },

    render: function() {
        return (
                <div>
                    <Controls />
                    <Report />
                    <RequirementList requirements={this.state.requirements}  />
                </div>
            );
    }
});

module.exports = ReportGenerator;