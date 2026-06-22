import express from 'express'

const router= express.Router();

// Home Page
router.get("/",(req,res)=>{
    res.render('home')
})

// About Page
router.get("/about",(req,res)=>{
    res.render('about')
})

// Blogs Page
// router.get("/blogs",(req,res)=>{
//     res.render('blogs')
// })
router.get("/blogs/:id",(req,res)=>{
    const id=req.params.id;
    res.render('blogs',{
        blogId: id
    });
})

export default router;