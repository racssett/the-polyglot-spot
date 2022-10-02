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

export {
  index,
}