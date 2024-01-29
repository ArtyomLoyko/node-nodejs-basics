import fs from 'fs'

const list = async () => {
    const filesDirname = new URL('files', import.meta.url)

    const files = await fs.promises.readdir(filesDirname).catch(err => {
        throw new Error('FS operation failed') 
    });
    
    console.log(files)
};

await list();