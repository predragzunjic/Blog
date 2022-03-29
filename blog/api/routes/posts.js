const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");



//Create
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }
    catch(err){
        res.status(500).json(err);
    }
    
});

//Update
router.put("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);

        if(post.username === req.body.username){
            try{
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set : req.body
                    },
                    {new : true}
                    );
                res.status(200).json(updatedPost);
            }
            catch(err){
                res.status(200).json("You can update only your post");
            }
        }
        else{
            res.status(200).json("You can update only your post")
        }
    }
    catch(err){
        res.status(200).json("You can update only your post");
    }
});

//Delete
router.delete("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);

        if(post.username === req.body.username){
            try{
                await post.delete();
                res.status(200).json("Post has been deleted");
            }
            catch(err){
                res.status(200).json("You can delete only your post");
            }
        }
        else{
            res.status(200).json("You can delete only your post")
        }
    }
    catch(err){
        res.status(200).json("You can delete only your post");
    }
});


//Get 
router.get("/:id", async (req, res) => {
    console.log("tu1");
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }
    catch(err){
        res.status(500).json(err);
    }
});

router.get("/search/:id", async (req, res) => {
    console.log(req.params.id);
    try{
        const post = await Post.find({$or: [
        {"title": new RegExp(req.params.id + '.*')},{"username": {$regex: req.params.id + '.*'}}
        ]});
        res.status(200).json(post);
    }
    catch(err){
        res.status(500).json(err);
    }
});



//Get all
router.get("/", async (req, res) => {
    console.log("tu");
    const username = req.query.user;
    const catName = req.query.cat;
    try{
        let posts;
        if(username){
            posts = await Post.find({username});
        }
        else if(catName){
            posts = await Post.find({
                categories : {$in : [catname]}
            });
        }
        else{
            posts = await Post.find();
        }
        res.status(200).json(posts);
    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;