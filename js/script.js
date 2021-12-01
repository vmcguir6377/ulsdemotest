
$(document).ready(function () {
  $("#buttonContainer").dxButton({
    text: "+",
    onClick: function () {
      $("[href]").fadeIn();
    }
  })

});


//form button
$(document).ready(function () {
  $("#buttonContainer2").dxButton({
    text: "+",
    onClick: function () {
      $("[href]").fadeIn();
    }
  })

});


//popup 
$(function () {
  $("#popup").dxPopup({
      contentTemplate: () => {
          const formcontent = $("<div />");
          formcontent.append(
              $("Add User").attr("src", "./images/dx-logo.png"),
              $(popupText)
          );
          return formcontent;
      },
  });
  const popupText = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Penatibus et magnis dis parturient. Eget dolor morbi non arcu risus. Tristique magna sit amet purus gravida quis blandit.
  Auctor urna nunc id cursus metus aliquam eleifend mi in. Tellus orci ac auctor augue mauris augue neque gravida. Nullam vehicula ipsum a arcu.
  Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Cursus in hac habitasse platea dictumst. Egestas dui id ornare arcu.
  Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>

  <p>Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Neque volutpat ac tincidunt vitae semper quis lectus.
  Sed sed risus pretium quam vulputate dignissim suspendisse in. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar.
  Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Amet cursus sit amet dictum sit amet justo donec enim.
  Vestibulum rhoncus est pellentesque elit ullamcorper. Id aliquet risus feugiat in ante metus dictum at.</p>`;
});

$(function () {
  $("#popup").dxPopup({
      // ...
      visible: true,
      closeOnOutsideClick: true
  });



  //show or hide popup
  const popup = $("#popup").dxPopup("instance");
  $("#button").dxButton({
      text: "Form",
      onClick: () => {
          popup.show();
      }
  });
});


//popup titleing
$(function () {
  $("#popup").dxPopup({
      // ...
      showTitle: true,
      title: "Information",
  });
  // ...
});


//popup positioning
$(function () {
  $("#popup").dxPopup({
      // ...
      dragEnabled: true,
      position: "center"
  });
  // ...
});
