class BaseError extends Error {
    constructor(name , statusCode , message , detail){
        super(message);
        this.name = name;
        this.detail = detail;
        this.statusCode = statusCode;
        
    }
}

module.exports = BaseError;