require("isomorphic-unfetch");
const { promises: fs } = require("fs");
const path = require("path");


async function main() {
    const readmeTemplate = (
        await fs.readFile(path.join(process.cwd(), "./README.template.md"))
    ).toString("utf-8");
    let quotes = [
        "Let them hate, just make sure they spell your name right.",
        "Anyone can do my job, but no one can be me.",
        "They think you care, they’ll walk all over you.",
        "You always have a choice.",
        "When you are backed against the wall, break the goddamn thing down.",
        "I don’t play the odds, I play the man.", 
        "I don’t have dreams, I have goals.", 
        "Winners don’t make excuses when the other side plays the game.", 
        "That’s the difference between you and me. You wanna lose small, I wanna win big.", 
        "It’s not bragging if it’s true.", 
        "Sorry, I can’t hear you over the sound of how awesome I am.", 
        "Win a no-win situation by rewriting the rules.", 
        "Sometimes good guys gotta do bad things to make the bad guys pay.", 
        "I'm not here for your absolution, I'm here for your redemption.", 
        "I don't see anyone else lining up to get your ass out of here.", 
        "I didn't ask you to explain the problem to me, I asked you to fix it for me.", 
        "No kicking. No biting. No rabbit punches.", 
        "Winners stick it out when the other side plays the game.", 
        "Take the drama down a notch, Juliet.", 
        "I don't have to overturn awards like that because I never lost one in the first place.", 
        "You don't send a puppy to clean up its own mess.", 
        "I appreciate a good single malt. I don't pretend I can make one.", 
        " I need you to babysit the client for a while. If she asks you any questions about the deal, nod your head and look pretty.", 
        "I'm emotionally vested in me.", 
        "I'm a boy scout. I like to be prepared.", 
        "First impressions last. Start behind the eight ball and you'll never get in front.", 
        
    ]
    // const office_quote = await (
    //     await fetch("https://officeapi.dev/api/quotes/random")
    // ).json();
    let office_quote = quotes[quotes.length * Math.random() | 0]

    console.log(office_quote);


    const readme = readmeTemplate
        // .replace("{office_quote}", office_quote.data.content)
        // .replace("{office_character}", `- ${office_quote.data.character.firstname} ${office_quote.data.character.lastname}`)
        .replace("{office_quote}", office_quote)
        .replace("{office_character}", `- Harvey Specter`)

    await fs.writeFile("README.md", readme);
}

main();