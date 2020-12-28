# html-internationalization-boilerplate

Generating static internationalization html automatically

## Requirements

- [node.js](http://nodejs.org/)
- [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- Git

## Usages

1. Git clone this repo
2. Open terminal and `cd` to the directory
3. Install dependencies by runing `yarn install` or `npm install`
4. Compile views by runing `yarn build` or `npm run build`

After run the script, the output html files are in `dist` directory.

## Directories

- **views**: HTML templates (using: [posthtml-expressions](https://github.com/posthtml/posthtml-expressions#options))
- **locals**: Local language json files
- **dist**: Output directory of HTML

## Adding a XXX Language

1. Add a `XXX.json` file into `locals` dir
2. Add a new script `"build:XXX": "cross-env APP_LANG=XXX parcel build views/**/*.html --out-dir=dist/XXX",` in `package.json` file
3. Run `yarn build` or `npm run build`, and checkout `dist/XXX` directory

## License

MIT
