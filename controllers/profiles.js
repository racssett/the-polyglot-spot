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
  .then(profile => {
    profile.languagesSpoken.push(req.body)
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${req.use.profile._id}`)
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

export {
  index,
  createLanguage,
  show,
}