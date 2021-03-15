import React from 'react';
import marked from 'marked';

const isHome = location => location !== '/';

export default () => {
  React.useEffect(async () => {
    if (!isHome(location.pathname)) {
      await fetch(`.${location.pathname}.md`).then(res => {
        if (res.status !== 200) {
          return 'not found'
        }
        return res.text();
      })
        .then(content => document.getElementById('content').innerHTML = marked(content));
    }
  }, []);
  
  return html`
  <h1>buildless-blog</h1>
  <div id="content"></div>`;
}
