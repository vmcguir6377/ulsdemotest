$(() => {
    $('#simpleList').dxList({
      dataSource: employees,
      height: '100%',
      grouped: true,
      collapsibleGroups: true,
      colCount: auto,
      groupTemplate(data) {
        return $(`<div>Assigned: ${data.key}</div>`);
      },
    });
  });

  const itemDeleteModeChooser = $('#itemDeleteMode').dxSelectBox({
    disabled: true,
    dataSource: ['static', 'toggle', 'slideButton', 'slideItem', 'swipe', 'context'],
    value: 'toggle',
    onValueChanged(data) {
      listWidget.option('itemDeleteMode', data.value);
    },
  }).dxSelectBox('instance');
  $(() => {
    $('.boxOptions1').dxBox({
      direction: 'row',
      width: '100%',
      height: 75,
    });
  
    $('#boxOptions2').dxBox({
      direction: 'row',
      width: '100%',
      height: 75,
      align: 'center',
      crossAlign: 'center',
    });
  
    $('#boxOptions3').dxBox({
      direction: 'col',
      width: '100%',
      height: 250,
    });
  
    $('#boxOptions4').dxBox({
      direction: 'row',
      width: '100%',
      height: 125,
    });
  });
