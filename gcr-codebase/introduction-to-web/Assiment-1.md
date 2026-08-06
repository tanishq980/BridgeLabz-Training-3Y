# Web Development Fundamentals — Assignment

---

## 1. Frontend, Backend, and Full-Stack Development

Think of a restaurant. What you see — the menu, the table, the waiter, the plating — that's the **frontend**. The kitchen where food is actually cooked, where ingredients are stored, where the chef decides recipes — that's the **backend**. Someone who can do both, serve customers *and* cook, is a **full-stack developer**.

**Frontend Development**
This is everything the user sees and clicks on in the browser. Buttons, colours, animations, forms, layout — all frontend.

- Built using: HTML, CSS, JavaScript, and frameworks like React, Vue, Angular
- Real example: When you open Instagram and scroll the feed, the way photos appear in a grid, the heart animation when you double-tap, the smooth scrolling — all of this is frontend work.

**Backend Development**
This runs on a server, hidden from the user. It handles logic, data, security, and talks to the database.

- Built using: Node.js, Python (Django/Flask), Java, PHP, Go, along with databases like MySQL or MongoDB
- Real example: On Instagram, when you double-tap a photo, the backend receives that request, checks who you are, saves the like in the database, updates the count, and sends a notification to the photo owner. You never see any of this happening.

**Full-Stack Development**
A full-stack developer works on both sides. They can build the page you see *and* the server logic behind it.

- Common combination: MERN stack (MongoDB, Express, React, Node.js)
- Real example: A single developer building a college result portal — designing the login page, writing the code that verifies the roll number, fetching marks from the database, and displaying them nicely — is doing full-stack work.

**Quick comparison**

| Point | Frontend | Backend | Full-Stack |
|---|---|---|---|
| Runs on | User's browser | Server | Both |
| User can see it? | Yes | No | Partly |
| Main worry | Looks and feel | Logic and data | Everything |
| Example languages | HTML, CSS, JS | Node.js, Python, Java | Both sides |

---


## 3. How a Browser Requests and Displays a Web Page

Let's say you type `www.example.com` and hit Enter. Here's what actually happens, step by step:

**Step 1 — DNS Lookup**
Computers don't understand names like `example.com`. They understand IP addresses like `93.184.216.34`. So the browser first asks a DNS server, "What's the address of this website?" DNS is basically the phonebook of the internet.

**Step 2 — TCP Connection**
Once the browser has the IP address, it opens a connection to that server. If the site uses HTTPS, a TLS handshake also happens here — this is where encryption keys are exchanged so nobody can read your data in between.

**Step 3 — HTTP Request Sent**
The browser sends a request that basically says:
```
GET /index.html HTTP/1.1
Host: www.example.com
```

**Step 4 — Server Processes It**
The server receives the request. If the page is static, it just picks up the file. If it's dynamic, it runs some code, maybe queries the database, and builds the page on the spot.

**Step 5 — HTTP Response Comes Back**
The server sends back a status code (200 means OK, 404 means not found) along with the actual HTML content.

**Step 6 — Browser Parses the HTML**
The browser reads the HTML top to bottom and builds a tree structure called the **DOM** (Document Object Model).

**Step 7 — CSS and JS Are Fetched**
While parsing, the browser finds links to CSS files, JavaScript files, images, and fonts. It sends separate requests for each of these. CSS gets turned into the **CSSOM**.

**Step 8 — Render Tree and Layout**
DOM + CSSOM combine into a render tree. The browser then calculates where exactly each element sits on screen and how big it is. This step is called **layout** or **reflow**.

**Step 9 — Painting**
Finally, the browser fills in the actual pixels — colours, text, images, borders — and you see the page.

**Step 10 — JavaScript Runs**
Scripts execute and make the page interactive. They can also change the DOM, which may trigger another layout and paint cycle.

All of this usually finishes in under a second.

---

## 4. Tools Required to Set Up a Web Development Environment

| Tool | What It Does |
|---|---|
| **Code Editor (VS Code)** | Where you actually write code. Gives syntax highlighting, auto-complete, error hints, and extensions. Without it you'd be writing code in Notepad — painful. |
| **Web Browser (Chrome/Firefox)** | To view your work. More importantly, DevTools let you inspect elements, debug JavaScript, check network requests, and test responsive design. |
| **Node.js + npm** | Node lets you run JavaScript outside the browser. npm is the package manager — it installs libraries like React or Express with one command. |
| **Git** | Version control. It tracks every change you make, lets you go back if you break something, and lets multiple people work on the same project without overwriting each other. |
| **GitHub / GitLab** | Cloud storage for your Git repositories. Also where you showcase your projects and collaborate with others. |
| **Web Server (Nginx / Apache / Live Server)** | Serves your files over HTTP. During development, VS Code's Live Server extension is enough — it also auto-refreshes the browser when you save. |
| **Database (MySQL / MongoDB)** | Stores your application data — users, posts, orders, whatever your app needs to remember. |
| **API Testing Tool (Postman / Thunder Client)** | Lets you test your backend routes without building a frontend first. You send a request, see the response, confirm it works. |
| **Terminal / Command Line** | Used for running commands, installing packages, starting servers, and using Git. Unavoidable in real development. |
| **Package Bundler (Vite / Webpack)** | Bundles and optimises your code for production — minifies files, handles imports, makes the site load faster. |

---

## 5. What Is a Web Server?

A web server is a computer (and the software running on it) whose job is to sit and wait for requests from browsers, then send back the right files or data.

Two meanings, both correct:
- **Hardware** — the actual physical machine, always on, always connected to the internet
- **Software** — the program that listens for HTTP requests and responds to them

**What a web server actually does:**
- Listens on a port (80 for HTTP, 443 for HTTPS)
- Receives requests and figures out what's being asked for
- Sends back HTML, CSS, JS, images, or JSON data
- Returns proper status codes (200, 404, 500)
- Handles SSL/TLS for secure connections
- Can act as a reverse proxy or load balancer for bigger applications

**Commonly used web servers:**

| Server | Notes |
|---|---|
| **Apache HTTP Server** | The old reliable. Very flexible, huge module ecosystem, `.htaccess` support. Still runs a big chunk of the web. |
| **Nginx** | Very fast and lightweight. Excellent at serving static files and acting as a reverse proxy. The go-to choice for modern deployments. |
| **Microsoft IIS** | Windows Server's built-in option. Common in .NET environments. |
| **LiteSpeed** | Apache-compatible but faster. Popular with shared hosting providers. |
| **Node.js (Express)** | Not a traditional server, but you can write your own HTTP server in JavaScript with it. Very common in MERN projects. |
| **Caddy** | Newer option. Sets up HTTPS automatically with zero configuration. |
| **Tomcat** | Used for Java-based web applications. |

---

## 6. Roles in a Project

**Frontend Developer**
Builds everything the user interacts with.
- Converts designs into working web pages
- Writes HTML, CSS, JavaScript
- Makes sure the site works on mobile, tablet, and desktop
- Connects the UI to backend APIs and displays the data
- Fixes browser compatibility issues
- Cares about accessibility and page load speed

**Backend Developer**
Builds the engine that powers the application.
- Writes server-side business logic
- Creates and maintains APIs that the frontend consumes
- Handles authentication, authorisation, and security
- Writes queries to fetch and store data
- Makes sure the system can handle load and doesn't crash
- Integrates third-party services like payment gateways

**Database Administrator (DBA)**
Takes care of the data itself.
- Designs the database schema — which tables, which relationships
- Optimises slow queries and adds indexes
- Sets up regular backups and recovery plans
- Manages who has access to what data
- Monitors database performance and storage
- Handles migrations when the schema needs to change

**How they work together:** The frontend developer says "I need a list of users." The backend developer builds an API endpoint that returns it. The DBA makes sure that query runs fast even when there are ten million users in the table.

---

## 7. Installing and Configuring VS Code

**Installation steps:**

1. Go to `https://code.visualstudio.com` and download the installer for your operating system.
2. Run the installer. On Windows, tick these boxes during setup:
   - Add "Open with Code" to the file context menu
   - Add to PATH (this lets you type `code .` in the terminal)
3. Launch VS Code once installation finishes.

**Extensions to install** (press `Ctrl + Shift + X` to open the Extensions panel):

| Extension | Why You Need It |
|---|---|
| **Live Server** | Right-click your HTML file → "Open with Live Server". Auto-refreshes the browser every time you save. |
| **Prettier** | Formats your code automatically so the indentation stays clean. |
| **ESLint** | Catches JavaScript mistakes as you type. |
| **Auto Rename Tag** | Change an opening tag and the closing tag updates by itself. |
| **HTML CSS Support** | Better autocomplete for CSS class names inside HTML. |
| **JavaScript (ES6) Code Snippets** | Shortcuts for common JS patterns. |
| **Material Icon Theme** | File icons that make the explorer easier to scan. |

**Settings to configure** (`Ctrl + ,` to open Settings):

- Turn on **Format On Save**
- Set **Default Formatter** to Prettier
- Set **Tab Size** to 2
- Turn on **Word Wrap**
- Turn on **Auto Save** (set to `afterDelay`)

**Testing the setup:**

Create a folder, open it in VS Code, and make a file called `index.html`. Type `!` and press Tab — Emmet will generate the full HTML boilerplate instantly. Add a heading, save, then right-click and choose "Open with Live Server". If the page opens in your browser, your setup is working.

```
my-project/
├── index.html
├── style.css
└── script.js
```

> **Note:** The screenshot for this question has to be taken on your own machine. Once your VS Code is set up, capture the window showing the file explorer on the left, your `index.html` code in the middle, and the Live Server preview in the browser. Save it as `vscode-setup.png` and attach it alongside this file.

---

## 8. Static vs Dynamic Websites

**Static Website**
The content is fixed. Every visitor sees exactly the same thing. The files sit on the server pre-made, and the server just hands them over as they are.

- Built with: plain HTML, CSS, JavaScript
- No database, no server-side processing
- Very fast, very cheap to host, very secure (nothing to hack into)
- Downside: to change anything, you have to edit the code and re-upload
- **Example:** A college department's information page, a personal portfolio, a restaurant's menu page. Everyone who visits sees identical content.

**Dynamic Website**
The content changes based on who's visiting, when, and what they do. Pages are generated on the fly by the server, usually by pulling data from a database.

- Built with: HTML/CSS/JS on the frontend plus Node.js, PHP, Python, etc. on the backend, with a database
- Supports login, user accounts, comments, search, personalisation
- Downside: slower, more expensive to run, more things that can break
- **Example:** Facebook. Your feed and my feed look completely different because the server builds each one based on our accounts. Same for Amazon, YouTube, or your college's result portal.

**Comparison**

| Point | Static | Dynamic |
|---|---|---|
| Content | Same for everyone | Different per user |
| Database | Not needed | Needed |
| Speed | Very fast | Slower |
| Cost | Low | Higher |
| Updating content | Manual code edit | Through admin panel or database |
| Security risk | Very low | Higher |
| Example | Portfolio site | Instagram |

---

## 9. Five Web Browsers and Their Rendering Engines

A **rendering engine** is the part of the browser that takes HTML, CSS, and JavaScript and turns it into the visual page you see. Different engines interpret the same code slightly differently — which is exactly why a website can look perfect in Chrome but slightly off in Safari.

| Browser | Rendering Engine | JavaScript Engine | Developed By |
|---|---|---|---|
| **Google Chrome** | Blink | V8 | |
| **Mozilla Firefox** | Gecko | SpiderMonkey | Mozilla |
| **Safari** | WebKit | JavaScriptCore | Apple |
| **Microsoft Edge** | Blink | V8 | Microsoft |
| **Opera** | Blink | V8 | Opera Software |

**How the engines differ:**

**Blink** (Chrome, Edge, Opera, Brave)
Started as a fork of WebKit in 2013. It's the most widely used engine today, which means it heavily influences what becomes a web standard. New CSS and JavaScript features usually land here first. Very fast, but it also uses a lot of memory. Since Edge and Opera also switched to Blink, most of the web now runs on one engine — some developers see this as a monopoly problem.

**Gecko** (Firefox)
Mozilla's own engine, and the main independent alternative to Blink. It's strict about following web standards, so if your code works in Firefox it's usually correct code. Uses a newer sub-engine called Servo (written in Rust) for parallel CSS processing. Sometimes it's slower to adopt experimental features because Mozilla waits for proper standardisation.

**WebKit** (Safari)
Apple's engine. Heavily optimised for battery life and performance on Apple devices, which is why Safari drains less battery on a MacBook than Chrome does. Important catch: on iOS, *every* browser is forced to use WebKit — even Chrome on your iPhone is really WebKit underneath. WebKit is often the slowest to support new features, which is why developers frequently have to write extra CSS just to make things work in Safari.

**Practical takeaway:** Because these engines differ, always test your website in at least Chrome, Firefox, and Safari. Also use CSS vendor prefixes (`-webkit-`, `-moz-`) where needed, and check `caniuse.com` before using a new feature in production.

---

