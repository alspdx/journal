(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


function Entry(title, body) {
  this.title = title;
  this.body = body;
}


Entry.prototype.vowels = function() {
  var vowels = new RegExp(/[aeiou]/, 'i');
  var contentVowels = [];
  var contentArray = this.body.split("");
  contentArray.map(function(letter) {
    if (vowels.test(letter)) {
      contentVowels.push(letter);
    };
  });
  return contentVowels.length;
};

Entry.prototype.consonants = function() {
  var consonants = /[b-df-hj-np-tv-z]+/i;
  var contentConsonants = [];
  var contentArray = this.body.split("");
  contentArray.map(function(letter) {
    if (consonants.test(letter)) {
      contentConsonants.push(letter);
    };
  });
  return contentConsonants.length;
};

Entry.prototype.wordCount = function() {
  var words = this.body.split(" ");
  return words.length;
};


Entry.prototype.getTeaser = function(){
  var period = new RegExp(/[.!?]/);
  var space = new RegExp(/\s/);
  var contentArray = this.body.split("");
  var teaserArray = [];
  var j = 0;
  for (i = 0; i < contentArray.length && j < 8; i++) {
    if (!period.test(contentArray[i])) {
      if (space.test(contentArray[i])) {
        j++
      };
      teaserArray.push(contentArray[i]);
    } else if (period.test(contentArray[i])) {
      teaserArray.push(contentArray[i]);
      break;
    };
  };

  return teaserArray.join("");
};




exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
var Entry = require('./../js/entry.js').entryModule;

var journalEntry = [];

$(document).ready(function(){
  $("#entry-form").submit(function(event){
    event.preventDefault();

    var journalEntryTitle = $('#entryTitle').val();
    var journalEntryBody = $('#entryBody').val();
    var newEntry = new Entry(journalEntryTitle, journalEntryBody);

    $('#entry-output').append('<div class="journal-entry">' +
                                '<div class="entry-title">' + newEntry.title + '</div>' +
                                '<div class="entry-body">' + newEntry.body + '</div>' +
                                '<div class="word-count">This entry has ' + newEntry.wordCount() + ' words.</div>' +
                                '<div class="vowel-count">This entry has ' + newEntry.vowels() + ' vowels.</div>' +
                                '<div class="consonant-count">This entry has ' + newEntry.consonants() + ' consonants.</div>' +
                                '<div class="teaser">' + newEntry.getTeaser() + '</div> <br>' +
                              '</div>'
                            );
  });
});

},{"./../js/entry.js":1}]},{},[2]);
