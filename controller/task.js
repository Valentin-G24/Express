const Task = require('../model/task')

module.exports.createTask = (req,res)=>{
    const task = new Task({
        id: req.body.id,        
        title: req.body.title,
        description: req.body.description,
        start: req.body.start,
        end: req.body.end,
        status: req.body.status,
        geolong: req.body.geolong,
        geolat: req.body.geolat,

    })

    task.save()
    .then((task)=> res.status(201).json({
        mensaje: "Tarea creada",
        task: task,
    }))
    .catch((err)=> res.status(500).json({
        mensaje:"error",
    }))
}