Cross-Domain requests in Javascript
===============================================

**A detailed explanation can be found on my [blog](http://wp.me/p2WOmB-bb)**

In order to run the examples:

* Install **[node](http://nodejs.org/download/)**.
* Execute **npm install** in the root folder of the project (where the package.json file is located). This will install all the required dependencies.
* Execute **run_servers.bat** in one of the subfolders, this will start 2 web servers with a different origin (the port numbers differ).
* Use your browser to navigate to **localhost:3000**. The web pages will perform cross-domain requests on page load.
* Inspect the results in your browser window and in the server consoles.

The project illustrates the following scenarios:

1. **CrossDomainNotAllowedByDefault**: Demonstrates failing cross-origin requests.
2. **JSONP**: Demonstrates a simple cross-origin GET request with a server that supports JSONP.
3. **Proxy**: Demonstrates a work-around for cross-origin requests by having a local proxy server in the same domain.
4. **CORS**: Demonstrates a whitelist approach servers can use to allow cross-origin requests.
5. **iframe and postMessage**: demonstrates a sandboxed client-side proxy mechanism using window.postMessage and iframes. Note that this approach can also be used with other cross-domain request techniques to limit potential security leaks.

The examples are written in [express](http://expressjs.com/), a web application framework for [node.js](http://nodejs.org/) and some [jQuery](http://jquery.com/) on the client.
