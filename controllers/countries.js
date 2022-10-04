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

export {
  index
}