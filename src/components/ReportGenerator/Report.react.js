var React = require('react'),
    ReportStore = require('../../stores/ReportStore'),
    ReportActionCreators = require('../../actions/ReportActionCreators'),

    ENTER_KEY_CODE = 13,

    Report = React.createClass({
        getInitialState: function() {
            return ReportStore.get();
        },

        render: function() {
            return (
                <section>
                    <form>
                        <fieldset>
                            <label>Name</label>
                            <input required onChange={this._onChange} onKeyDown={this._onKeyDown} value={this.state.name} />
                        </fieldset>
                        <fieldset>
                            <label>Version</label>
                            <input value={this.state.version} />
                        </fieldset>
                        <fieldset>
                            <label>Level</label>
                            <select defaultValue={ this.state.level }>
                                <option value="1">Optimistic</option>
                                <option value="2">Standard</option>
                                <option value="3">Advanced</option>
                            </select>
                            <input id="scope_plus" name="scope_plus" type="checkbox" defaultChecked={ this.state.levelPlus } />
                            <label htmlFor="scope_plus">+</label>
                        </fieldset>
                        <fieldset>
                            <label>Target Of Verification (TOV)</label>
                            <textarea value={ this.state.tov } />
                        </fieldset>
                        <fieldset>
                            <label>Format</label>
                            <select>
                                <option defaultValue>Markdown</option>
                                <option>Confluence</option>
                            </select>
                        </fieldset>
                        <fieldset>
                            <label>Help</label>
                            <fieldset>
                                <input id="help_general" type="checkbox" defaultChecked />
                                <label htmlFor="help_general">General</label>
                                <input id="help_drupal_7" type="checkbox" />
                                <label htmlFor="help_drupal_7">Drupal 7</label>
                            </fieldset>
                        </fieldset>
                    </form>
                </section>
                );
        },

        _onChange: function(event, value) {
            this.setState({name: event.target.value});
        },

        _onKeyDown: function(event) {
            if (event.keyCode !== ENTER_KEY_CODE) {
                return;
            }

            event.preventDefault();

            var text = this.state.name.trim();
            if (text) {
                ReportActionCreators.updateName(text);
            }
            this.setState({name: ''});
        }
});

module.exports = Report;
