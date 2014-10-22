var keyMirror = require('react/lib/keyMirror');

module.exports = {

    ActionTypes: keyMirror({
        UPDATE_NAME: null,
        UPDATE_VERSION: null,
        UPDATE_LEVEL: null,
        UPDATE_TOV: null,
        UPDATE_FORMAT: null,
        RESET: null,
        CHANGE_LANGUAGE: null,
        DOWNLOAD: null,
        REQUIREMENT_FAIL: null,
        REQUIREMENT_NA: null,
        REQUIREMENT_PASS: null,
        REQUIREMENT_FAIL_RATE: null,
        REQUIREMENT_FAIL_DESCRIBE: null,
        REQUIREMENT_FAIL_USE_TEMPLATE: null,
        REQUIREMENT_FAIL_EXPLOIT: null,


        CLICK_THREAD: null,
        CREATE_MESSAGE: null,
        RECEIVE_RAW_CREATED_MESSAGE: null,
        RECEIVE_RAW_MESSAGES: null
    }),

    PayloadSources: keyMirror({
        VIEW_ACTION: null
    })
};