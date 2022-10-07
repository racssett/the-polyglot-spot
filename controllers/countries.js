import { Country } from "../models/country.js";

function index(req, res){
  Country.find({})
  .sort({country : 1})
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

function show(req, res){
  Country.findById(req.params.id)
  .populate("owner")
  .then(country => {
    console.log(country)
    res.render('countries/show', {
      country,
      title: 'Country'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function edit(req, res) {
  Country.findById(req.params.id)
  .then(country => {
    res.render('countries/edit', {
      country,
      title: "edit"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function update(req, res) {
  Country.findById(req.params.id)
  .then(country => {
    if(country.owner.equals(req.user.profile._id)){
      country.updateOne(req.body, { new: true })
      .then(() => {
        res.redirect(`/countries/${country._id}`)
      })
    } else {
      throw new Error ('Not Authorized')
    }
  })
  .catch(err =>{
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  create,
  show,
  edit,
  update,
}