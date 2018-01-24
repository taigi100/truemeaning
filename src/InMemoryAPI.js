const dictionary = [
  {
    word: 'agnostic',
    meanings: [{
      year: 1200,
      meaning: 'Knowing God through not knowing'
    },
    {
      year: 2000,
      meaning: 'That sect which does not go for any belief'
    }
    ]
  },
  {
    word: 'naughty',
    meanings: [{
      year: 1500,
      meaning: 'Empy, bad'
    },
    {
      year: 2005,
      meaning: 'Sexual naught'
    }
    ]
  }
]

var api = function (word) {
  for (var entry of dictionary) {
    if (entry.word === word) {
      return entry
    }
  }
}

export default api
