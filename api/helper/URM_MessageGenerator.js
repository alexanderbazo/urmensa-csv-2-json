/*eslint-env node */
"use strict";

var URMMessageGenerator = function() {

  function getErrorMessage(msg, data) {
    var result = {
      status: "error",
      msg: msg,
    };
    if (typeof(data) !== undefined) {
      result.data = data;
    }
    return result;
  }

  function getMessage(msg, data) {
    var result = {
      status: "information",
      msg: msg,
    };
    if (typeof(data) !== undefined) {
      result.data = data;
    }
    return result;
  }

  return {
    getMessage: getMessage,
    getErrorMessage: getErrorMessage,
  };
};

exports.MessageGenerator = URMMessageGenerator;