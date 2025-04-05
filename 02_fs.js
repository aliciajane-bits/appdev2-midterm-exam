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

fs.writeFile('message.txt', "Node.js is awesome!", (err) => {
    if (err) {
      console.error('Error creating file:', err);
    } else {
      console.log('The message.txt file has been successfully created!');
    }
});


