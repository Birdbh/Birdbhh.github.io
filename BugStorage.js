//Data that will be take from the form

const form = document.querySelector('#form');
const email = document.querySelector('#email');
const name = document.querySelector('#name');
const Box = document.querySelectorAll('.form-check-input');

//Create a Bug Class To Make Template to Hold Data

class Bug {
    constructor(email, name, urgency, date, text) {
        this.email = email;
        this.name = name;
        this.urgency = urgency;
        this.date = date;
        this.text = text;
    }
}

//Add event and function for when button is clicked to sumbit

form.addEventListener('submit', onSubmit);

//id number of bug
i = 0;

function onSubmit(e){
    i++;

    e.preventDefault();

    //Create a new Object for this specfic Bug report
    const bug = new Bug();

    //Fill in the values for that object
    bug.email = email.value;
    bug.name = name.value;
    
    //Cycle Through Radio Box Values and identify the Urgency Clicked (1-3)
    for (const i of Box){
        if (i.checked){
            bug.urgency = i.value;
        }
    }

    bug.date = new Date();
    bug.text = text.value;

    alert('Your Submission will be viewed in the order it was recieved');
    console.log(bug);

    localStorage.setItem(i, bug);

    alert('Your service request will be reviewed in the order it was recieved');
    console.log(bug);

    console.log(localStorage.getItem(i));
}


//Sort in Queue by Data and if Tied by Urgency

//Delete Function

//Just Look up and Change Names

//Quick Form submission for username and password

form.addEventListener('pass', onSubmit);

function onSubmit(e){
    alert('Incorrect Username or Password');
}

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }