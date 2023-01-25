const jwt = require( "jsonwebtoken" )
const enums = require( "../json/enums.json" )
const message = require( "../json/message.json" )

const auth = async ( req, res, next ) => {
    const token = req.header( "x-auth-token" )
    const apiAccount = req.header("x-api-account")

    if ( !token ) {
        return res
            .status( enums.HTTP_CODES.NOT_ACCEPTABLE )
            .send( { message: message.NO_TOKEN } )
    }

    if(apiAccount != 71658){
        return res
            .status( enums.HTTP_CODES.BAD_REQUEST )
            .send( { message: message.NO_API_ACC } )
    }

    // verify jwt token
    try {
        jwt.verify( token, process.env.JWT_SECRET_KEY, ( err, decoded ) => {
            if ( err ) {
                return res
                    .status( enums.HTTP_CODES.NOT_AUTHORIZED )
                    .send( { message: err.message } )
            } else {
                req.user = decoded
                if ( !req.user ) {
                    return res
                        .status( enums.HTTP_CODES.NOT_FOUND )
                        .send( { message: message.NO_REQUSER } )
                }
                next()
            }
        } )
    } catch ( err ) {
        return res
            .status( enums.HTTP_CODES.NOT_ACCEPTABLE )
            .send( { message: message.INVALID_TOKEN, error: err.message } )
    }
}

module.exports = {
    auth
}