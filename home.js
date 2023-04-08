import { useEffect } from 'react';
import { marked } from 'marked';

const handleRoute = location => () => {
  if (location === '/') {
    return './home.md';
  } else if (location === '/buildless-blog/') {
    return '/buildless-blog/home.md';
  };
  return `.${location.pathname}.md`;
}

export default () => {
  const contentFile = handleRoute(location.pathname);
  useEffect(() => 
    fetch(contentFile).then(res =>
        res.status !== 200 ? 'not found' : res.text()
    ).then(content => 
      document.getElementById('content').innerHTML = marked(content)), []);
  
  return html`
    <h1>buildless-blog</h1>
    <div id="content"></div>`;
}
