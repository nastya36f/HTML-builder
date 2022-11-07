const sourceFolder = 'files/';
const targetFolder = 'files-copy/';
const fs = require('fs');

const path = require('path');
const sourceDir=path.join(__dirname,sourceFolder);
const targetDir=path.join(__dirname,targetFolder);

function copyDirectory() {
  fs.rm(targetDir,{recursive: true, force: true}, ()=> { 
    fs.mkdir(targetDir,{recursive: true},()=>{
      fs.readdir(sourceDir, (err, files) => {
        files.forEach(file => {
          fs.copyFile(path.join(sourceDir,file),path.join(targetDir,file), (err)=>{ return;
          });
        });
      });
    })
   })
};

copyDirectory();