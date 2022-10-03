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
  req.body.owner = req.user.profile._id
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
  .populate("owner")
  .then(language => {
    console.log(language)
    res.render('languages/show', {
      language,
      title: 'Language'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/languages')
  })
}

function edit(req, res) {
  Language.findById(req.params.id)
  .then(language => {
    res.render('languages/edit', {
      language,
      title: "edit"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/languages')
  })
}

function deleteLanguage(req, res){
  Language.findById(req.params.id)
  .then(language => {
    if (language.owner.equals(req.user.profile._id)) {
      language.delete()
      .then(() => {
        res.redirect('/languages')
      })
    } else {
      throw new Error ("Please do not attempt to delete other user's languages")
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/languages')
  })
}

export {
  index,
  create,
  show,
  edit,
  deleteLanguage as delete,
}