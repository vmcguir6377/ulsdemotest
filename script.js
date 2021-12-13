//add roster  
$(() => {
    $('#data').dxSpeedDialAction({
        label: 'User Roster',
        icon: 'detailslayout',
        index: 1,
        onClick: () => {
            _popup = $("<div>").appendTo("body").dxPopup({
                title: "User Roster",
                "visible": true,
              
              onContentReady(e) {
                    e.component.option('loadPanel.enabled', false);
                },

                onContentReady: '',
                onHidden: (e) => {
                    e.component.dispose();
                    e.element.remove();
                    DevExpress.ui.notify({ type: 'success', message: 'closed dxDataGrid' });

                },

                contentTemplate: (container) => {
                    _data = $(`<div id = "gridContainer">`).appendTo(container)
                        .dxDataGrid({
                            showBorders: true,
                            scrolling: {
                                mode: 'virtual',
                            },

                            dataSource: [{
                                "ID": 1,
                                "CompanyName": "Super Mart of the West",
                                "Address": "702 SW 8th Street",
                                "City": "Bentonville",
                                "State": "Arkansas",
                                "Zipcode": 72716,
                                "Phone": "(800) 555-2797",
                                "Website": "http://www.nowebsitesupermart.com"
                            }, {
                                "ID": 2,
                                "CompanyName": "Electronics Depot",
                                "Address": "2455 Paces Ferry Road NW",
                                "City": "Atlanta",
                                "State": "Georgia",
                                "Zipcode": 30339,
                                "Phone": "(800) 595-3232",
                                "Website": "http://www.nowebsitedepot.com"
                            }, {
                                "ID": 3,
                                "CompanyName": "K&S Music",
                                "Address": "1000 Nicllet Mall",
                                "City": "Minneapolis",
                                "State": "Minnesota",
                                "Zipcode": 55403,
                                "Phone": "(612) 304-6073",
                                "Website": "http://www.nowebsitemusic.com"
                            }, {
                                "ID": 4,
                                "CompanyName": "Tom's Club",
                                "Address": "999 Lake Drive",
                                "City": "Issaquah",
                                "State": "Washington",
                                "Zipcode": 98027,
                                "Phone": "(800) 955-2292",
                                "Website": "http://www.nowebsitetomsclub.com"
                            }, {
                                "ID": 5,
                                "CompanyName": "E-Mart",
                                "Address": "3333 Beverly Rd",
                                "City": "Hoffman Estates",
                                "State": "Illinois",
                                "Zipcode": 60179,
                                "Phone": "(847) 286-2500",
                                "Website": "http://www.nowebsiteemart.com"
                            }, {
                                "ID": 6,
                                "CompanyName": "Walters",
                                "Address": "200 Wilmot Rd",
                                "City": "Deerfield",
                                "State": "Illinois",
                                "Zipcode": 60015,
                                "Phone": "(847) 940-2500",
                                "Website": "http://www.nowebsitewalters.com"
                            }, {
                                "ID": 7,
                                "CompanyName": "StereoShack",
                                "Address": "400 Commerce S",
                                "City": "Fort Worth",
                                "State": "Texas",
                                "Zipcode": 76102,
                                "Phone": "817) 820-0741",
                                "Website": "http://www.nowebsiteshack.com"
                            }, {
                                "ID": 8,
                                "CompanyName": "Circuit Town",
                                "Address": "2200 Kensington Court",
                                "City": "Oak Brook",
                                "State": "Illinois",
                                "Zipcode": 60523,
                                "Phone": "(800) 955-2929",
                                "Website": "http://www.nowebsitecircuittown.com"
                            }, {
                                "ID": 9,
                                "CompanyName": "Premier Buy",
                                "Address": "7601 Penn Avenue South",
                                "City": "Richfield",
                                "State": "Minnesota",
                                "Zipcode": 55423,
                                "Phone": "(612) 291-1000",
                                "Website": "http://www.nowebsitepremierbuy.com"
                            }, {
                                "ID": 10,
                                "CompanyName": "ElectrixMax",
                                "Address": "263 Shuman Blvd",
                                "City": "Naperville",
                                "State": "Illinois",
                                "Zipcode": 60563,
                                "Phone": "(630) 438-7800",
                                "Website": "http://www.nowebsiteelectrixmax.com"
                            }, {
                                "ID": 11,
                                "CompanyName": "Video Emporium",
                                "Address": "1201 Elm Street",
                                "City": "Dallas",
                                "State": "Texas",
                                "Zipcode": 75270,
                                "Phone": "(214) 854-3000",
                                "Website": "http://www.nowebsitevideoemporium.com"
                            }, {
                                "ID": 12,
                                "CompanyName": "Screen Shop",
                                "Address": "1000 Lowes Blvd",
                                "City": "Mooresville",
                                "State": "North Carolina",
                                "Zipcode": 28117,
                                "Phone": "(800) 445-6937",
                                "Website": "http://www.nowebsitescreenshop.com"
                            },
                            {
                                "ID": 13,
                                "CompanyName": "Premier Buy",
                                "Address": "7601 Penn Avenue South",
                                "City": "Richfield",
                                "State": "Minnesota",
                                "Zipcode": 55423,
                                "Phone": "(612) 291-1000",
                                "Website": "http://www.nowebsitepremierbuy.com"
                            }, {
                                "ID": 14,
                                "CompanyName": "ElectrixMax",
                                "Address": "263 Shuman Blvd",
                                "City": "Naperville",
                                "State": "Illinois",
                                "Zipcode": 60563,
                                "Phone": "(630) 438-7800",
                                "Website": "http://www.nowebsiteelectrixmax.com"
                            }, {
                                "ID": 16,
                                "CompanyName": "Screen Shop",
                                "Address": "1000 Lowes Blvd",
                                "City": "Mooresville",
                                "State": "North Carolina",
                                "Zipcode": 28117,
                                "Phone": "(800) 445-6937",
                                "Website": "http://www.nowebsitescreenshop.com"
                            }, {
                                "ID": 17,
                                "CompanyName": "Braeburn",
                                "Address": "1 Infinite Loop",
                                "City": "Cupertino",
                                "State": "California",
                                "Zipcode": 95014,
                                "Phone": "(408) 996-1010",
                                "Website": "http://www.nowebsitebraeburn.com"
                            }, {
                                "ID": 18,
                                "CompanyName": "PriceCo",
                                "Address": "30 Hunter Lane",
                                "City": "Camp Hill",
                                "State": "Pennsylvania",
                                "Zipcode": 17011,
                                "Phone": "(717) 761-2633",
                                "Website": "http://www.nowebsitepriceco.com"
                            }, {
                                "ID": 19,
                                "CompanyName": "Ultimate Gadget",
                                "Address": "1557 Watson Blvd",
                                "City": "Warner Robbins",
                                "State": "Georgia",
                                "Zipcode": 31093,
                                "Phone": "(995) 623-6785",
                                "Website": "http://www.nowebsiteultimategadget.com"
                            }, {
                                "ID": 20,
                                "CompanyName": "EZ Stop",
                                "Address": "618 Michillinda Ave.",
                                "City": "Arcadia",
                                "State": "California",
                                "Zipcode": 91007,
                                "Phone": "(626) 265-8632",
                                "Website": "http://www.nowebsiteezstop.com"
                            }],
                            columns: ["CompanyName", "Address", "City", "State", "Phone", "Website"],
                            showBorders: true,
                            showBorders: true,
                            scrolling: {
                                mode: 'infinite',
                            },
                            searchPanel: {
                                visible: true,
                                width: 240,
                                placeholder: "Search"
                            },
                        });
                    
                }

            }).dxPopup('instance');
        }

    }).dxSpeedDialAction('instance');

    //add New User Form
    $(() => {
        $('#form').dxSpeedDialAction({
            label: 'New User Form',
            icon: 'checklist',
            index: 1,
            onClick: function () {
                _popup = $('<div>').appendTo("body").dxPopup({
                    "visible": true,
                    onContentReady: '',

                    onHidden: (e) => {
                        e.component.dispose();
                        e.element.remove();
                        DevExpress.ui.notify({ type: 'success', message: 'closed dxForm' });
                    },
                    contentTemplate: (container) => {
                        _form = $(`<div id='formBox'>`).appendTo(container).dxForm({
                            formData: {
                                Name: "John Alberton",
                                Address: "702 SW 8th Street",
                                City: "Bentonville",
                                State: "Arkansas",
                                Zip: 72716,
                                Phone: "(800) 555-2797",
                                Website: "https://www.nowebsite.com",
                            },
                            labelLocation: "left",
                        }).dxForm('instance');
                        let title = $("<div id-'title'>Add User</div>",
                            title.appendTo(container)

                                .dxSpeedDialAction('instance'),
                        );

                        //Floating action button
                        $('#direction').dxSelectBox({
                            dataSource: ['auto', 'up', 'down'],
                            value: 'auto',

                            onSelectionChanged(e) {
                                DevExpress.config({
                                    floatingActionButtonConfig: directions[e.selectedItem],
                                });

                                DevExpress.ui.repaintFloatingActionButton();
                            },
                        },

                        )
                    }
                })
            }
        })
    },
    )
});
