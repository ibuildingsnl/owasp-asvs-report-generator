/**
 * @jsx React.DOM
 */

var React = require('react');

var Component = React.createClass({
    render: function() {
        return (
            <section>
                <p id="hello"></p>
                <form>
                    <fieldset>
                        <label>Name</label>
                        <input required />
                    </fieldset>
                    <fieldset>
                        <label>Version</label>
                        <input />
                    </fieldset>
                    <fieldset>
                        <label>Level</label>
                        <select>
                            <option>1</option>
                            <option selected="selected">2</option>
                            <option>3</option>
                        </select>
                        <input id="scope_plus" name="scope_plus" type="checkbox" />
                        <label htmlFor="scope_plus">+</label>
                        </fieldset>
                        <fieldset>
                            <label>Target Of Verification (TOV)</label>
                            <textarea></textarea>
                        </fieldset>
                        <fieldset>
                            <label>Format</label>
                            <select>
                                <option selected>Markdown</option>
                                <option>Confluence</option>
                            </select>
                        </fieldset>
                        <fieldset>
                            <label>Help</label>
                            <fieldset>
                                <input id="help_general" type="checkbox" checked="checked" />
                                <label htmlFor="help_general">General</label>
                                <input id="help_drupal_7" type="checkbox" />
                                <label htmlFor="help_drupal_7">Drupal 7</label>
                            </fieldset>
                        </fieldset>
                    </form>
                </section>
            );
    }
});

module.exports = Component;