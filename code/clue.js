// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:
let suspects = [{
        nickname: 'mrGreen',
        firstName: 'Jacob',
        lastName: 'Green',
        color: 'green',
        description: 'He has a lot of connections.',
        age: 45,
        image: 'assets/green.png',
        occupation: 'Priest',
        favouriteWeapon: 'knife'
    },
    {
        nickname: 'professorPlum',
        firstName: 'Victor',
        lastName: 'Plum',
        color: 'purple',
        description: 'He is very smart.',
        age: 55,
        image: 'assets/plum.png',
        occupation: 'Professor',
        favouriteWeapon: 'dumbbell'
    },
    {
        nickname: 'missScarlet',
        firstName: 'Cassandra',
        lastName: 'Scarlet',
        color: 'red',
        description: 'She is very charming.',
        age: 29,
        image: 'assets/scarlet.png',
        occupation: 'Actress',
        favouriteWeapon: 'candlestick'
    },
    {
        nickname: 'mrsPeacock',
        firstName: 'Eleonore',
        lastName: 'Peacock',
        color: 'blue',
        description: 'She is very likable.',
        age: 62,
        image: 'assets/peacock.png',
        occupation: 'Housewife',
        favouriteWeapon: 'poison'
    },
    {
        nickname: 'colonelMustard',
        firstName: 'Jack',
        lastName: 'Mustard',
        color: 'yellow',
        description: 'He is very cunning.',
        age: 52,
        image: 'assets/mustard.png',
        occupation: 'Military',
        favouriteWeapon: 'dumbbell'
    },
    {
        nickname: 'mrsWhite',
        firstName: 'Mary',
        lastName: 'White',
        color: 'white',
        description: 'She has a very good memory.',
        age: 39,
        image: 'assets/white.png',
        occupation: 'Nurse',
        favouriteWeapon: 'trophy'
    }
];




// CREATE OBJECTS FOR ALL THE favouriteWeaponS, ADD MORE CHARACTERISTICS TO THE favouriteWeaponS IF YOU LIKE.
const weapons = [{
        name: 'rope',
        weight: 7,
        color: 'brown',
        image: 'assets/rope.jpg'
    },
    {
        name: 'knife',
        weight: 11,
        color: 'black',
        image: 'assets/knife.png'
    },
    {
        name: 'candlestick',
        weight: 3,
        color: 'orange',
        image: 'assets/candlestick.jpg'
    },
    {
        name: 'dumbbell',
        weight: 12,
        color: 'gold',
        image: 'assets/dumbbel.jpg'
    },
    {
        name: 'poison',
        weight: 2,
        color: 'pink',
        image: 'assets/poison.jpg'
    },
    {
        name: 'axe',
        weight: 11,
        color: 'yellow',
        image: 'assets/axe.png'
    },
    {
        name: 'bat',
        weight: 9,
        color: 'purple',
        image: 'assets/bat.jpg'
    },
    {
        name: 'trophy',
        weight: 6,
        color: 'green',
        image: 'assets/trophy.jpg'
    },
    {
        name: 'pistol',
        weight: 12,
        color: 'brown',
        image: 'assets/pistol.jpg'
    }
];



// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.
const rooms = ["Dining Room", "Conservatory", "Kitchen", "Study", "Library", "Billiard Room", "Lounge", "Ballroom",
    "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"
];

let weaponArray = [
    'rope',
    'knife',
    'candlestick',
    'dumbbell',
    'poison',
    'axe',
    'bat',
    'trophy',
    'pistol'
];


const shufflefavouriteWeapons = (arrayOfSuspects) => {
    arrayOfSuspects.forEach(suspect => {
        suspect.weapon = weaponArray[Math.floor(Math.random() * 9)];

    })
};

shufflefavouriteWeapons(suspects);

console.log(suspects);

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
    return array[Math.floor(Math.random() * array.length)]
}


// An object with a killer, a favouriteWeapon and a room. The values will be set later.
let mystery = {
    killer: '',
    weapon: '',
    room: ''
}


// This function will be invoked when you click on the killer card.
const pickKiller = () => {
    // Randomly selects a killer from the suspects-array and adds that to the mystery object.
    mystery.killer = randomSelector(suspects);
    // This will change the background color of the card and show picture and detail about the suspect.
    document.getElementById('killerCard').style.background = mystery.killer.color;
    document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
    document.getElementById('killerImage').src = mystery.killer.image;
    document.getElementById('killerAge').innerHTML = `${mystery.killer.age} years old`;
    document.getElementById('killerDescription').innerHTML = mystery.killer.description;
    document.getElementById('killerOccupation').innerHTML = `Occupation: ${mystery.killer.occupation}`;
}

// This function will be invoked when you click on the favouriteWeapon card. 
const pickWeapon = () => {
    // Randomly selects a favouriteWeapon from the favouriteWeapons-array and adds that to the mystery object.
    mystery.weapon = randomSelector(weapons);
    document.getElementById('weaponCard').style.background = mystery.weapon.color
    document.getElementById('weaponName').innerHTML = mystery.weapon.name;
    document.getElementById('weaponWeight').innerHTML = `Weight: ${mystery.weapon.weight} kg `;
    document.getElementById('weaponImage').src = mystery.weapon.image;
}

const pickRoom = () => {
    // Randomly selects a favouriteWeapon from the rooms-array and adds that to the mystery object
    mystery.room = randomSelector(rooms);
    document.getElementById('roomName').innerHTML = `${mystery.room}`;
}


document.getElementById('killerCard').onclick = pickKiller;
document.getElementById('weaponCard').onclick = pickWeapon;
document.getElementById('roomCard').onclick = pickRoom;

// Function that will be invoked when you click the reveal-button. It prints out a message
//with facts about the murderer.
const revealMystery = () => {
    if (mystery.killer == "" || mystery.favouriteWeapon == "" || mystery.room == "") {
        document.getElementById('mysteryDisplay').innerHTML = `
    The murder can 't be resolved yet`;
    } else {
        document.getElementById('mysteryDisplay').innerHTML = `The murder was commited by ${mystery.killer.firstName} ${mystery.killer.lastName},
         in the ${mystery.room } with a ${mystery.weapon.name}. `;
        document.getElementById('image').src = mystery.killer.image;
    }
}

//flips the cards on onclick
document.querySelectorAll('.flip-card-container').forEach(item => {
    item.onclick = () => {
        item.classList.toggle("flip");
    }
})