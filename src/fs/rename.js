import fs from 'fs'

const rename = async () => {
    const wrongFilename = new URL('files/wrongFilename.txt', import.meta.url)
    const properFilename = new URL('files/properFilename.md', import.meta.url)

    const content = await fs.promises.readFile(wrongFilename).catch(err => {
        throw new Error('FS operation failed') 
    })
    await fs.promises.writeFile(properFilename, content, { flag: 'wx' }).catch(err => {
        throw new Error('FS operation failed') 
    })
    await fs.promises.rm(wrongFilename)
};

await rename();