// redirect.js
const currentPage = window.location.pathname;

// Check if the current page is not the home page
if (currentPage !== '/') {
    // Redirect to the maintenance page
    window.location.replace('/maintenance.html');
}




