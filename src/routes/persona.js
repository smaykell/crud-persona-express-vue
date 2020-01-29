const router = require("express").Router()
const Persona = require("../models/Persona")

router
    .get("/personas", async (req, res) => {
        const response = await Persona.findAll()
        res.json(response)
    })

    .get("/persona/:id", async (req, res) => {
        const response = await Persona.findOne({ where: { id: req.params.id } })
        if (response) {
            res.json(response)
        } else {
            res.json({ message: "Persona no existe" })
        }
    })

    .post("/persona", async (req, res) => {
        console.log(req.body)
        const { dni, apellidos, nombres, fecha_nacimiento, peso, altura } = req.body
        try {
            if (dni && apellidos && nombres && fecha_nacimiento && peso && altura) {
                await Persona.create({ dni: dni, apellidos: apellidos, nombres: nombres, fecha_nacimiento: fecha_nacimiento, peso: peso, altura: altura })
                const response = await Persona.findOne({ where: { dni: dni } })
                res.json(response)
            } else {
                res.json({ message: "Faltan campos." })
            }
        } catch (e) {
            console.error(e)
            res.json({ message: "No se pudo insertar." })
        }
    })

    .put("/persona/:id", async (req, res) => {
        const id = req.params.id
        const { dni, apellidos, nombres, fecha_nacimiento, peso, altura } = req.body
        const response = await Persona.update({ dni: dni, apellidos: apellidos, nombres: nombres, fecha_nacimiento: fecha_nacimiento, peso: peso, altura: altura }, { where: { id: id } })
        if (response == 1) { res.json({ message: "ok" }) }
        else if (response == 0) { res.json({ message: "error" }) }
    })

    .delete("/persona/:id", async (req, res) => {
        const id = req.params.id
        const persona = await Persona.findOne({ where: { id: id } })
        if (persona) {
            await persona.destroy()
            res.json({ message: "ok" })
        } else {
            res.json({ message: "Persona no encontrada." })
        }
    })

module.exports = router