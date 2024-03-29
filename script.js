// Gather today's date
const d = new Date();

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let day = days[d.getDay()];
let month = months[d.getMonth()];


// Generate & return random message 
const messages = ['An exciting opportunity lies ahead of you.', 'A journey of a thousand miles begins with a single step.', 'Sing everyday and chase the blues away.', 'You will receive money from an unexpected source.', 'Experience is the best teacher.', 'Once you make a decision the universe conspires to make it happen.', 'There is no remedy for love but to love more. - Thoreau', 'If it weren\'t for the mistakes I\'ve made, I wouldn\'t be where I am today. – Unknown'];

const message = arr => {
    let num = Math.floor(Math.random() * messages.length);
    return arr[num];
}

// Generate & return random ASCII face
const faces = ['✧♡(◕‿◕✿)', '♥(ˆ⌣ˆԅ)', '(• ε •)', '┌( ಠ_ಠ)┘', '(•̀ᴗ•́)و ̑̑', '╰( ⁰ ਊ ⁰ )━☆ﾟ.*･｡ﾟ', '\ (•◡•) /'];

const face = arr => {
    let num = Math.floor(Math.random() * faces.length);
    return arr[num];
}

// Print final message to console
const getFinalOutput = () => {
    console.log(`Today is ${day}, ${month} ${d.getDate()}, ${d.getFullYear()}`);
    console.log(message(messages));
    console.log(face(faces));
}
getFinalOutput();

// Print message in HTML body
document.getElementById('message1').innerHTML = `Today is ${day}, ${month} ${d.getDate()}, ${d.getFullYear()}`;
document.getElementById('message2').innerHTML = message(messages);
document.getElementById('message3').innerHTML = face(faces);