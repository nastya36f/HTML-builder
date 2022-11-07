const path = require ('path');
const fs = require ('fs');
const readline= require ('readline');
const { stdin, stdout, stderr } = process;
stdout.cursorTo(0);
fs.open(path.join(__dirname, 'text.txt'), 'w', err => {
    if (err) throw err;
    console.log('Enter the date:')
})

stdin.on('data', data => {
    if ((data.toString().trim()) === 'exit') {

        stdout.write('Удачи в изучении Node.js!');
        process.exit();
    } else {
        fs.appendFile(
            path.join(__dirname, "text.txt"),
            data,
            err => { if (err) throw err; }
        );
    }
});

process.on('SIGINT', () => {
    readline.cursorTo(process.stdout, 0);
    stdout.write('Удачи в изучении Node.js!');
    process.exit();
});
