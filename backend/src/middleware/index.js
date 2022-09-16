let self = module.exports = {
    
    verifyToken: async (req, res, next) => {
        if (!req.headers['authorization']) {
            return res.status(400).json({
                status: 'error',
                elements: 'Missisng Token',
                code: 400
            })
        }

        let authorization = req.headers['authorization'].split(' ');
        if (authorization[0] !== 'Bearer') {
            return res.status(400).json({
                status: 'error',
                elements: 'Invalit Token split authorization',
                code: 400
            })
        }

        const isCheckToken = await tokenControl.verifyToken(req.body || req.query)
        if(!isCheckToken){
            return res.status(401).json({
                status: 'error',
                elements: 'invalid Token',
                code: 401
            })
        }
        next()
    },
    //check expried time webservice
}