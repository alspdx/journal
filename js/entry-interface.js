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
