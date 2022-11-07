const fs = require('fs');
const fsPromises = fs.promises;

const path = require('path');
const sourceDir=path.join(__dirname,'styles');
const targetFile = path.join (__dirname, 'project-dist', 'bundle.css');

fsPromises.open(targetFile, 'w')
    .then(() => {
        fsPromises.readdir(sourceDir)
        .then(files => {
            files.forEach (file => {
                if (path.parse(file).ext === '.css') {
                    const sourceFile = path.join(sourceDir, file);
                    fs.readFile(sourceFile, (err, data) => {
                        if (!err) { 
                            fs.appendFile(targetFile, data,(err) => { return });
                        }
                    })
                }
            })
        })}
    )
    .catch((error)=>{
        console.log(error);
    });
