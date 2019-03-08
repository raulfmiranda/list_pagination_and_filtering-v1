/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

var numberStudentPerPage = 10;

// Goes through all students to set them visible or not

function showPage(pageNumber) {

   var students = document.querySelectorAll('body > div > ul > li');

   pageNumber--;

   for (var i = 0; i < students.length; i++) {

      if (i >= pageNumber * numberStudentPerPage  && i < (pageNumber + 1) * numberStudentPerPage) {
         students[i].style.display = 'block';
      } else {
         students[i].style.display = 'none';
      }
   }
}

// Append links to do pagination (1, 2, ...)

function appendPageLinks() {

   var page = document.querySelector('.page');
   var students = document.querySelectorAll('body > div > ul > li');

   // Go to default page = 1
   showPage(1);
   
   var paginationHTML = '<div class="pagination"><ul>';
   
   // Activate/Desactivate pagination link
   for (let i = 1; i < ((students.length / numberStudentPerPage) + 1); i++) {
      if (i == 1) {
         paginationHTML += '<li><a class="active" href="#">' + i + '</a></li>';
      } else {
         paginationHTML += '<li><a href="#">' + i + '</a></li>';
      }
   }

   paginationHTML += '</ul></div>';
   page.innerHTML += paginationHTML;

   var pagination = document.querySelectorAll('body > div > div.pagination > ul > li');

   for (let j = 0; j < pagination.length; j++) {
      const clickedLink = pagination[j].getElementsByTagName('a')[0];
      
      clickedLink.addEventListener('click', function() {
         
         // Active only the clicked link and desactive others
         for (let k = 0; k < pagination.length; k++) {
            const link = pagination[k].getElementsByTagName('a')[0];
            link.classList.remove("active");
         }
         
         clickedLink.classList.add("active");
         let pageNumber = parseInt(clickedLink.textContent);
         showPage(pageNumber);
      });
   }
}

appendPageLinks();