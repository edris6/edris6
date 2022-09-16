# The Basics(Basics.html)

1. Open a folder
2. Create a html file
3. type HTML : 5, and select that option
4. Then inside <body></body> <p1>Hello World!</p1>
5. In the extensions install a Live Server preview(recommendation: Live Server by Ritwick Dey)
6. Then on the index.html click "F1" and type Live Server: Open live Server
7. Congratulations, you did it
8. Want to do anything more complicated just search up a tutorial

Not working? Check basics.html

# Modify text using js

Create a p text in html<code><p id="te">testtest</p></code>, in javascript use this <code>document.getElementById("te").innerHTML = "nice";</code> it should change, congrats

Doubts? check cookies.html

# Buttons

Create a button in html, and add an onclick <code><button onclick="test()">{any thing}</button></code> then create a script and create a function called test() and put anything there and then its gonna work, congrats

Doubts? Check cookies.html

# Cookies

1. Create a js file and like it by in the html file using <code><script></script></code>, writing your javascript code inside the script or if you want to have an external script use <code><script src="example.js"></script></code>


### Create Cookies:
<code>document.cookie = "{name of the cookie}={value}; expires=Tues, 18 Dec 3068 12:00:00 UTC";</code>

### Acess Cookies
To acess cookies use this function from this link (src)[https://stackoverflow.com/questions/10730362/get-cookie-by-name]
<code>
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
</code>

Doubts? Check cookies.html
