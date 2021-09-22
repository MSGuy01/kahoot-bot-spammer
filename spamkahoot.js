const Kahoot = require("kahoot.js-updated");
const sleep = require("system-sleep");

// main vars

const kahootBotNumberSeperator = ' #';

// end main vars
const prompt = require('prompt-sync')();
 
const numberOfBots = prompt('Enter number of bots: ');15
const kahootCode = prompt('Enter game code: ');7437490
const kahootBotPrefix = prompt('Enter bot name: ');Mikki

for (var i = 0; i < numberOfBots; i++) {
    console.log('joining bot ' + i + '/' + numberOfBots);
    let client = new Kahoot;
    client.setMaxListeners(Number.POSITIVE_INFINITY);
    client.join(kahootCode, kahootBotPrefix + kahootBotNumberSeperator + i);
    client.on("QuestionStart", question => {
        console.log('choosing the first answer..');
        question.answer(Math.floor(Math.random() * 4));
        console.log('---------------------------');
    });
    console.log('joined bot ' + i + '/' + numberOfBots);
    sleep(250);
}
