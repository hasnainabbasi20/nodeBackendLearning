import express from "express"
const app = express()
const PORT  ="4000"

// app.get('/',(req , res)=>{
//      console.log(req)

//      res.send("Hello it's my first API")
// })

// app.listen(PORT,()=> console.log("API is running on PORT" + PORT))


  const taskDb=[
    {
      id : 1 ,
        title : "Task 1",
        description : "This is task 1",
        status : "completed"
  },
  {
    id : 2 ,
    title : "Task 2",
    description : "This is task 2",
    status : "completed"

    },
    {
        id : 3 ,
        title : "Task 3",
        description : "This is task 3",
        status : "completed"
  }

  ]

 app.get('/',(req , res)=>{
         res.status(200).send(taskDb)
 })
 app.post('/',(req , res)=>{
    res.send("task created")
})
app.put('/',(req , res)=>{
    res.send("task updated")
})
app.delete('/',(req , res)=>{
    res.send("task deleted")
})

app. listen(PORT, ()=> console.log("API is running on PORT" + PORT))