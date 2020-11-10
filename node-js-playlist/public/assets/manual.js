// Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app
// Maintenance Guide Section:

fetch('manual.json')
  .then(res => res.json())
  .then(data => appendData(data))
  .catch(error => console.error("Something went wrong with retreiving the manual data", error));

function appendData(data) {
  
  var sel = document.getElementById("cmbitems");

  for (var i = 0; i <data.length; i++) {
    var opt = document.createElement('option');
    opt.appendChild( document.createTextNode(data[i].topic));
    opt.value = '{"description":"' + data[i].description + '", "imagePath":"' + data[i].image + '"}';
    sel.appendChild(opt);
  }
}

function selectValue(sel) {
  var selectData = JSON.parse(sel.value);
  console.log(selectData);
  var input = document.getElementById('txtprice');
  input.value = selectData.description;
  var image = document.getElementById('imageId');
  image.setAttribute("src", selectData.imagePath)
}