//change to work with tech blog routes!!!

const router = require("express").Router();
const  {} = require("../models");
const withAuth = require("../utils/auth");
const {User, Post} = require("../models/");



router.get("/", async (req, res)=> {
    console.log("home", req.session)
    const postData = await Post.findAll({})
    
    const userPost = postData.map((post)=> post.get({plain: true}));
console.log(animals,"loginstatus",req.session.user_id)
res.render("homepage", {
    posts,
    logged_in: req.session.user_id 
});

})

router.get("/login", async (req, res) => {
    if (req.session.logged_in) {
        res.redirect("/")
    }
    res.render("login")
})

router.get("/addPost", withAuth, async (req,res) => {
    res.render("addPost", {logged_in: req.session.logged_in})
    console.log("post added")
})


// router.get("/adoptme", withAuth, async (req,res) => {
//     const userData = await User.findOne({where: {id: req.session.user_id}})
//     //if (userData) {
//     const userName = userData.get({plain:true})
//     console.log("adopt me", userName)
//     res.render("adoptme", userName)
//     //}
// }
// )

router.get("/profile", withAuth, async (req,res) => {
    const postData = await Posts.findAll({where: {user_id: req.session.user_id}})
    const posts = postData.map((post)=>{return animal.get({plain:true})})
    res.render("profile", {posts, logged_in: req.session.logged_in})


})

router.get("/edit/:id", withAuth, async (req,res) => {
    try {
        const postData = await Posts.findByPk(req.params.id,{

        })
        const post = postData.get({plain:true})
res.render("edit", {post, logged_in: req.session.logged_in})
    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = router;