// 9/30/25 CSI244 Lecture #3 Node intro
//os module is used for getting information about the  system (memory cpu)
const os = require("os");
//get the platform
const platform = os.platform();
console.log(platform);
//get the architecture
const architecture = os.arch();
console.log(architecture);
const cpus = os.cpus();
console.log(cpus);
//we can get memory 
const memory = os.freemem();
console.log(`Available memory ${memory}`);
