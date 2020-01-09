const express = require('express');
const router  = express.Router();
const Place = require('../models/place');


/* GET places page */
router.get ('/', (req, res,next) =>{
  Place.find() 
  .then(places => {
    console.log(places);
      res.render('index-places', {
        places
      } );
    })
    .catch (error => console.log (error))
})

// Book POST Create
router.get ('/add-place', (req, res,next) =>{
  res.render('add-place');
})

router.post('/add-place', (req,res, next) =>{
    const {name, longitude, latitude, typePlace} = req.body;

    const newPlace = {
      name: name,
      type:typePlace,
      location: {
        type: 'Point',
        coordinates: [longitude,latitude]
      }
    }
    
    Place.create(newPlace)
    .then(res.redirect('/'))
    .catch (error=> next(error))
  });
  
router.get ('/:id', (req, res,next) =>{
  Place.findById(req.params.id) 
  .then(place => {
    console.log(places);
      res.render('index-places', {
        places
      } );
    })
    .catch (error => console.log (error))
})
  

  //POST book edit form
  
  // router.post ('/edit-place/:placeId', (req,res,next) => {
  //   const {_id, ...place} = req.body   // desconstrói o req.bod, armazena o id dele na variável _id e o restante do objeto em book
  //   Place.findByIdAndUpdate(_id, book)
  //   .then(_ => res.redirect('/places'))
  //   .catch (error => next(error))
  // })
  
  
//   //GET Delete book
  
//   router.get ('/delete-book', (req,res,next) =>
//   const {_id, ...book} = req.body   // desconstrói o req.bod, armazena o id dele na variável _id e o restante do objeto em book
//   Book.findByIdAndDelete (_id, ...book)
  
//   )
  
  
//   // GET Book details 
//   router.get ('/books/:bookId', (req, res, next) =>{
//     let {             //desconstrução do objeto
//       bookId
//     } = req.params;
    
//     Book.findById(bookId) 
//     .then(book => {
//       console.log(book);
//       // res.send(book);
//       res.render('details-books', {
//         book
//       });
//     })
//     .catch (error => console.log (error))
// })

// //Book POST Create


module.exports = router;
