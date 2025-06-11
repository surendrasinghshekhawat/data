const statsData = {
    "2025": {
        orangeCap: [
            { player: "Virat Kohli", runs: 732 },
            { player: "Shubman Gill", runs: 695 },
            { player: "Ruturaj Gaikwad", runs: 670 },
            { player: "Jos Buttler", runs: 660 },
            { player: "David Warner", runs: 645 },
            { player: "Faf du Plessis", runs: 635 },
            { player: "KL Rahul", runs: 620 },
            { player: "Suryakumar Yadav", runs: 610 },
            { player: "Rinku Singh", runs: 590 },
            { player: "Sanju Samson", runs: 580 }
        ],
        mostFours: [
            { player: "Shubman Gill", fours: 88 },
            { player: "Virat Kohli", fours: 85 },
            { player: "Ruturaj Gaikwad", fours: 80 },
            { player: "KL Rahul", fours: 76 },
            { player: "David Warner", fours: 74 },
            { player: "Faf du Plessis", fours: 72 },
            { player: "Yashasvi Jaiswal", fours: 70 },
            { player: "Sanju Samson", fours: 68 },
            { player: "Rinku Singh", fours: 65 },
            { player: "Ishan Kishan", fours: 62 }
        ],
        mostSixes: [
            { player: "Rinku Singh", sixes: 45 },
            { player: "Jos Buttler", sixes: 44 },
            { player: "Faf du Plessis", sixes: 42 },
            { player: "Suryakumar Yadav", sixes: 41 },
            { player: "MS Dhoni", sixes: 39 },
            { player: "Glenn Maxwell", sixes: 38 },
            { player: "Andre Russell", sixes: 37 },
            { player: "Hardik Pandya", sixes: 36 },
            { player: "Rahul Tewatia", sixes: 35 },
            { player: "Ruturaj Gaikwad", sixes: 34 }
        ],
        mostCenturies: [
            { player: "Shubman Gill", centuries: 3 },
            { player: "Virat Kohli", centuries: 2 },
            { player: "Jos Buttler", centuries: 2 },
            { player: "Yashasvi Jaiswal", centuries: 1 },
            { player: "KL Rahul", centuries: 1 },
            { player: "Ruturaj Gaikwad", centuries: 1 },
            { player: "Suryakumar Yadav", centuries: 1 },
            { player: "Faf du Plessis", centuries: 1 },
            { player: "David Warner", centuries: 1 },
            { player: "Rinku Singh", centuries: 1 }
        ],
        mostFifties: [
            { player: "Virat Kohli", fifties: 6 },
            { player: "Ruturaj Gaikwad", fifties: 6 },
            { player: "Shubman Gill", fifties: 5 },
            { player: "KL Rahul", fifties: 5 },
            { player: "David Warner", fifties: 5 },
            { player: "Sanju Samson", fifties: 4 },
            { player: "Faf du Plessis", fifties: 4 },
            { player: "Yashasvi Jaiswal", fifties: 4 },
            { player: "Rinku Singh", fifties: 4 },
            { player: "Ishan Kishan", fifties: 4 }
        ]
    }
};
const buttons = document.querySelectorAll(".button");
const outputDiv = document.getElementById("output");

buttons.forEach(function (button) {
    button.addEventListener("click",  ()=> {
        // Remove "active" class from all buttons
        buttons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Add "active" class to the clicked button
        button.classList.add("active");

        // Get data-type value
        const type = button.getAttribute("data-type");
        // console.log(type);
        
        const data = statsData["2025"][type];

        // Clear old content
        outputDiv.innerHTML  = "";


        // Create heading and line
        const heading = document.createElement("h3");
        
        heading.innerHTML = button.innerHTML;
        // console.log(heading);
        
        outputDiv.append(heading);
        
        // outputDiv.appendChild(document.createElement("hr"));

        // Display player stats
        data.forEach(function (item, index ) {
            console.log(item);
            
            
            const statName = Object.keys(item).find(key => key !== "player");
            // console.log(statName);
            
            const statValue = item[statName];
            console.log(statValue);
            

            const p = document.createElement("p");
            p.innerText = (index + 1) + "." + item.player + " - " + statValue;
            outputDiv.appendChild(p);

        });
    });
});
