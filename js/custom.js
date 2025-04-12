const baseUrl = "http://localhost:8080";

let portalName = "UNT Library Management System";

window.baseUrl = baseUrl;

function formatDate(dateTimeString) {
    // Parse the datetime string into a Date object
    const dateTime = new Date(dateTimeString);
  
    // Format the date using JavaScript's built-in methods
    const formattedDate = (dateTime.getMonth() + 1) + '/' + dateTime.getDate() + '/' + dateTime.getFullYear();
  
    return formattedDate;
  }
