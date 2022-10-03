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

// function create(req, res){
//   req.body.owner = req.user.profile._id
//   req.body.conjugation = !!req.body.conjugation
//   Language.create(req.body)
//   .then(language => {
//     res.redirect('/languages')
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect('/languages')
//   })
// }

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

// function edit(req, res) {
//   Language.findById(req.params.id)
//   .then(language => {
//     res.render('languages/edit', {
//       language,
//       title: "edit"
//     })
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect('/languages')
//   })
// }

// function update(req, res) {
//   Language.findById(req.params.id)
//   .then(language => {
//     if(language.owner.equals(req.user.profile._id)){
//       req.body.conjugation = !!req.body.conjugation
//       language.updateOne(req.body, { new: true })
//       .then(() => {
//         res.redirect(`/languages/${language._id}`)
//       })
//     } else {
//       throw new Error ('Not Authorized')
//     }
//   })
//   .catch(err =>{
//     console.log(err)
//     res.redirect('/languages')
//   })
// }

// function deleteLanguage(req, res){
//   Language.findById(req.params.id)
//   .then(language => {
//     if (language.owner.equals(req.user.profile._id)) {
//       language.delete()
//       .then(() => {
//         res.redirect('/languages')
//       })
//     } else {
//       throw new Error ("Please do not attempt to delete other user's languages")
//     }
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect('/languages')
//   })
// }

export {
  index,
  // create,
  show,
  // edit,
  // deleteLanguage as delete,
  // update,
}