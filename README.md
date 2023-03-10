# Developer at Droppe - React refactoring task

## Updates:

- ๐งฉ **Fixed Code Formatting** by setting up a pre-commit hook with husky, prettier and lint-staged. See `fix-code-format` branch for changes.

- ๐งน **Removed ShopApp constructor** by refactoring the state, fetch extracted into seperate function and updated favClick, onSubmit methods. See `fix-shop-constructor` branch for changes.

- ๐ **Simplified the onClick functions** into arrow functions in `shop-app.tsx`. See `fix-on-click` branch for changes.

- โญ๏ธ **Fix fav click method** by renaming the method, variables into meaningful names. Replaced `lodash.findIndex` with `Array.prototype.findIndex`. See `fix-fav-click` branch for changes.

- ๐ **Fix on submit method** by renaming the method, merging multiple setStates into a single one, replaced `lodash` methods with native js methods and extracted fetch into a seperate function. See `fix-on-submit` branch for changes. 

- ๐ผ **Created a Product Model** by creating an interface and replacing it in the `shop-app.tsx`. See `add-product-model` branch for changes. 

- ๐๏ธ **Extracted header into a separate file** to clean up the `shop-app.tsx`. See `add-header` branch for changes. 

- ๐ **Extracted images container into a seperate component** to clean up the `shop-app.tsx`. See `add-image-container` branch for changes.

- ๐ **Fixed modal component** in `shop-app.tsx` by removing unnecessary divs and code. See `fix-modal` branch for changes.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you canโt go back!**

If you arenโt satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point youโre on your own.

You donโt have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldnโt feel obligated to use this feature. However we understand that this tool wouldnโt be useful if you couldnโt customize it when you are ready for it.
