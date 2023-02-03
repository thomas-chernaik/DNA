const inputImage = document.getElementById('input-image');
const imagePreview = document.getElementById('image-preview');
var captions = {};
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

function addNewBand()
{
  $(".container").append('<div class="band"></div>');
  //to make our bars snap to our columns we will make them draggable, and then move to the nearest column on mouse up
$(".band").draggable();
$(".band").mouseup(function(){
  //generate list of columns
  let myxValue = $(this).position().left;
  if(myxValue > screen.width - 30)
  {
    $(this).remove();
  }
  let xValue = myxValue;
  let minDist = 1000;
  console.log(Object.keys(captions));
  for(let i=0; i<Object.keys(captions).length; i++)
  {
    var dist = Math.abs(myxValue - $("#" + Object.keys(captions)[i]).position().left);
    if (dist < minDist)
    {
      minDist = dist;
      xValue = $("#" + Object.keys(captions)[i]).position().left;
    }

  }
  console.log(xValue);
  //snap to column
  $(this).css({"position" : "absoulte", "left" : xValue -10})
});

}

function addNewColumn()
{
  //store the name in columnName and number in columnNumber
  totalColumns++;
  columnNumber++;
  columnName = "vbar" + columnNumber;
  //create the column
  $(".button-container").append("<div class='vbar' id='" + columnName + "'></div>");
  //add the caption
  addNewCaption(columnName);
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
  $("#"+captions["vbar" + columnNumber]).remove();
  delete captions["vbar" + columnNumber];
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


function addNewCaption(childDivID)
{
  var captionID = "caption"+ childDivID;
  $("#"+childDivID).prepend('<textarea class="caption" cols = "10"id="'+ captionID + '">');
  captions[childDivID] = captionID;
}
var hidden = false;


function hider()
{
  var elementsToHide = [".bar", ".button", "#image-preview", ".rot", "#rotater", ".vbar"];
  if(hidden)
  {
    hidden = false;
        $(".bar, .button, #image-preview, .rot, #rotater").css({"background-color" : "rgba(200,200,200,1)"});

      $("#hider").text("Hide Things");
      $("#image-preview").css({"opacity": 1});
  }
  else
  {
    hidden = true;
    $(".bar, .button, #image-preview, .rot, #rotater").css({"background-color" : "rgba(1,1,1,0)"});
    $("#image-preview").css({"opacity": 0});
    $("#hider").text("Show Things");


  }
}


