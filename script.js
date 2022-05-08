/*popup messages */


function ClickMessage() {
    alert("Thank you for subscribing!");
}


function ClickMessageFeedback() {
    alert("Thank you for your feedback!")
}

function ClickMessageFAQ() {
    alert("Thank you for your Message! we will be back to you ASAP!")
}

function ClickMessagesubmit() {
    alert("Thank you for reserving with us")
}


/*Image slider index page */

var sliderbicycle = document.querySelector('.slider');
var images = [];            //Create array with bicycles 
images[0] = 'images/bicycle1electric.jpeg';
images[1] = 'images/bicycle2sport.jpeg';
images[2] = 'images/bicycle3casual.jpeg';
images[3] = 'images/bicycle4foldable.jpeg';
var i = 0;


/*Function for previous image */

function prev() {
    if (i <= 0) i = images.length;
    i--;
    return setImg();

}


/*Function for nex image */
function next() {
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return sliderbicycle.setAttribute('src', images[i]);
}


/*Show reservation details*/

const reservationDetails = document.getElementById('details')
new URLSearchParams(window.location.search).forEach((value, name) => {
    reservationDetails.append(`${name}: ${value}`)
    reservationDetails.append(document.createElement('br'))
})
