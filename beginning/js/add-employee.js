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
    document.getElementById('btnAddEmployee').addEventListener('click', () => {
        output = window.opener.document.getElementById('loginDetails');
        output.innerHTML -= );
    

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
        window.close();
    });

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
        e.preventDefault(e);

// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS

// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE

// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES

// CLOSE THE POPUP


// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE