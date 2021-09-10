const Bibliography = require("../models/Bibliography");
const BibliographyType = require("../models/BibliographyType")

async function getBibliographys(req, res) {
    Bibliography.find()
        .then(doc => res.json(doc))
        .catch(err => console.error(err))
}

async function getBibliographyById(req, res) {
    Bibliography.findOne({ _id: req.params.id })
        .then(doc => res.json(doc))
        .catch(err => console.error(err))
}

async function addBibliography(req, res) {
    const {
        author,
        title,
        edition,
        description,
        copies,
        stock,
        keywords,
        subjects,
        type
    } = req.body;

    if (author &&
        title &&
        edition &&
        description &&
        copies &&
        stock &&
        keywords &&
        subjects &&
        type) {
        BibliographyType.findOne({ type: "magazine" })
            .then(doc => res.json(doc))
            .catch(err => console.error(err))
            //const data = new Bibliography({ frecuency, copies, bibliography });
        data.save()
            .then(doc => res.json(doc))
            .catch(err => console.error(err))
    } else {
        res.status(400).json({ error: "Missing parameters" })
    }
}

async function editBibliography(req, res) {
    const { frecuency, copies, bibliography } = req.body;
    if (frecuency, copies, bibliography) {
        Bibliography.findByIdAndUpdate(req.params.id, { frecuency, copies, bibliography })
    } else {
        res.status(400).json({ error: "Missing parameters" })
    }
}

async function deleteBibliography(req, res) {
    Bibliography.findByIdAndDelete(req.params.id)
        .then(doc => res.json(doc))
        .catch(err => console.error(err))
}

module.exports = {
    getBibliographys,
    getBibliographyById,
    addBibliography,
    editBibliography,
    deleteBibliography
}