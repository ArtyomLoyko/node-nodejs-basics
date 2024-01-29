const parseEnv = () => {
    const result = Object.entries(process.env)
        .reduce((acc, [key, value]) => key.includes('RSS_') ? acc.concat(`${key}=${value}`) : acc, [])
        .join('; ')
    console.log(result)
};

parseEnv();