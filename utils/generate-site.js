const fs = require('fs');
const { copyFile } = require('fs');



function generateHTML() {
  const generateHTML = `<!DOCTYPE html>
<html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
 </head>
 <body>
     <h4>look at this</h4>
 </body>
 </html>`;
}


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