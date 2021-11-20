const db = require('../models/index');

class BorrowController {
    // [GET] /borrow
    index = async(req, res) => {

        try {

            let data = await db.borrow_books.findAll(); 
            return res.render('borrow', {
                data: JSON.stringify(data)
            });
        } catch(err) {
            
            console.log('error');
        }

        // res.render('borrow');
    }

    // [GET] /borrow/:slug
    show(req, res) {
        res.send('borrow books detail!!!');
    }
}

module.exports = new BorrowController();
