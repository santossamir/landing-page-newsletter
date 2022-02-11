# landing-page-newsletter

Esse projeto consiste no desenvolvimento do layout de uma landing page com uma grade de produtos e um
formulário de newsletter. Com isso, fizemos a funcionalidade focado no ReactJS. Para preencher a página
com as informações dos produtos, consultamos uma API de forma paginada, sendo que cada página consultada
retorna as informações de 8 produtos e um link para a próxima página. Assim que obtemos os dados,
implementamos, para cada produto retornado pela API, um card de produto com as respectivas informações
apresentadas na grade; ao clicarmos no botão "Mais produtos aqui!" a próxima página da API é consultada,
gerando mais 8 produtos na grade que já existe, abaixo dos produtos já carregados pela primeira requisição
e quando clicamos no mesmo botão, só que agora como "Ver menos produtos", retornamos a primeira API
carregada como no início; e o formulário de newsletter ("Compartilhe a novidade") tem seus campos de input
validados de acordo com o conteúdo.

![Captura de tela de 2022-02-10 21-40-36](https://user-images.githubusercontent.com/88064533/153520750-4a1c7c0b-9884-45ab-8fb8-645f900e70de.png)
![Captura de tela de 2022-02-10 21-40-54](https://user-images.githubusercontent.com/88064533/153520807-3d16e645-b5e8-4ac4-98ba-51a7968cdcda.png)
![Captura de tela de 2022-02-10 21-41-04](https://user-images.githubusercontent.com/88064533/153520854-c5c54139-10fd-49a4-a44c-f7afca2540bf.png)





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# landing-page-newsletter
