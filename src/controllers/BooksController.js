const db = require('../models/index');

class BooksController {
    // [GET] /books
    index = async (req, res) => {
        try {

            let data = await db.books.findAll(); 
            return res.render('books', {
                data: JSON.stringify(data)
            });
        } catch(err) {
            
            console.log('error');
        }

        // db.find({}, function(err, books) {
        //     if(!err) {
        //         res.json(books);
        //     } else {
        //         console.log('error');
        //     }

        // })
 
    //    res.render('books');
    }

    // [GET] /books/:slug
    show = (req, res) => {
        res.send('Books detail!!!');
    }
}

module.exports = new BooksController();
