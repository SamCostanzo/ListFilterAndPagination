/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Variables that store DOM elements needed to reference and/or manipulate items.
const studentDetails = document.querySelectorAll('.student-details');
const allStudents = document.querySelectorAll('.student-item');


// Function that uses an upper/lower value to hide students we don't want to show on a given page.
function showPage(pageNumber, allStudents) {
	const upper = (pageNumber * 10) - 1;
	const lower = (pageNumber * 10) - 10;
// This loop hides all students on the page
    for (let i = 0; i < allStudents.length; i++) {
		allStudents[i].style.display = 'none';
// If a students number is between the parameters that we set up, then diplay them in block.
        if (i >= lower && i <= upper) {
			allStudents[i].style.display = 'block';
		}
	}
}
// Call the showPage function with the two arguments.
showPage(1, allStudents);


// Function to append the pagination links.
function appendPagelinks(allStudents) {
	const ul = document.getElementsByTagName('ul')[0];
	const paginationDiv = ul.parentNode;
	const div = document.createElement('div');
// Adds a div with the class name 'pagination'.
    paginationDiv.appendChild(div).className = 'pagination';
    
    const pagination = document.getElementsByClassName('pagination')[0];
	const createUl = document.createElement('ul');
    
    pagination.appendChild(createUl);
    
    for (let i = 0; i <= allStudents.length / 10; i++) {
		const createLi = document.createElement('li');
		createUl.appendChild(createLi);
		// const li = document.getElementsByTagName('li');
		const a = document.createElement('a');
		a.setAttribute('href', '#');
		createLi.appendChild(a);
		a.textContent = [i + 1];
        
        if (i === 0) {
			a.classList.add('active');
		}
	}


// Adding functionality to the pagination buttons so that they show and hide the correct items on each page.
pagination.addEventListener('click', (event) => {
    const anchorTags = document.querySelectorAll('.pagination a');
    
    for (let i = 0; i < anchorTags.length; i++) {
        anchorTags[i].classList.remove('active');
    }
    
    if (event.target.classList.contains('active')) {
        event.target.classList.remove('active');
    } else {
        event.target.className = 'active';
    }

    function button() {
        let button = parseInt(event.target.textContent);
        showPage(button, allStudents);
    }
    button();
  });
}
appendPagelinks(allStudents);








    
   

