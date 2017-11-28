const express = require("express");
const router = express.Router();
const Ninja = require("./models/ninja");

router.get("/ninjas", (req, res) => {
	res.send({type: "GET"})
});

// router.post("/ninjas", (req, res) => {
// 	Ninja.create(req.body)
// 		.then(ninja => res.send(ninja));
// });

router.post("/ninjas", async (req, res) => {
	try{
		const lol = await Ninja.create(req.body);
		res.send(lol);
	}catch(err){
		res.send(error);
	}
});



router.put("/ninjas/:id", (req, res) => {
	res.send({type: "PUT"})
});

router.delete("/ninjas/:id", (req, res) => {
	res.send({type: "delete"})
});

module.exports = router;
