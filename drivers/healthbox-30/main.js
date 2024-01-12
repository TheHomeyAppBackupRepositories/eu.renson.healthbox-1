const { HealthboxApi } = require('./api');

(async () => {
    let x = new HealthboxApi('192.168.30.41');
    const setkey = await x.setAccessKey(''); 
    // const keyset = await x.verifyAccessKey('DrXB-RhW7-e5gl-pvTS-fQ5L')
    // console.log("key", keyset)
})()

