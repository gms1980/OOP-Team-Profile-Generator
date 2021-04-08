const fs = require('fs');
const { copyFile } = require('fs');



const writeFile = fileContent => {
    return new Promise((resolve, reject) =>{
        //if there's an err, reject the Promise and send the error to the promise's `.catch()` method
        if (err) {
            reject(err);
            // return out fo the function here to makke sure the Promise doesn't accidently execute the resole() function as well
            return;
        }
        // if everything went well, resolve the Promise and send the success data to the `.then()` method
    resolve({
        ok: true,
        message: 'File created!'

    });
    });
};

const copyfile = fileContent => {
    return new Promise((resolve, reject) => {
        if (err) {
            reject(err);
            return;
        }
    resolve({
        ok: true,
        message: 'file created'
    });
    });
}

module.exports = {writeFile, copyfile: copyFile};