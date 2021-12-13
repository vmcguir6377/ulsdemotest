const express = require('express');
const app = express();


/*app.use(express.static('public'));*/
/*app.use(express.static(path.join(__dirname, './')));*/



/*app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));*/
 
app.listen(3001, () => {
    console.log(`Server running at port 3001!`);
  });