const express = require('express');
const fs = require('fs');

const router = express.Router();
const pathRouter = `${__dirname}`;


const removeExtension = (fileName) => {
    return fileName.split('.').shift();
}
fs.readdirSync(pathRouter).filter((file) => {
    const filesWithOutExtensions = removeExtension(file);
    const skipFile = ['index'].includes(filesWithOutExtensions);
    if (!skipFile) {
        router.use(`/${filesWithOutExtensions}`, require(`./${filesWithOutExtensions}`));
        console.log(`LOADED ROUTE ========> localhost:${process.env.PORT}/api/${filesWithOutExtensions}`);
    }
});

router.get('*', (req, res) => {
    res.status(404).json({
        error: "Not Found"
    })
});

module.exports = router;