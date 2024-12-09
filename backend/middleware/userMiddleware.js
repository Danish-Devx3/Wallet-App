const jwt = require('jsonwebtoken');

const authMiddleware = (req ,res,next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader||!authHeader.starstWith('Bearer ')){
        return res.status(403).json('')
    }

    const token = authHeader.split(' ')[1];

    try{
        const decoded = jwt.verify(token, 'ssss')

        if(decoded.userId){
            req.userId = decoded.userId
        }else{
            return res.status(403).json('')
        }
    }catch(err){
        return res.status(403).json('')
    }
}

module.exports= {
    authMiddleware 
}