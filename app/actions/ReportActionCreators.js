var ReportAppDispatcher = require('../dispatcher/ReportAppDispatcher');
var ReportStore         = require('../stores/ReportStore');

var ActionTypes = ReportGeneratorConstants.ActionTypes;

module.exports = {

    updateName: function(text) {
//        ReportAppDispatcher.handleViewAction({
//            type: ActionTypes.CREATE_MESSAGE,
//            text: text
//        });
//        var message = MessageStore.getCreatedMessageData(text);
//        ReportGeneratorWebAPIUtils.createMessage(message);
    },

    updateVersion: function(text) {},

    updateLevel: function(levelNumber, plusChecked) {},

    updateTov: function(text) {},

    updateFormat: function(text) {},

    updateHelp: function(checked) {}
};