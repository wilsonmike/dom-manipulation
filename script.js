"use strict"; 
// 1. Create a div on the page. Use CSS to give it a background color and size. Use JavaScript
// to change the background color when the user clicks on the div.
// 2. Create a paragraph on the page. Add some text to it. Use JavaScript to make it
// disappear or be removed completely when the user clicks the paragraph.
// 3. Create a paragraph on the page with the text “Bye”. Use CSS to add a border. Use
// JavaScript so that when the mouse enters the paragraph, the text changes to “Hi”. Also
// add JavaScript so that when the mouse leaves the paragraph, the text changes back to
// “Bye”. (Hint: Use mouseenter and mouseleave events.)
// 4. Add a digital clock to the page. It will use JavaScript to update the text every second to
// show the current time including hours, minutes, and seconds. For example: 2:14:22.

document.getElementById("dom-change").onclick = changeColor; 


function changeColor() {
    document.body.style.backgroundColor = "lightblue";
    return false;
}

const disappearClick = () => {
    var x = document.getElementById("myDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none"; 
    }
};