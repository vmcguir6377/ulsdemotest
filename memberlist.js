$(() => {
  const listWidget = $('#list').dxList({
    dataSource: products,
    height: 400,
    searchEnabled: true,
    searchExpr: 'Name',
    itemTemplate(data) {
      return $('<div>').text(data.Name);
    },
  }).dxList('instance');

  $('#searchMode').dxSelectBox({
    dataSource: ['contains', 'startswith', 'equals'],
    value: 'contains',
    onValueChanged(data) {
      listWidget.option('searchMode', data.value);
    },
  }).dxSelectBox('instance');
});

$(() => {
  $('#simpleList').dxList({
    dataSource: companies,
    height: '100%',
    grouped: true,
    collapsibleGroups: true,
    groupTemplate(data) {
      return $(`<div> ${data.key}</div>`);
    },
  });
});
$(() => {
  $('#gridContainer').dxDataGrid({
    dataSource: {
      store: {
        type: 'odata',
        url: 'https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes',
        key: 'Id',
        beforeSend(request) {
          request.params.startDate = '2020-05-10';
          request.params.endDate = '2020-05-15';
        },
      },
    },
    paging: {
      pageSize: 10,
    },
    pager: {
      showPageSizeSelector: true,
      allowedPageSizes: [10, 25, 50, 100],
    },
    remoteOperations: false,
    searchPanel: {
      visible: true,
      highlightCaseSensitive: true,
    },
    groupPanel: { visible: true },
    grouping: {
      autoExpandAll: false,
    },
    allowColumnReordering: true,
    rowAlternationEnabled: true,
    showBorders: true,
    columns: [
      {
        dataField: 'Product',
        groupIndex: 0,
      },
      {
        dataField: 'Amount',
        caption: 'Sale Amount',
        dataType: 'number',
        format: 'currency',
        alignment: 'right',
      },
      {
        dataField: 'Discount',
        caption: 'Discount %',
        dataType: 'number',
        format: 'percent',
        alignment: 'right',
        allowGrouping: false,
        cellTemplate: discountCellTemplate,
        cssClass: 'bullet',
      },
{
  dataField: 'SaleDate',
  dataType: 'date',
},
{
  dataField: 'Region',
  dataType: 'string',
},
{
  dataField: 'Sector',
  dataType: 'string',
},
{
  dataField: 'Channel',
  dataType: 'string',
},
{
  dataField: 'Customer',
  dataType: 'string',
  width: 150,
},
],
onContentReady(e) {
if (!collapsed) {
  collapsed = true;
  e.component.expandRow(['EnviroCare']);
}
}
  })
});
