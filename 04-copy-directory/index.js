const fs = require ('fs');
const path = require ('path');


function copyDir () {
    fs.readdir(__dirname, (err, files) => {
        if (err) {
            throw err;
        } else {
            if (files.includes('files-copy')) {
                console.log('Папка уже существует');
            } else {
               fs.mkdir(path.join(__dirname, 'files-copy'), {recursive: false}, err => {
                if (err) {
                    throw err;
                }
               })
            }
        }
        
    })
}

copyDir();