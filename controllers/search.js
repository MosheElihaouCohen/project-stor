
const querystring = require('querystring');

const ExtractQuery =((req,res)=>{
    const [path, qs] = req.url.split('?');
    const query = querystring.parse(qs);

    
    
})






module.exports ={
    ExtractQuery
}