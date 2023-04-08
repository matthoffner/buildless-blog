import { useEffect } from 'react';
import { marked } from 'marked';

const isHome = location => location === '/';

export default () => {
  const contentFile = isHome(location.pathname) ? './home.md' : `.${location.pathname}.md`;
  useEffect(() => 
    fetch(contentFile).then(res =>
        res.status !== 200 ? 'not found' : res.text()
    ).then(content => 
      document.getElementById('content').innerHTML = marked(content, {
        gfm: false
      })), []);
  
  return html`
    <h1>buildless-blog</h1>
    <div id="content"></div>`;
}
