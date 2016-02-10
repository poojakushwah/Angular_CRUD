var express=require("express");
var bp=require("body-parser");
var fs=require("fs");
var app=express();
app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname));
app.use(bp.json());
/*var data={
	 "heros":[
    {
        "id": 1,
        "movies": 3,
        "title": "Batman",
        "city": "Gothem",
        "power": 8,
        "photo": "images/batman.jpg",
        "movieslist": [
            {
                "sl": 1,
                "title": "Batman Begins",
                "poster": "images/bat1_tn.jpg"
            },
            {
                "sl": 2,
                "title": "Dark Knight",
                "poster": "images/bat2_tn.jpg"
            },
            {
                "sl": 3,
                "title": "Dark Knight Raises",
                "poster": "images/bat3_tn.jpg"
            }
        ]
    },
    {
        "id": 2,
        "movies": 3,
        "title": "Superman",
        "city": "Metropolis",
        "power": 8,
        "photo": "images/superman.jpg",
        "movieslist": [
            {
                "sl": 1,
                "title": "Superman The Movie",
                "poster": "images/super1_tn.jpg"
            },
            {
                "sl": 2,
                "title": "Superman Returns",
                "poster": "images/super2_tn.jpg"
            },
            {
                "sl": 3,
                "title": "Superman Man of Steel",
                "poster": "images/super3_tn.jpg"
            }
        ]
    },
    {
        "id": 3,
        "movies": 3,
        "title": "Ironman",
        "city": "New York",
        "power": 3,
        "photo": "images/ironman.jpg",
        "movieslist": [
            {
                "sl": 1,
                "title": "Ironman",
                "poster": "images/iron1_tn.jpg"
            },
            {
                "sl": 2,
                "title": "Ironman 2",
                "poster": "images/iron2_tn.jpg"
            },
            {
                "sl": 3,
                "title": "Ironman 3",
                "poster": "images/iron3_tn.jpg"
            }
        ]
    },
    {
        "id": 4,
        "movies": 1,
        "title": "Phantom",
        "city": "Bhangala",
        "power": 6,
        "photo": "images/phantom.jpg",
        "movieslist": [
            {
                "sl": 1,
                "title": "The Phantom Slam Evil",
                "poster": "images/phantom1_tn.jpg"
            }
        ]
    },
    {
        "id": 5,
        "movies": 3,
        "title": "Spiderman",
        "city": "New York",
        "power": 8,
        "photo": "images/spiderman.jpg",
        "movieslist": [
            {
                "sl": 1,
                "title": "Spiderman",
                "poster": "images/spider1_tn.jpg"
            },
            {
                "sl": 2,
                "title": "Spiderman 2",
                "poster": "images/spider2_tn.jpg"
            },
            {
                "sl": 3,
                "title": "Spiderman 3",
                "poster": "images/spider3_tn.jpg"
            }
        ]
    }
]
	
};*/
app.get("/",function(req,res){
	res.send();
});
app.get("/heros",function(req,res){
	fs.readFile("data/heros.json",function(error,data){
		res.json(data);
	});
});
app.post("/heros",function(req,res){
var hero2=null;
	fs.readFile("data/heros.json",function(error,data){
		hero2=JSON.parse(data);
		hero2.heros.push(req.body);
		fs.writeFile("data/heros.json",JSON.stringify(hero2),function(){
			console.log("file updated");
			res.json(hero2);
		});
	});	
});
/*app.post("/heros",function(req,res){
	console.log("some one is sending res"+res+"req---"+res.body);
	data.heros.push(req.body);
	res.send(data);
	console.log(data);
	
});*/
app.put("/movies/:id",function(req,res){
	/*console.log(req.body);
	data.heros[req.params.id-1].movieslist.push(req.body);
	res.send(data);*/
	var id=req.params.id;
	var hero1=null;
	fs.readFile("data/heros.json",function(error,data){
		hero1=JSON.parse(data);
		console.log(req.params.id-1);
		hero1.heros[req.params.id-1].movieslist.push(req.body);
		fs.writeFile("data/heros.json",JSON.stringify(hero1),function(){
			res.json(hero1);
		});
	});	
	

});
app.listen(1234);
console.log("Server is running");
