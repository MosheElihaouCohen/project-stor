
const querystring = require('querystring');
const { Product } = require('../models');

const ExtractQuery = async (req,res)=>{
    try{
    // const [path, qs] = req.url.split('?');
    // const query = querystring.parse(qs);

    // const where = {};

    //     if (query.name) 
    //         where.name = query.name;
    // const results = await Product.findAll({ where });
    //  res.json(results);
res.json("hi moshe");

}catch(err){
       console.error(err);
        res.status(500).json({ error: "DB query failed" });
    }
}






module.exports ={
    ExtractQuery
}