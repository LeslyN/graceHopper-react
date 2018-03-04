# Grace Munrray Hopper

La siguiente página tiene como objetivo mostrar la información de Grace Munrray Hopper haciendo uso de React.

## Estructura de carpetas

Debería verse de la siguiente manera:

```
grace-h-react/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
      css/
        aside.css
        header.css
        main.css
      images/
        ee-uu.png
        grace-hopper.jpg
      Aside.js
      Header.js
      Main.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

## Componentes

La página se ha desarrollado con 4 componentes:

- App.js
- Header.js
- Main.js
- Aside.js

## Importando componentes

### `App.js`

```js
import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Aside/>
      </div>
    );
  }
}

export default App;
```

## Agregando estilos

La página tiene estilos para sus 4 componentes:

- App.css
- aside.css
- header.css
- main.css

### `Button.css`

```css
.Button {
  padding: 20px;
}
```

### `Button.js`

```js
import React, { Component } from 'react';
import './Button.css'; // Tell Webpack that Button.js uses these styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <div className="Button" />;
  }
}
```

```css
.App {
  display: flex;
  flex-direction: row;
  align-items: center;
}
```

## Agregando imágenes

```js
import React, {Component} from 'react';
import GraceHopper from './images/grace-hopper.jpg';
import eeuu from './images/ee-uu.png';

class Aside extends Component {
  render() {
    return (
       // Import result is the URL of your image
        <img src={GraceHopper} alt="Grace Murray Hopper"/>;
}

export default Aside;
```

### [GitHub Pages](https://pages.github.com/)

#### Step 1: Agrega `homepage` a `package.json`

Abra su `package.json` y agregue un campo ` homepage` para su proyecto::

```json
  "homepage": "https://LeslyN.github.io/grace-h-react",
```
La aplicación Create React usa el campo `homepage` para determinar la URL raíz en el archivo HTML creado.