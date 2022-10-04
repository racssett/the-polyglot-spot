import { Country } from "../models/country.js";

function index(req, res){
  Country.find({})
  .then(countries => {
    res.render('countries/index', {
      countries,
      title: "Countries"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function create(req, res){
  req.body.owner = req.user.profile._id
  Country.create(req.body)
  .then(country => {
    res.redirect('/countries')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}


export {
  index,
  create,
}