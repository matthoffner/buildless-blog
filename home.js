import { useEffect } from 'react';
import { marked } from 'marked';

const handleHome = location => () => {
  if (location === '/') {
    return './home.md';
  }
  if (location === '/buildless-blog/') {
    return '/buildless-blog/home.md';
  };
}

export default () => {
  const contentFile = handleHome(location.pathname) || `.${location.pathname}.md`;
  useEffect(() => 
    fetch(contentFile).then(res =>
        res.status !== 200 ? 'not found' : res.text()
    ).then(content => 
      document.getElementById('content').innerHTML = marked(content)), []);
  
  return html`
    <h1>buildless-blog</h1>
    <div id="content"></div>`;
}
