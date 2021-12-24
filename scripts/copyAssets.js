const fs = require('fs');

const paths = {
	dist: {
		root: './dist',
		assets: './dist/assets',
	},
	src: {
		imageAssets: './src/assets/img',
		jsonAssets: './src/assets/json',
		logoAssets: './src/assets/logos',
	},
};

if (!fs.existsSync(paths.dist.root)) {
	fs.mkdirSync(paths.dist.root);
}

if (!fs.existsSync(paths.dist.assets)) {
	const imageAssets = fs.readdirSync(paths.src.imageAssets);
	const jsonAssets = fs.readdirSync(paths.src.jsonAssets);
	const logoAssets = fs.readdirSync(paths.src.logoAssets);

	fs.mkdirSync(paths.dist.assets);

	for (const asset of imageAssets) {
		fs.copyFileSync(`${paths.src.imageAssets}/${asset}`, `${paths.dist.assets}/${asset}`);
	}

	for (const asset of jsonAssets) {
		fs.copyFileSync(`${paths.src.jsonAssets}/${asset}`, `${paths.dist.assets}/${asset}`);
	}

	for (const asset of logoAssets) {
		fs.copyFileSync(`${paths.src.logoAssets}/${asset}`, `${paths.dist.assets}/${asset}`);
	}
}
