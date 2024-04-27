 
const jwt = require('jsonwebtoken')
const User = require('../model/userModel.js');

const authMiddleware = async (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader )
    {
        return res.status(403).json({});

    }
  
    const token = authHeader.split(' ')[1];

    try {

        const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
        
        const user = await User.findById(decoded.userId);
    
        if (!user) {
            return res.status(401).json({ error: 'Access denied. Invalid token.' });
        }
    
        
        req.userId = decoded.userId;

        next();
        
    } catch (error) {


        return res.status(403).json({});

        
    }
}


module.exports = {
    authMiddleware
}
