import { Language } from "../models/language.js"

function index(req, res){
  Language.find({})
  .sort({language : 1})
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

function update(req, res) {
  Language.findById(req.params.id)
  .then(language => {
    if(language.owner.equals(req.user.profile._id)){
      req.body.conjugation = !!req.body.conjugation
      language.updateOne(req.body, { new: true })
      .then(() => {
        res.redirect(`/languages/${language._id}`)
      })
    } else {
      throw new Error ('Not Authorized')
    }
  })
  .catch(err =>{
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

function createTip(req, res) {
  console.log("LANGUAGE ID", req.params.id)
  console.log("REQ.BODY", req.body)
  Language.findById(req.params.id)
  .then(language => {
    language.tips.push(req.body)
    language.save()
    .then(() => {
      res.redirect(`/languages/${language._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  create,
  show,
  edit,
  deleteLanguage as delete,
  update,
  createTip,
}