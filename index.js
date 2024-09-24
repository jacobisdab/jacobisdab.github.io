// Make the DIV element draggable:
var mainintrotab = document.getElementById("mydiv")
var mainintrotab2 = document.getElementById("mydiv2")

dragElement(mainintrotab);
dragElement(mainintrotab2);

let highestZIndex = 9; // To track the current highest z-index

    // Function to bring a div to the front
function bringToFront(element) {
    highestZIndex++; // Increment the z-index
    element.style.zIndex = highestZIndex; // Set the z-index of the clicked element
}

// Event listeners for clicks on mydiv and mydiv2
document.getElementById("mydiv").addEventListener("click", function() {
    bringToFront(this);
});

document.getElementById("mydiv2").addEventListener("click", function() {
    bringToFront(this);
});

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function downloadResume(){
// Create an anchor element
  const a = document.createElement('a');
  
  // Set the href to the file's URL (replace with your actual file path)
  a.href = 'images/Jacob_Shen_Resume.pdf'; // Example: 'documents/Jacob_Shen_CV.pdf'
  
  // Set target="_blank" to open the file in a new tab
  a.target = '_blank';
  
  // Append the anchor to the body (not strictly necessary, but for consistency)
  document.body.appendChild(a);
  
  // Programmatically click the anchor to open the file
  a.click();
  
  // Remove the anchor from the document
  document.body.removeChild(a);

}

function hideelement(){
  //mainintrotab.classList.add("invisible");
  $("#mydiv").css("visibility","hidden")
}

function addelement(){
  $("#mydiv").css("visibility","visible")
}

function hideelement2(){
  //mainintrotab.classList.add("invisible");
  $("#mydiv2").css("visibility","hidden")
}

function addelement2(){
  $("#mydiv2").css("visibility","visible")
}

