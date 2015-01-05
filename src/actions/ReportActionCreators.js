var ReportAppDispatcher      = require('../dispatcher/ReportAppDispatcher'),
    ReportStore              = require('../stores/ReportStore'),
    ReportGeneratorConstants = require('../constants/ReportGeneratorConstants');

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
