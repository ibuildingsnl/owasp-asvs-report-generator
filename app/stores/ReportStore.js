var React = require('react');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');
var ReportAppDispatcher = require('../dispatcher/ReportAppDispatcher');

var _report = {
    name: "",
    versionDescription: "",
    level: 2,
    levelPlus: false,
    tovDescription: "",
    format: "text/x-markdown; charset=UTF-8",
    help: ["General", "Drupal 7"],
    requirements: [
        {
            chapterNr: 2,
            nr: 1,
            state: "PASS",
            passVerficationDescription: "",
            fail: {
                rating: 5,
                description: "",
                exploitable: false,
                exploitDescription: ""
            },
            naJustificationDescription: ""
        }
    ]
};

var ReportStore = merge(EventEmitter.prototype, {

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    get: function() {
        return _report;
    }
});

ReportStore.dispatchToken = ReportAppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.type) {



        default:
        // do nothing
    }

});

module.exports = ReportStore;