const song = require("../models/songs");

const router = require("express").Router();

router.get("/getAll", async (req, res) => {
  // const options = {
    
  //   sort: { createdAt: 1 },
   
  // };

  const cursor = await song.find().sort({ createdAt: 1 });
  if (cursor) {
    res.status(200).send({ success: true, data: cursor });
  } else {
    res.status(200).send({ success: true, msg: "No Data Found" });
  }
});

router.get("/getAllFreq", async (req, res) => {
  const options = {
    
    // sort: { createdAt: 1,
    //   frequency: -1 },
   
  };

  const cursor = await song.find({ }).sort({frequency: -1 });
  if (cursor) {
    // console.log(cursor);
    res.status(200).send({ success: true, data: cursor });
  } else {

    res.status(200).send({ success: true, msg: "No Data Found" });
  }
});


router.post("/save", async (req, res) => {
  const newSong = song({
    name: req.body.name,
    imageURL: req.body.imageURL,
    songUrl: req.body.songUrl,
    album: req.body.album,
    artist: req.body.artist,
    language: req.body.language,
    category: req.body.category,
  });
  try {
    const savedSong = await newSong.save();
    res.status(200).send({ song: savedSong });
  } catch (error) {
    res.status(400).send({ success: false, msg: error });
  }
});



router.put("/updateFreq/:songId",async(req,res) =>{
  try{
   
    const song1=await song.findOne({ _id:req.params.songId});
song1.frequency=song1.frequency+1;
await song1.save();
res.json(song1);
  }
  catch(error){
console.log(error);
  }

});


module.exports = router;