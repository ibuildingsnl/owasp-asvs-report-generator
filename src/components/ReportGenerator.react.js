var React = require('react'),
    Controls = require('./ReportGenerator/Controls.react.js'),
    Report = require('./ReportGenerator/Report.react.js'),
    RequirementList = require('./ReportGenerator/RequirementList.react.js'),

    asvsData = require('owasp-asvs'),
    aasvsData = require('owasp-aasvs'),

    ReportGenerator = React.createClass({
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
