const httpError = (res, err) => {
    console.log(err);
    res.status(500).json({message: "Algo salio mal, comunicate con el de sistemas", err});
};

module.exports = {
    httpError
}