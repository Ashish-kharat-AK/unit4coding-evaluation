


// app.get("/libraries", logger, cP("librarian"),(req, res)=>{
//     try {

//         return res.send(req.word);
//     }catch(e){

//         return res.send(e.message);
//     }
// });

// app.get("/authors", logger, cP("authors"), (req, res)=>{

//     try{

//         return res.send(req.word);

//     }catch(e){

//         return res.send(e.message);
//     }
// });

// function logger(req, res, next) {
//     console.log(req.path);
// }




// function cP(word) {

//     return function (req, res, next) {

//         let path = req.path.split("/")[1];

//         if(word == path){

//             req.datas = { route: req.path, Permission: true};
//             next();

//         }

//         next();
//     };
// }


const express = require("express");

const app = express();

app.use(logger);
app.get("/books",(req,res)=>{
    return res.send({ reouts: req.role,Permission:req.Permission})
});

app.get("/librarias", checkpermission,(req,res)=>{
    return res.send({ reouts: req.role,Permission:req.Permission})
});
app.get("/authors", checkpermission,(req,res)=>{
    return res.send({ reouts: req.role,Permission:req.Permission})
});

function llogger(req, res, next){
    if(req.path =="/books"){
        req.role="/books";
    }else if(req.path =="/librarias"){
        req.role="/librarias";
    }
    else if(req.path =="/authors"){
        req.role="/authors";
    }

}
function cP(word) {

        return function (req, res, next) {
    
            let path = req.path.split("/")[1];
    
            if(word == path){
    
                req.datas = { route: req.path, Permission: true};
                next();
    
            }
    
            next();
        };
    }

    app.listen("4000", ()=>{
        console.log("listening on port 4000");
    });
