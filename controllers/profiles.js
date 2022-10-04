import { Profile } from "../models/profile.js"

function index(req, res){
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
      title: "profiles"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function createLanguage(req, res){
  Profile.findById(req.user.profile._id)
  req.body.owner = req.user.profile._id
  .then(profile => {
    profile.languagesSpoken.push(req.body)
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${req.user.profile._id}`)
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

function show(req, res){
  Profile.findById(req.params.id)
  .then(profile => {
    const isSelf = profile._id.equals(req.user.profile._id)
    res.render('profiles/show', {
      profile,
      title: `${profile.name}'s profile`,
      isSelf,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function deleteLanguage(req, res) {
  Profile.findById(req.user.profile._id)
  .then(profile => {
    profile.languagesSpoken.remove({_id:req.params.id})
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  })
}

// function edit(req, res) {
//   Profile.findById(req.user.profile._id)
//   .then(profile => {
//     res.render('profiles/edit', {
//       profile,
//       title: 'edit',
//     })
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect('/profiles')
//   })
// }

// function updateLanguage(req, res) {
//   for (let key in req.body) {
//     if(req.body[key] === "") delete req.body[key]
//   }
//   Profile.findById(req.params.languageId)
//   .then(profile => {
//     const language = profile.languages.id(req.params.languageId)
//     if(language.owner._id.equals(req.user.profile._id)) {
//       language.set(req.body)
//       profile.save()
//     }
//   })
// }

// function editLanguage (req, res){
//   Profile.findById(req.params.id)
//   .then(profile => {
//     profile.languagesSpoken.filter(language => language._id === req.params.languageId)
//     console.log(req.params.languageId)
//     .then(() => {
//       res.redirect('/profiles/:languageId')
//     })
//   })
// }

export {
  index,
  createLanguage,
  show,
  deleteLanguage as delete,
  // edit,
  // updateLanguage,
  // editLanguage
}