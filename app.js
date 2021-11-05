titlesArr = [];
let currentTitle = 0;

const titles = document.querySelectorAll('.title');


//returns an arr of arrays containing a span tag with the class 'letter' for EACH letter in each title in the NodeList 'titles'
titles.forEach(function (title) {
    const splitTitle = [...title.textContent]; //takes the textContent of the title and spreads it into an arr called splitTitle
    title.textContent = ''; //resets the textContent for the given title element
    const letters = [];

    //iterates over the splitTitle arr and creates a span element with 'letter' class for each char of the given title
    for (let char of splitTitle) {
        const letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = char;
        title.append(letter);
        letters.push(letter);
    }

    titlesArr.push(letters);
});
console.log(titlesArr);



//ANIMATION FUNCTIONS
function fadeLetterOut(workingTitle, char) {
    setTimeout(() => {
        workingTitle[char].className = 'letter fade-out';
    }, char * 80);
};

function fadeLetterIn(newTitle, char) {
    setTimeout(() => {
        newTitle[char].className = 'letter fade-in';
    }, 340+(char*80));
};


//CHANGE WORKING TITLE FUNCTION
function changeTitle() {
    console.log(currentTitle);
    let workingTitle = titlesArr[currentTitle];
    let newTitle = (currentTitle === titles.length - 1) ? titlesArr[0] : titlesArr[currentTitle + 1];

    //iterates over each letter of workingTitle and applies fade-out class
    for (let i = 0; i < workingTitle.length; i++) {
        fadeLetterOut(workingTitle, i);
    };


    //iterates over and animates-in each letter of newTitle 
    for (let i = 0; i < newTitle.length; i++) {
        newTitle[i].className = 'letter fade-behind';
        newTitle[0].parentElement.style.opacity = 1;
        fadeLetterIn(newTitle, i);
    };
    currentTitle = (currentTitle === titlesArr.length - 1) ? 0 : currentTitle + 1;
    console.log(currentTitle);
};


titles[currentTitle].style.opacity = 1; //makes initial title visible


changeTitle();
setInterval(changeTitle, 2000); //changes the title every 3s


