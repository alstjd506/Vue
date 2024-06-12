const myURL = new URL('http://example.org/foo?username=choi#bar');

console.log(myURL);
console.log(myURL.hash);
console.log(myURL.searchParams.get("username"));