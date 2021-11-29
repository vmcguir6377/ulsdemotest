# ulsdemotest
js
$(()=>{
    // Configure global DevExpress options
    DevExpress.config({
    floatingActionButtonConfig:{
    // icon: "home",
    shading: true,
    position: {
    of: "#window",
    my: "right bottom",
    at: "right bottom",
    offset: "-16 -16",
}
}});

    // Initialize dxSpeedDialAction and instantiate _speedDial variable
    _speedDial = $('<div>').appendTo("body").dxSpeedDialAction({
        "icon": "close",
        onClick: () => {DevExpress.ui.notify({type: 'success', message: 'closed dxSpeedDialAction'});}
      }).dxSpeedDialAction('instance');
    
    // assign form popup to dxSpeedDialAction 
      $("#form").dxSpeedDialAction({
        label: "Form",
        // hint: "text search",
        icon: "product",
        onClick: function () {
            _popup = $('<div>').appendTo("body").dxPopup({
                "visible": true, 
                onContentReady: '',
                title: 'Add User',
    
                // onHidden attribute fires warning on popup close
                onHidden: (e)=>{
                    e.component.dispose();
                    e.element.remove();
                    DevExpress.ui.notify({type: 'success', message: 'closed dxForm'});
                },
                // place form in popup container
                contentTemplate:(container)=>{
                    let scrollView = $("<div id='scroll'></div>");
                   let _form = $(`<div id='form123'>`).appendTo(container)
                        .dxForm({
                            formData: {
                                    Name: "John Smith",
                                    Address: "702 SW 8th Street",
                                    City: "Bentonville",
                                    State: "Arkansas",
                                    Zipcode: 72716,
                                    Phone: "(800) 555-2797",
                                    Website: "http://www.nowebsite.com",
                                },
                                labelLocation: "left",
                            }).dxForm('instance');

                }
                
            }).dxPopup('instance');
        }
    });
        // assign data popup to dxSpeedDialAction 
    $("#data").dxSpeedDialAction({
        label: "Data",
        // hint: "data",
        icon: "folder",
        onClick: () => {
            _popup = $('<div>').appendTo("body").dxPopup({
                "visible": true, 
                onContentReady: '',
                title: 'Add User',
                // onHidden attribute fires warning on popup close
                onHidden: (e)=>{
                    e.component.dispose();
                    e.element.remove();
                    DevExpress.ui.notify({type: 'success', message: 'closed dxDataGrid'});
                },
                //place dxDataGrid in popup container
                
                contentTemplate:(container)=>{
                    
                    //changed dxDataGrid instance to _data variable, to append scrollView to
                    let _data = $(`<div id="gridContainer">`).appendTo(container)
                    .dxDataGrid({
                        dataSource: './dummy.json',
                        columns: ["CompanyName", "Address", "City", "State", "Phone", "Website"],
                        showBorders: true,
                        
                        searchPanel: {
                            visible: true,
                            width: 240,
                            placeholder: "Search..."
                        },
                        
                    });
                    // define scrollview variable as jQuery selector
                    let scrollView = $("<div id='scrollView'></div>");
                    //append scrollView to _data variable (append as child to div created in _data)
                    scrollView.append(_data);
                    // add instance of dxScrollView to scrollview div
                    scrollView.dxScrollView({
                        height: '100%',
                        width: '100%'
                     
                    });

                    //append scrollView to container
                    container.append(scrollView);
                    
                }

            //closing the dxPopup
            }).dxPopup('instance');
        }
      
    });

});

css
body {
    text-align: center;
    margin-top: 5%;
    background-color: teal;
}

.button1 {
    background-color: black;
    color: white;
    font-size: 1.4em;
    border-radius: 1rem;
}

#form123 {
    /* background-color: black;
    border-radius: 1rem; */
    display: true;
}

#gridContainer {
    background-color: red;
    color: red;
}
