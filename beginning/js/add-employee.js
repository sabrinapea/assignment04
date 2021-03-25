// HANDLE THE LOAD EVENT OF THE WINDOW

window.addEventListener('load', () => {

// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
    let width = 800;
    let height = 700;

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
    window.resizeTo(width, height);

// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
    window.moveTo(((window.screen.width - width) / 2), ((window.screen.height - height) / 2));

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
    const $ = (id) => {
        return document.getElementById(id);
    }
    // document.getElementById('btnAddEmployee').addEventListener('click', () => {
    //    let output = window.opener.document.getElementById('LoginDetails');
    //    output.innerHTML = "hello world";
    
// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
        $('cancel').addEventListener('click', cancel);
        window.close();
    });

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE (SUBMISSION)
        $('submit').addEventListener('click', submit);
        e.preventDefault(e);

// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT    
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let ext = document.getElementById('extension').value;
    let email = document.getElementById('email').value;
    let dept = document.getElementById('department').value; 

// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
    function displayForm(e) {

    };
// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
    let parentoutput = window.opener.document.getElementById('loginDetails');


// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
    parentoutput.innerHTML = `<br><br>Id: ${$('id').value}<br>`;
    parentoutput.innerHTML = `<br><br>Name: ${$('name').value}<br>`;
    parentoutput.innerHTML = `<br><br>Extension: ${$('extension').value}<br>`;
    parentoutput.innerHTML = `<br><br>Email: ${$('email').value}<br>`;
    parentoutput.innerHTML = `<br><br>:Department${$('department').value}<br>`;

// CLOSE THE POPUP
    window.close();

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE
$('m-3').addEventListener('submit', displayForm);