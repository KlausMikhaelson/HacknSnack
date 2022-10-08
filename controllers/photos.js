import multiparty from 'multiparty';
import {processPhoto} from '../handlers/addPhoto.js';


export const addPhoto = (req, res) => {
    res.render('add-photo-form');
}

export const doAddPhoto = (req, res) => {
    console.log(req.body);
    const form = new multiparty.Form();
    form.parse(req, (err, field, files) => {
        if(err) return res.status(500).send({ error: err.message });
        processPhoto(req, res, field, files);
    })
}

export const mainPage = (req, res) => {
    res.render('index');
}



// module.exports = {
//     addPhoto,
//     doAddPhoto
// }