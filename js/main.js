// const toggleButton = document.getElementById('toggleButton');
// const content = document.getElementById('sidebar');

// toggleButton.addEventListener('click', function() {
//     if (content.style.display === 'none' || content.style.display === '') {
//         content.style.display = 'block'; // Show the content
//     } else {
//         content.style.display = 'none'; // Hide the content 
//     }
// });

const toggleButton = document.getElementById('toggleButton');
const sidebar = document.getElementById('sidebar');
const body = document.body;

toggleButton.addEventListener('click', function() {
       if (sidebar.classList.contains('collapsed')) {
              sidebar.classList.remove('collapsed');
              body.classList.remove('sidebar-collapsed'); // Show sidebar
       } else {
              sidebar.classList.add('collapsed');
              body.classList.add('sidebar-collapsed'); // Hide sidebar
       }
});