const express= require ('express')
const cors= require ('cors')
const env=require('dotenv')

const pool= require("./modules/db")
const app=express()
env.config();

app.use(cors())
app.use(express.json())





//routes
//create item//
app.post("/tracker", async(req,res) => {
  try {
    const {exercise,repetition,weight,duration,date}= req.body
    console.log(req.body)
    const newTrackerList= await pool.query("INSERT INTO trackerlist (exercise,repetition,weight,duration,date) VALUES($1,$2,$3,$4, $5) RETURNING *", [exercise,repetition,weight,duration,date])
    res.status(200).json({
      status: "success",
      results: newTrackerList.rows.length,
      data: {
        trackerItem: newTrackerList.rows[0],
      },
    })
  } catch(err) {
    console.error(err.message)

  }
})

//to get all tracker item//

app.get("/tracker", async (req, res) => {
  try {
    const allTrackerItem = await pool.query("SELECT * FROM trackerlist");
    res.status(200).json({
      status: "success",
      results: allTrackerItem.rows.length,
      data: {
        trackerItem: allTrackerItem.rows,
      },
    });
  } catch (err) {
    console.error(err.message);
  }
});




//delete item//
app.delete("/tracker/:id", async(req,res) => {
  try {
    
    const deleteTrackerItem= await pool.query("DELETE from trackerlist where id=$1", [req.params.id])
    res.status(204).json("deleted")
  
  }catch (err) {
    console.log(err.message)
  }
})

//get a tracker//
app.get("/tracker/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const tracker = await pool.query("SELECT * FROM trackerlist WHERE id = $1", [
      id
    ]);

    res.status(200).json({
      status: "succes",
      data: {
        trackerItem: tracker.rows[0],
        
      },
    });
  } catch (err) {
    console.error(err.message);
  }
});

//to update the tracker item//
app.put("/tracker/:id", async(req,res) => {
  try {
    const id = parseInt(req.params.id);
    const {exercise,repetition,weight,duration,date}= req.body

    const updateTrackerItem= await pool.query("UPDATE trackerlist SET exercise= $1, repetition=$2, weight=$3 ,duration=$4, date=$5 WHERE id=$6 returning *",[ exercise,repetition,weight,duration,date,id])
    res.status(200).json({
      status: "succes",
      data: {
        trackerItem: updateTrackerItem.rows[0],
        
      },
    });
  

  }catch(err) {
    console.log(err.message)
  }
})

//create contact//
app.post("/contactform", async(req,res) => {
  try {
    const {firstname,lastname,email,message}= req.body
    console.log(req.body)
    const contactFormDetails= await pool.query("INSERT INTO contactform (firstname,lastname,email,message) VALUES($1,$2,$3,$4) RETURNING *", [firstname,lastname,email,message])
    

    res.status(200).json({
      status: "success",
      results: contactFormDetails.rows.length,
      data: {
        contactItem: contactFormDetails.rows[0],
      },
    })
  } catch(err) {
    console.error(err.message)

  }

  
})



app.listen(process.env.PORT, ()=> {
  console.log("listening on port" + process.env.PORT)
})