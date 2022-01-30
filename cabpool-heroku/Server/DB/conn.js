const mongoose = require('mongoose');
const DB = process.env.DATABASE;


mongoose.connect("mongodb+srv://Muneeb:muneebatlas17@cluster0.7bpgf.mongodb.net/Cabpool?retryWrites=true&w=majority", {
    useNewUrlParser: true,
   // useCreateIndex:true,
    useUnifiedTopology: true,
   // useFindAndModify: false
}).then(() => {
    console.log('connection successfull');
}).catch((err) => console.log('no connection'));