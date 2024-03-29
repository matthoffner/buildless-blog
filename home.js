import { useEffect } from 'react';
import { marked } from 'marked';

const handleRoute = location => {
  if (location === '/') {
    return './home.md';
  } else if (location === '/buildless-blog/') {
    window.location.href = `${window.location.href}/home`;
    return;
  } else {
    return `.${location}.md`;
  }
}

export default () => {
  const contentFile = handleRoute(location.pathname);
  useEffect(() => 
    fetch(contentFile).then(res =>
        res.status !== 200 ? 'not found' : res.text()
    ).then(content => 
      document.getElementById('content').innerHTML = marked(content)), []);
  
  return html`
    <div id="content"></div>
    <style>
      @media (prefers-color-scheme: dark) {
        html {
          background: black;
          color: white;
        }
      }
      @media (prefers-color-scheme: light) {
        html {
          background: white;
          color: black;
        }
      } 
    </style>
    `;
}
