import fs from "fs";

fs.readFile("../apps/api/package.json", "utf-8", (err, data) => {
	const pj = JSON.parse(data);

	console.log(pj.dependencies);
});
