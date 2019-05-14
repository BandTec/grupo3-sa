const Nexmo = require('nexmo');

module.exports= function(msg){

    console.log(msg);


    
    const Nexmo = require('nexmo');
    const nexmo = new Nexmo({
      apiKey: '553285e4',
      apiSecret: '9nOaFUbsmL2pbfX8'
    })
    
    const from = 'Nexmo'
    const to = '5511967134307'
    const text = msg    

    nexmo.message.sendSms(from, to, text)
         

}



