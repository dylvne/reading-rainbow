import mongoose from 'mongoose';
//mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function() {
  // we're connected!
    const bookSchema = new mongoose.schema({
        title:String,
        authors: String,
        description: String,
        image:String,
        link: String
    });

    const book = mongoose.model('book',bookSchema)


//});

    export default book;