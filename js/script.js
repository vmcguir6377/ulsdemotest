
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

      //form 
      $(document).ready(function() {
        $("div#form1").append(
        // Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
        $("<h3/>").text("Contact Form"), $("<p/>").text("Please fill out this form to be added to the client roster."), $("<form/>", {
        action: '#',
        method: '#'
        }).append(
        // Create <form> Tag and Appending in HTML Div form1.
        $("<input/>", {
        type: 'text',
        id: 'vname',
        name: 'name',
        placeholder: 'Your Name'
        }), // Creating Input Element With Attribute.
        $("<input/>", {
        type: 'text',
        id: 'vcompanyname',
        name: 'company',
        placeholder: 'Your Company Name'
        }),
        $("<input/>", {
            type: 'text',
            id: 'vaddress',
            name: 'address',
            placeholder: 'Your Company Address'
        }),
        $("<input/>", {
            type: 'text',
            id: 'vcontactnumber',
            name: 'number',
            placeholder: 'Your Contact Number'
        }),
        $("<input/>", {
            type: 'text',
            id: 'vemail',
            name: 'email',
            placeholder: 'Your Email'
        }),
         $("<br/>"), $("<input/>", {
        type: 'submit',
        id: 'submit',
        value: 'Submit'
        })))
        });