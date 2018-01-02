

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
