class Person{
    constructor(name, games, sympathy) {
        this.name = name;
        this.games = games;
        this.sympathy = sympathy;
        this.id = `${name.replaceAll(" ", "").toLowerCase()}`;

        this.score = this.calculateScore();
        this.currentRank = 0;

        this.link = null;
    }

    calculateScore() {
        let totalPoints = 0;
        this.games.forEach(game => {
            totalPoints += points(this.name, game.p2, game.quantity);
        });
        totalPoints += this.sympathy;
        return totalPoints;
    }
}


function points(name, p2, quantity){
    let currentPoints = 0
    if (quantity == 1) {
        if (name === "Ira D") {
            currentPoints = 3;
        } else {
            currentPoints = 4;
        }
    } else if (quantity == 2) {
        if (name === "Ira D") {
            currentPoints = 6;
        } else {
            currentPoints = 7;
        }
    }else {
        if (name === "Ira D") {
            currentPoints = (6 + (2*(quantity-2)));

        } else {
            currentPoints = (7 + (2*(quantity-2)));
        }
    }
    if (p2 == "Ira D"){
        currentPoints += quantity;
    }
    return currentPoints;
    }




// ALEX 
const alexGames = [
    {p2: "Andrew H", type: "d", quantity: 1},
    {p2: "Chris B", type: "s", quantity: 1},
    {p2: "David G", type: "d", quantity: 1},
    {p2: "Eddie H", type: "d", quantity: 1},
    {p2: "Eric P", type: "d", quantity: 1},
    {p2: "Ira D", type: "d", quantity: 1},
    {p2: "Jon N", type: "d", quantity: 1},
    {p2: "Mikey B", type: "d", quantity: 1},
    {p2: "Mikey B", type: "s", quantity: 2}
]
const alexSympathy = 0;


// AMY
const amyGames = [
    {p2: "Steve M", type: "d", quantity: 1}
]
const amySympathy = 2;


// ANDREW
const andrewGames= [
    {p2: "Alex G", type: "d", quantity: 1},
    {p2: "Eric P", type: "d", quantity: 2},
    {p2: "Katherine F", type: "d", quantity: 1},
    {p2: "Mikey B", type: "d", quantity: 1},
]
const andrewSympathy = 0;


// BRAD
const bradGames = [
    {p2: "Eric P", type: "d", quantity: 1},
    {p2: "Sid S", type: "d", quantity: 1}
    
]
const bradSympathy = 3;



const brandonGames = [
   {p2: "David F", type: "d", quantity: 1},
   {p2: "Eddie H", type: "s", quantity: 1},
   {p2: "Eric P", type: "d", quantity: 1},
   {p2: "Jodi H", type: "d", quantity: 1},
   {p2: "Scott U", type: "d", quantity: 1}
]
const brandonSympathy = 2;


const chrisGames = [
   {p2: "Derek J", type: "d", quantity: 1},
   {p2: "Eric D", type: "d", quantity: 1},
   {p2: "Eric P", type: "d", quantity: 1},
   {p2: "Jody H", type: "d", quantity: 1},
   {p2: "Scott U", type: "d", quantity: 1}
];
const chrisSympathy = 2;



const davidFGames = [
   {p2: "Brandon Y", type: "d", quantity: 1},
   {p2: "Eric P", type: "d", quantity: 1}
]
const davidFSympathy = 2;



const davidGGames = [
   {p2: "Eric D", type: "d", quantity: 1},
   {p2: "Eric P", type: "d", quantity: 1},
   {p2: "Jodi H", type: "d", quantity: 1}
]
const davidGSympathy = 3;


const derekGames = [
   {p2: "Alex G", type: "d", quantity: 1},
   {p2: "Chris B", type: "d", quantity: 1},
   {p2: "Eric P", type: "s", quantity: 1},
   {p2: "Katherine F", type: "d", quantity: 1},
   {p2: "Mikey B", type: "s", quantity: 1},
];
const derekSympathy = 2;



const ericDGames = [
   {p2: "Chris B", type: "d", quantity: 1},
   {p2: "Eric P", type: "d", quantity: 1},
   {p2: "Jodi H", type: "d", quantity: 1},
   {p2: "Mikey B", type: "d", quantity: 3}
];
const ericDSympathy= 0;



const eddieGames = [
   {p2: "Alex G", type: "d", quantity: 1},
   {p2: "Chris B", type: "d", quantity: 1},
   {p2: "David G", type: "d", quantity: 1},
   {p2: "Eric P", type: "d", quantity: 1},
   {p2: "Ira D", type: "d", quantity: 2},
   {p2: "Jon N", type: "d", quantity: 1},
   {p2: "Steve M", type: "d", quantity: 1}

];
const eddieSympathy = 2;


const ericPGames = [
   {p2: "Alex G", type: "d", quantity: 1},
   {p2: "Andrew H", type: "d", quantity: 2},
   {p2: "Brad J", type: "d", quantity: 1},
   {p2: "Brandon Y", type: "d", quantity: 1},
   {p2: "David F", type: "d", quantity: 1},
   {p2: "David G", type: "d", quantity: 1},
   {p2: "Eric D", type: "d", quantity: 1},
   {p2: "Eddie H", type: "d", quantity: 1},
   {p2: "Jana C", type: "d", quantity: 1},
   {p2: "Jon N", type: "d", quantity: 1},
   {p2: "Katherine F", type: "d", quantity: 1},
   {p2: "Sid S", type: "d", quantity: 2},
];
const ericPSympathy= 0;


const iraGames = [
   {p2: "Alex G", type: "d", quantity: 1},
   {p2: "Eric D", type: "d", quantity: 1},
   {p2: "Eddie H", type: "d", quantity: 2},
   {p2: "Roxy N", type: "d", quantity: 1},
   {p2: "Sid S", type: "d", quantity: 1},

];
const iraSympathy = 3;


const janaGames = [
   {p2: "Eric P", type: "d", quantity: 1},

];
const janaSympathy= 0;


const jodiGames = [
   {p2: "Brandon Y", type: "d", quantity: 1},
   {p2: "Chris B", type: "d", quantity: 1},
   {p2: "David G", type: "d", quantity: 1},
   {p2: "Eric D", type: "d", quantity: 1},
   {p2: "Eric P", type: "d", quantity: 1},

];
const jodiSympathy = 0;


const jonGames = [
   {p2: "Alex G", type: "d", quantity: 1},
   {p2: "Eddie H", type: "d", quantity: 1},

];
const jonSympathy = 0;


const johnGames = [
];
const johnSympathy = 2;


const katherineGames = [
   {p2: "Andrew H", type: "d", quantity: 1},
   {p2: "Chris B", type: "d", quantity: 1},
   {p2: "Derek J", type: "d", quantity: 1},
   {p2: "Eric P", type: "d", quantity: 1},
   {p2: "Mikey B", type: "d", quantity: 1},

]
const katherineSympathy = 3;


const mikeyGames = [
   {p2: "Alex G", type: "d", quantity: 1},
   {p2: "Andrew H", type: "d", quantity: 1},
   {p2: "David F", type: "s", quantity: 2},
   {p2: "Eric D", type: "d", quantity: 3},
   {p2: "Katherine F", type: "d", quantity: 1},
   {p2: "Sid S", type: "d", quantity: 3},
]
const mikeySympathy = 1;


const roxyGames = [ 
   {p2: "Ira D", type: "d", quantity: 1},
]
const roxySympathy = 0;


const scottGames = [
   {p2: "Brandon Y", type: "d", quantity: 1},

];
const scottSympathy = 1;


const sidGames = [
   {p2: "Brad J", type: "d", quantity: 1},
   {p2: "Chris B", type: "d", quantity: 1},
   {p2: "Derek J", type: "d", quantity: 1},
   {p2: "Eric P", type: "d", quantity: 2},
   {p2: "Ira D", type: "d", quantity: 1},
   {p2: "Mikey B", type: "d", quantity: 3},
];
const sidSympathy = 0;


const steveGames = [
   {p2: "Amy L", type: "d", quantity: 1},
   {p2: "Eddie H", type: "d", quantity: 1},
];
const steveSympathy = 0;






// PEOPLE
const alex = new Person("Alex G", alexGames, alexSympathy);
const amy = new Person("Amy L", amyGames, amySympathy);
const andrew = new Person("Andrew H", andrewGames, andrewSympathy);
const brad = new Person("Brad J", bradGames, bradSympathy);
const brandon = new Person("Brandon Y", brandonGames, brandonSympathy);
const chris = new Person("Chris B", chrisGames, chrisSympathy);
const davidF = new Person("David F", davidFGames, davidFSympathy);
const davidG = new Person("David G", davidGGames, davidGSympathy);
const derek = new Person("Derek J", derekGames, derekSympathy);
const ericD = new Person("Eric D", ericDGames, ericDSympathy);
const eddie = new Person("Eddie H", eddieGames, eddieSympathy);
const ericP = new Person("Eric P", ericPGames, ericPSympathy);
const ira = new Person("Ira D", iraGames, iraSympathy);
const jana = new Person("Jana C", janaGames, janaSympathy);
const jodi = new Person("Jodi H", jodiGames, jodiSympathy);
const jon = new Person("Jon N", jonGames, jonSympathy);
const john = new Person("John R", johnGames, johnSympathy);
const katherine = new Person("Katherine F", katherineGames, katherineSympathy);
const mikey = new Person("Mikey B", mikeyGames, mikeySympathy);
const roxy = new Person("Roxy N", roxyGames, roxySympathy);
const scott = new Person("Scott U", scottGames, scottSympathy);
const sid = new Person("Sid S", sidGames, sidSympathy);
const steve = new Person("Steve M", steveGames, steveSympathy);


// PEOPLE LIST
const playerList = [alex, amy, andrew, brad, brandon, chris, davidF, davidG, derek, ericD, eddie, ericP, ira, jana, jodi, jon, john, katherine, mikey, roxy, scott, sid, steve];
playerList.sort((a,b) => b.score - a.score);
playerList.forEach((player, index) => {
    player.currentRank = index + 1;
})


let selectedPlayerLink = null;


const ranking = document.getElementById("ranking_HTML");
const details = document.getElementById("playerDetails");


playerList.forEach(player => {
    const li = document.createElement("li");
    const link = document.createElement("a");

    link.id = player.id;
    link.href = "#";
    link.textContent = `${player.name} (${player.score} points)`;

    player.link = link;


    li.appendChild(link);
    ranking.appendChild(li);

    
    link.addEventListener("click", (e) => {
        e.preventDefault(); 

        if (selectedPlayerLink) {
            selectedPlayerLink.classList.remove("playerSelected");
        }

        playerList.forEach(p => 
            p.link.classList.remove("p2Singles", "p2Doubles")
        );


        link.classList.add("playerSelected");
        selectedPlayerLink = link;

        player.games.forEach(game => {
            const p2Player = playerList.find(p => p.name === game.p2);
            if (!p2Player) return;

            if (game.type === "s") {
                p2Player.link.classList.add("p2Singles");
            } else {
                p2Player.link.classList.add("p2Doubles");
            }
        })

        showPlayerDetails(player);

    });

});

function showPlayerDetails(player) {
    details.style.display = "block";
    let gamePointsTotal = 0;
    details.innerHTML = `
        <h2>${player.name}</h2>

        <p><strong>Games:</strong></p>
        <ul>
            ${player.games.map(game => {
                const gameText = game.type === "d" 
                    ? `Doubles with <span class="playerNameDoubles">${game.p2}</span>` 
                    : `Singles against ${game.p2}`;

                const gamePoints = points(
                    player.name,
                    game.p2,
                    game.quantity
                );

                gamePointsTotal += gamePoints;
                return `<li>${gameText} (x${game.quantity})
                 — <em>${gamePoints} pts</em> 
                 </li>`;
            }).join("")}
            
        </ul>

        <p><strong>Points Earned From Games:</strong> ${gamePointsTotal}</p>
        <p><strong>Sympathy Points:</strong> ${player.sympathy}</p>
        <p><strong>Overall Total Points:</strong> ${gamePointsTotal + player.sympathy}</p>
        <p><strong>Current Rank:</strong> ${player.currentRank}</p>
    `;
}
