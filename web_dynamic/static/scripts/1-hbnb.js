// executed only when DOM is loaded

const $ = window.$;

$(document).ready(function () {
  // create an empty object to store the amenities
  const amenities = {};

  // listen for changes on each input checkbox tag
  $('input[type="checkbox"]').change(function () {
    // get the Amenity ID and name associated with the checkbox
    const id = $(this).data('id');
    const name = $(this).data('name');

    if ($(this).is(':checked')) {
      // add the Amenity ID to the amenities object
      amenities[id] = name;
    } else {
      // remove the Amenity ID from the amenities object
      delete amenities[id];
    }

    // update the h4 tag inside the div Amenities with the list of Amenities checked
    $('.amenities h4').text(Object.values(amenities).join(', '));
  });
});
