Ext.define('app.store.protal_store', {  
   
    extend: 'Ext.data.Store',  
    model: 'app.model.protal_model', 
    pageSize:10, 
    autoLoad: {start:0,limit:10}, 
    proxy:{
        type:"ajax",
        url:"http://localhost:9090/webapi/group/list",
        reader:{
            type:"json",
            totalProperty:"total",
            root:"site"
        }
    },
    fields:[
        {name:"site_name"}
    ]
});