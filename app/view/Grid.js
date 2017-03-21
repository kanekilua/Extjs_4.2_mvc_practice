Ext.define('app.view.Grid' , {  
   
    extend: 'Ext.grid.Panel',  
    alias : 'widget.sitelist',   
    title : 'protla_portlet',  
    store: 'protal_store',
    columns: [ 
        {
            xtype: 'rownumberer',
            //这里可以设置你的宽度
            width: 50,
            sortable: false
        },{
            header:"Active Site",
            dataIndex:"site_name"
        }
    ],
    forceFit:true,
    bbar:{
        xtype:"pagingtoolbar",
        store:'protal_store',
        displayInfo:true,
        displayMsg:"Displaying {0} - {1} of {2}",
        emptyMsg:"empty~"
    }
});  