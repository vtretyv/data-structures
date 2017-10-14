
var wordList = ['cat', 'Dog', 'person', 'fox', 'Jackson', 'Vlad', 'HR', 'a few words long', 'some other string', 'sandwhich', 'guacamole', 
            'rabblerabblerabble', 'stringies', 'boots', 'safjkhajhdhfk', 'sdkjfakhjsdfjha', 'bnbhgnbhgythgyth', 'aaaaaaaaaaaaaaa',
            'anotha one', 'stuff', 'babababababab', 'Q'];
            
var otherWordList = ['some', 'other', 'words', 'for', 'checking', 'against'];

var falsePositiveCount = 0;
var trials = 10000;

for (var i = 0; i < trials; i++) {
  var words = [];
  words[0] = wordList[Math.floor(Math.random() * wordList.length)];
  words[1] = wordList[Math.floor(Math.random() * wordList.length)];
  words[2] = wordList[Math.floor(Math.random() * wordList.length)];
  words[3] = otherWordList[Math.floor(Math.random() * otherWordList.length)];
  
  var bf = new BloomFilter(18);
  bf.add(words[0]);
  bf.add(words[1]);
  bf.add(words[2]);
  falsePositiveCount += Number(bf.contains(words[3]));
  
}

console.log('False posiitves rate:' + falsePositiveCount / 10000);

console.log('Expected false positives:' + Math.pow((1 - Math.exp(-3 * 3 / 18)), 3)); // (1- e^(-kn/m))^k


