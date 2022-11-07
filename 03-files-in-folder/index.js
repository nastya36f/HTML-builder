const fs = require ('fs');
const path = require ('path');
const dirName = path.join(__dirname, 'secret-folder');

fs.readdir(dirName, (err, files) => {
    if (err) {
        throw err
    } else {
        for ( let i = 0; i < files.length; i++) {
            if (path.parse(files[i]).ext) {
                let size;
                fs.stat(path.resolve(__dirname, 'secret-folder', path.parse(files[i]).base), (err, stat) => {
                    const str = path.parse(files[i]).name + ' - '
                                + path.parse(files[i]).ext.slice(1) + ' - '
                                + stat.size + 'b';
                    console.log(str);
                });
            }
        }
    }
});
