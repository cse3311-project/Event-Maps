 express = require('express');
const app = express();
const port = 3000;


app.listen(port, () => console.log('listening at port %d', port));

// host static file
app.use(express.static(__dirname));
// app.use(express.static('./public'));
