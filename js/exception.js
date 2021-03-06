/*
 * decaffeinate suggestions:
 * DS208: Avoid top-level this
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
(function() {
  exports.TextOnlyTweetException = function() {
    this.errorHappendAt = new Date();
    this.message = 'Text Only';
  };

  exports.UrlException = function() {
    this.errorHappendAt = new Date();
    this.message = 'URL is Exception';
  };

  exports.NGUserException = function() {
    this.errorHappendAt = new Date();
    this.message = 'Contained NG user';
  };

  exports.NGTagException = function() {
    this.errorHappendAt = new Date();
    this.message = 'Contained NG tag';
  };

  exports.isUnofficialRTException = function() {
    this.errorHappendAt = new Date();
    this.message = 'Unofficial RT is excluded';
  };

  exports.NoTextTweetException = function() {
    this.errorHappendAt = new Date();
    this.message = 'No Text Tweet';
  };

  exports.NoHashtagsTweetException = function() {
    this.errorHappendAt = new Date();
    this.message = 'No HashTags';
  };

  exports.doneRetweetException = function() {
    this.errorHappendAt = new Date();
    this.message = 'done retweet';
  };
}.call(this));
