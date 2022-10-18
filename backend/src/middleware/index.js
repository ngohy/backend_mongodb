const jwt = require('jsonwebtoken')
let verifyToken = async (req, res, next) => {
    const authHeader = req.header('Authorization')
    if (!authHeader) {
        return res.status(400).json({
            status: 'error',
            elements: 'Missisng Token',
            code: 400
        })
    }

    let authorization = authHeader.split(' ');
    if (authorization[0] !== 'Bearer') {
        return res.status(400).json({
            status: 'error',
            elements: 'Invalit Token split authorization',
            code: 400
        })
    }

    const isCheckToken = await tokenControl.verifyToken(req.body || req.query)
    if (!isCheckToken) {
        return res.status(401).json({
            status: 'error',
            elements: 'invalid Token',
            code: 401
        })
    }
    const token = authHeader && authHeader.split(' ')[1]
    if (!token)
        return res.status(401).json({ success: false, message: 'Access token not found' })

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    req.userId = decoded.userId


    next()
}

module.exports = { verifyToken }
