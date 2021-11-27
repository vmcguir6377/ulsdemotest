
var taskIdCounter = 0;

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var pageContentEl = document.querySelector("#page-content");
/*$(document).ready(function(){
  $("button").click(function(){
    $("p").hide();
  });
});*/

$(document).ready(function () {
  $("#buttonContainer").dxButton({
      text: "+",
      onClick: function () {
        $("[href]").fadeIn();
      }})
    });

    $(".control_save").click(function () {
          $("#client-form").saveForm();
          return false;
      });

      $(".control_restore").click(function () {
          $("#client-form").restoreForm();
          return false;
      });