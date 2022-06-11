# Load Folders

Install usage: `npm i load-folders`

Example usage: (check the "example" folder.)

```js
const loadFolders = require("load-folders");

(async () => {
    const obj = await loadFolders(`${__dirname}/func`);
    console.log(obj);

    obj.aFolder.runFunc();
})();
```