import fs from 'fs'

const copy = async () => {
    const dirPath = new URL('files', import.meta.url)
    const copyDirPath = new URL('files_copy', import.meta.url)

    await fs.promises.cp(dirPath, copyDirPath, { errorOnExist: true, force: false, recursive: true }).catch(err => { 
        throw new Error('FS operation failed') 
    })
};

await copy();
