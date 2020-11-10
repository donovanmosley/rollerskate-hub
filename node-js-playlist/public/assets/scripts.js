// Ajax request for getting yelp api with radius search options:

$(window).on("load", function() {
  var API_KEY = "NvnKjvhsKILrfEgu-GyzIu83rkw5GlAz-b5mQM3PQBpUAk6F9SNGEOjkEUJ456d91ho6zi4gO9IdK2wAlzsYjIFItK1HG8y3TPoTVXj4iEAc_VMJIrHYF-0Sw-KbX3Yx"
  var web = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term="
  
  function milesToMeters(miles) {
    return miles * 1609
  }

  $('#zip').focus(function() {
    $('#zip').val("")
  })

  $('#submit').on('click', function(event) {
    event.preventDefault();  
    var y = "skate"
    var x = $('#zip').val()
    var q = $('#radius option:selected').val()
    var z = milesToMeters(q)


    $.ajax({
      type: "GET",
      url: web + y + "&location=" + x + "&radius=" + z,
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "expires_in": 15551999,
        "token_type": "Bearer"
      },
      success: function(data) {
        // Grab the results from the API JSON return
        var totalresults = data.total;
        // If our results are greater than 0, continue
        if (totalresults > 0){
            // Display a header on the page with the number of results
            $('#found').append('<h1>We discovered ' + totalresults + ' results!</h1><br>');
            // Itirate through the JSON array of 'businesses' which was returned by the API
            $.each(data.businesses, function(i, item) {
                // Store each business's object in a variable
                var id = item.id;
                var alias = item.alias;
                var phone = item.display_phone;
                var image = item.image_url;
                var name = item.name;
                var rating = item.rating;
                var reviewcount = item.review_count;
                var address = item.location.address1;
                var city = item.location.city;
                var state = item.location.state;
                var zipcode = item.location.zip_code;
                // Append our result into our page
                $('#results').append('<div id="' + id + '" style="margin-top:20px;margin-bottom:20px;margin-left:40px;margin-right:40px;"><img src="' + image + '" style="width:250px;height:200px;"><br>Name: <b>' + name + '</b> <br> Address: ' + address + ' ' + city + ', ' + state + ' ' + zipcode + '<br>Phone: ' + phone + '<br>Rating: ' + rating + ' with ' + reviewcount + ' reviews.</div>');
          });
        } else {
            // If our results are 0; no businesses were returned by the JSON therefor we display on the page no results were found
            $('#results').append('<h1>We discovered no results!</h1>');
        }
      }  
    })  
  })  
})