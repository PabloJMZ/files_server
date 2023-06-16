function errorHanddler(error, req, res, next){
    const { status, message } = error;
    res.status(status || 500).send(message);
    //next()
}

module.exports = errorHanddler;