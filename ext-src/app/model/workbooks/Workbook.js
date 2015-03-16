Ext.define('xlApp.model.workbooks.Workbook', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'label',
        type: 'string'
    }, {
        name: 'author',
        type: 'string'
    }, {
        name: 'updatedOn',
        type: 'date',
        dateFormat: 'M/d/Y'
    }]
})