var photos = {
  ruby: {
      desc: 'Wyncode Workshop',
      image: 'http://68.media.tumblr.com/d93b8a4f6509ca49f26359464381063c/tumblr_ourbmw8Fw91qz7ur9o1_1280.jpg',
      cat: 'coding'
  },

  ubuntu: {
      desc: 'Ubuntu Setup',
      image: 'https://68.media.tumblr.com/a3b53c16f75cd9912bbfa2fa77312df9/tumblr_oqqkduUrGA1qz7ur9o1_540.jpg',
      cat: 'coding'
  },

  wordcamp: {
      desc: 'Wordcamp Miami',
      image: 'https://68.media.tumblr.com/df1c1a84a06bc5bd536324365796c421/tumblr_oqqkduUrGA1qz7ur9o2_540.jpg',
      cat: 'coding'

  },

  webdev: {
     desc: 'Webdev Class',
     image: 'http://68.media.tumblr.com/44135b2999959d30ee7ddb8196d01ab0/tumblr_oie5odPDhZ1qz7ur9o1_540.jpg',
     cat: 'coding'
  },

  homecomp: {
     desc: 'Coding at Home',
     image: 'http://66.media.tumblr.com/4a096d78507ad9616c947ff35e449b17/tumblr_obza4vDzSq1qz7ur9o2_540.jpg',
     cat: 'coding'
  },

  google: {
     desc: 'Google Analytics',
     image: 'https://66.media.tumblr.com/048db88744dcc7f30127ae3ccae3ce66/tumblr_obzbaq5C0Z1qz7ur9o1_540.jpg', 
     cat: 'digital marketing'
  }

}

var grid = '';
var listPix = Object.keys(photos);
// console.log(listPix);
listPix.map(key => grid += '<div class="picbox"><figure><img src=' + photos[key].image + ' class="profile medium"><figcaption>' + photos[key].desc + '</figcaption></figure></div>')

document.getElementById('root').innerHTML = grid;
