var React = require('react'),

    NotApplicable = React.createClass({
        render: function() {
            return (
                    <form>
                        <h1>Not Applicable</h1>

                        <label>Justification:</label>
                        <textarea></textarea>
                    </form>
                );
        }
});

module.exports = NotApplicable;
