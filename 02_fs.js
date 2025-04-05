const fs = require ('fs');

fs.readFile('message.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(`Eror: ${err}`);
    }
    else {
        console.log('File content:', data);
        fs.unlink('message.txt', (err) => {
            if (err) {
                console.error('Error deleting file:', err);
              } else {
                console.log('File deleted successfully!');
              }

        });
    }
});

