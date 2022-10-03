import { Language } from "../models/language.js"

function index(req, res){
  Language.find({})
  .then(languages => {
    res.render('languages/index', {
      languages,
      title: "Languages"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function create(req, res){
  req.body.conjugation = !!req.body.conjugation
  Language.create(req.body)
  .then(language => {
    res.redirect('/languages')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/languages')
  })
}

function show(req, res){
  Language.findById(req.params.id)
  .then(language => {
    console.log(language)
    res.render('languages/show', {
      language,
      title: 'Language'
    })
  })
  .catch(err => {
    console.log(err)
    res.render('/languages')
  })
}

export {
  index,
  create,
  show,
}