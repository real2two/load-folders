const loadFolders = require("load-folders");

(async () => {
    const obj = await loadFolders(`${__dirname}/func`);
    console.log(obj);

    obj.aFolder.runFunc();
})();