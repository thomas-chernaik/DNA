const inputImage = document.getElementById('input-image');
const imagePreview = document.getElementById('image-preview');

inputImage.addEventListener('change', () => {
  const file = inputImage.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    imagePreview.src = reader.result;
  });

  reader.readAsDataURL(file);
});


$(document).ready(function() {
  $(".vbar").draggable({ axis: "x" });
});
let totalColumns = 0;
let columnNumber = 0;
function addNewColumn()
{
  //store the name in columnName and number in columnNumber
  totalColumns++;
  columnNumber++;
  columnName = "vbar" + columnNumber;
  //create the column
  $(".button-container").append("<div class='vbar' id='" + columnName + "'></div>");
  $(document).ready(function() {
  $("#" + columnName).animate({
    left: screen.width / 100 * columnNumber + "px",
  });
  $(document).ready(function() {
  $("#" + columnName).draggable({ axis: "x" });
});
});
}
function deleteColumn()
{
  $(document).ready(function () {
  let columnName = "#vbar" + columnNumber;
  console.log(columnName);
  $(columnName).remove();
  if(columnNumber > 0) {
    columnNumber--;
    totalColumns--;
  }
  });
}

var slider = document.getElementById("rotater");
var output = document.getElementById("rotationNum");
output.innerHTML = slider.value;
jQuery.fn.rotate = function(degrees) {
    $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};
slider.oninput = function() {
  output.innerHTML = this.value;
  $("#image-preview").rotate(this.value);
  ;
}
$("#rotater").mousedown(function() {
  $(document.body).prepend('<img id="grid" src="img/grid.png">'
  );
});
$("#rotater").mouseup(function() {
  $("#grid").remove();
});

