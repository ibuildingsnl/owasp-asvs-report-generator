/**
 * @jsx React.DOM
 */
var React = require('react');
var ReportGenerator = require('./components/ReportGenerator.react.js');

React.renderComponent(
    <ReportGenerator />,
    document.body
);