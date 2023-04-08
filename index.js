import { lazy, Suspense, createElement } from 'react';
import { render } from 'react-dom';
import htm from 'htm';

window.html = htm.bind(createElement);

const Route = {
  '*': lazy(() => import('./home.js'))
}

render(
  html`
    <${Suspense} fallback=${html`<div>loading...</div>`}>
      <${Route[location.pathname] || Route['*']} />
    </>
  `,
  document.getElementById('root')
)