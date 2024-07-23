//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(num) {
        this.scores.push(num);
    }

    average() {
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        return Math.round(sum / this.scores.length * 10) / 10;
    } 

    status() {
        let stat = "Rejected";
        if (this.average() >= 90) {
            stat = "Accepted";
        } else if (this.average() < 90 && this.average() >= 80) {
            stat = "Reserved";
        } else if (this.average() < 80 && this.average() >= 70) {
            stat = "Probationary";
        }
        return stat;
    }
}

let bear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let maltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

console.log(bear);
console.log(maltese);
console.log(gator);

bear.addScore(83);

console.log(bear.scores);
console.log(maltese.average());


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
console.log(`${bear.name} earned an average test score of ${bear.average()} and has a status of ${bear.status()}.`);
console.log(`${maltese.name} earned an average test score of ${maltese.average()} and has a status of ${maltese.status()}.`);
console.log(`${gator.name} earned an average test score of ${gator.average()} and has a status of ${gator.status()}.`);


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let counter = 0;
while (gator.status() != "Reserved") {
    gator.addScore(100);
    counter ++;
}

console.log(gator.status())
console.log(counter);

counter = 0;
while (gator.status() != "Accepted") {
    gator.addScore(100);
    counter ++;
}

console.log(gator.status())
console.log(counter);

