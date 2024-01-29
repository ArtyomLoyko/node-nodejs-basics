import fs from 'fs'

const remove = async () => {
    const filePath = new URL('files/fileToRemove.txt', import.meta.url)

    await fs.promises.rm(filePath).catch(err => {
        throw new Error('FS operation failed') 
    })
};

await remove();