# The Basics(Basics.html)

1. Open a folder
2. Create a html file
3. type HTML : 5, and select that option
4. Then inside <body></body> <p1>Hello World!</p1>
5. In the extensions install a Live Server preview(recommendation: Live Server by Ritwick Dey)
6. Then on the index.html click "F1" and type Live Server: Open live Server
7. Congratulations, you did it
8. Want to do anything more complicated just search up a tutorial

# Cookies

To create cookies and acess cookies you have to do this
<code>document.cookie = "{name of the cookie}={value}; expires=Tues, 18 Dec 3068 12:00:00 UTC";</code>

To acess cookies use this function from this link (src)[https://stackoverflow.com/questions/10730362/get-cookie-by-name]
<code>
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
</code>