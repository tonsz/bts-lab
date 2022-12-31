// Activity using Alerts, Functions &  DOM Manipulation

// Simple counter function
let counter = 0;
function count() {
    counter++;
    message = `This file has been downloaded ${counter} time(s)!`
    alert(message);
}
// functionality for form behavior
// when DOM is loaded... 
document.addEventListener('DOMContentLoaded', () => {

    // set submit button to disabled by default
    document.querySelector('#submit').disabled = true;
    // set variables for elements 
    let parentElement = document.getElementById('school');
    const yesRadio = document.querySelector('#styes');
    const noRadio = document.querySelector('#stno');
    let t = document.createElement('textarea');
    let l = document.createElement('label');

    // enable submit button when they start typing message
    document.querySelector('textarea').onkeyup = () => {
        document.querySelector('#submit').disabled = false;
    } 
    // if they are a student
    yesRadio.addEventListener('click', () => {
       // add a school name field
        t.setAttribute('class', 'form-control');
        t.setAttribute('id', 'school-name'); 
        t.setAttribute('placeholder', 'University of the Philippines'); 
        parentElement.appendChild(t);
      
        l.innerHTML = "School";
        l.setAttribute('for', 'school-name');
        parentElement.appendChild(l);

    });  
   
    // otherwise, remove the textarea and label elements
    noRadio.addEventListener('click', () => {
        t.remove();
        l.remove();
    });

    // echo back the user input
    document.querySelector('#submit').onclick = function(){
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;
    
        alert(`Your response has been recorded.\n\n${name}\n${email}\nMessage: ${message}\n\nThank you.`);
    
    
    };
});