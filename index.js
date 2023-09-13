

//const urlBacon = "https://baconipsum.com/api/?type=all-meat";
const urlBacon = "https://jsonplaceholder.typicode.com/todos/1";
(function(){$.ajax({
    method: "GET",
    url: urlBacon,
    dataType: "json"
})
    .done(function (data) {
        console.log(data);
    })
    .fail(function () {
        alert("no good");
    });
})()

//Get all users

var url = 'https://jsonplaceholder.typicode.com/todos';
var xhr1 = new XMLHttpRequest()
xhr1.open('GET', url, true)
xhr1.onload = function () {
    var users = JSON.parse(xhr1.responseText);
    if (xhr1.readyState == 4 && xhr1.status == "200") { 
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr1.send(null);

// // Post a user
        var url = 'https://my-json-server.typicode.com/typicode/demo/posts';    
        var data = {};
        data.firstname = "John";
        data.lastname = "Snow";
        var json = JSON.stringify(data);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = function () {
            var users1 = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == "201") {
                console.table(users1);
            } else {
                console.error(users1);
            }
        }
        xhr.send(json);

// Update 
var url = 'https://fakestoreapi.com/products';

var json2 = JSON.stringify({
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
});

var xhr2 = new XMLHttpRequest();
xhr2.open("PUT", url + '/7', true);
xhr2.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr2.onload = function () {
    var product = JSON.parse(xhr2.responseText);
    // if (xhr2.readyState == 4 && xhr2.status == "200") {
    //     console.table(product);
    // } else {
    //     console.error(product);
    // }
    console.log(product)
}
xhr2.send(json2);


// Data Structures, Modern Operators and Strings

// Coding Challenge #2
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [i, player] of game.scored.entries()) {
  console.log(` Goal ${i + 1} : ${player}`);
}

const odds = Object.values(game.odds);
let avg = 0;
for (const odd of odds) {
  avg += odd;
}
avg /= odds.length;
console.log(avg);

for (const [team, odd] of Object.entries(game.odds)) {
  const str = team === 'x' ? 'draw' : `${game[team]} win `;
  console.log(`${str} with ${odd}`);
}


