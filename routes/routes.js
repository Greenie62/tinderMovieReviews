const router=require('express').Router();
const axios=require('axios');
const param=require('jquery-param')

let authenticated=false;
router.get("/auth",(req,res)=>{
    authenticated=false;
    res.send(authenticated)
})


router.post('/submitUser',(req,res)=>{
   
    if(req.body.username === "justin" && req.body.password === "climb"){
        authenticated=true;
    }
    res.send(authenticated)
})

router.post('/movie',(req,response)=>{
 var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json"

      
        var obj={
            
            'api-key': "78b0aed9d6264a96be8f4e77462a0815",
            'query': req.body.title,
            
          }
        let str=param(obj);
      //   url += "q=Terminator"
         url += '?' + str;
        
console.log(url)
    axios.get(url).then(res=>{
        var movie={}
        
    
    console.log("Results: " +res.data.results[0])
            movie.title=res.data.results[0].display_title || "No movie found"
            movie.summary=res.data.results[0].summary_short || ""
            movie.rating=res.data.results[0].mpaa_rating || ""
            movie.link=res.data.results[0].link.url || ""
        
            response.send(movie)
            console.log(movie) 
        
        
    }).catch(err=>console.log(err))
    
 
    
  
        

})




module.exports=router;