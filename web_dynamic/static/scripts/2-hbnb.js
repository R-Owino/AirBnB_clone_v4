// Checks the API status

const $ = window.$;
$(document).ready(function () {
  const amenities = {};

  // Function to check the API status
  function checkApiStatus () {
    $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    });
  }

  // Call the function to check the API status on page load
  checkApiStatus();

  // Listen for changes on each input checkbox tag
  $('input[type="checkbox"]').change(function () {
    const id = $(this).data('id');
    const name = $(this).data('name');

    if ($(this).is(':checked')) {
      amenities[id] = name;
    } else {
      delete amenities[id];
    }

    $('.amenities h4').text(Object.values(amenities).join(', '));
  });
});
