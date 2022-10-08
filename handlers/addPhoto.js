import * as pathUtil from 'path';
import fs from 'fs';

const __dirname = pathUtil.resolve(".");

const photosDir = pathUtil.join(__dirname,"data","photos");

import {promisify} from 'util';
const mkdir = promisify(fs.mkdir);
const unlink = promisify(fs.unlink);

async function copy(oldPath, newPath) {
    const readStream = fs.createReadStream(oldPath);
    const writeStream = fs.createWriteStream(newPath);

    readStream.on('error', (err)=>res.status(500).send({error}));
    writeStream.on('error', (erorr)=>res.send(500).send({error}));

    await readStream.on('close', async function () {
        await unlink(oldPath);
    });

    readStream.pipe(writeStream);
}

export const processPhoto = async (req, res, fields, files) => {
    console.log('field data: ', fields)
    console.log('files: ', files)
    const photo = files.photo[0];
    const dir = photosDir + '/' + Date.now();
    const path = dir+'/'+photo.originalFilename;
    await mkdir(dir);
    await copy(photo.path,path);

    res.send({result:"Success"});
}