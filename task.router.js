const express = require("express");
const router = express.Router();
const tasks = require("./MOCK_DATA.json");
const taskController = require("./controller/task");


router.get("/", (req, res) => {
  //res.send("tareas");
  res.status(200).json(tasks);
});

router.get("/:id", (req, res) => {
  let tarea = tasks.find((task) => {
    return task.id == req.params.id;
  });
  res.status(200).json(tarea);
});

router.post("/", taskController.createTask);

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const {nombre, descripcion} = req.body;
  
  const tarea = tasks.find((task) => task.id == id );

  if(tarea){
    if(nombre) tarea.nombre = nombre;
    if(descripcion) tarea.descripcion = descripcion;

    res.status(200).json({mensaje: "tarea actualizada", tarea})

  }
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const tarea = tasks.find((task) => task.id == id);

  tasks.splice(id,1);

  res.status(200).json({ mensaje: `Tarea con ID ${id} eliminada`});

});

module.exports = router;
