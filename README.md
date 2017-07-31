# Goddamninit v1.0.0

#### God damnit. React projects are a pain in the ass.

These were the first words that came to mind when I set out to begin my first React project. I had very little experience in front-end development, and had only learned javascript a few months prior. So, I decided to pick up a new skill and learn super popular front-end framework, React, developed by the friendly folks over at Facebook. React has been a buzzword in the web-dev community for some time now, kind of like how the words “disrupt the status quo” seems to leak out of every business
students’ mouths these days.

Despite the plethora of online tutorials detailing how to begin a React project, the sheer amount of details was a lot to handle. “You need to install React, webpack, babel, configure babel and webpack, install these dependencies, etc.” Even when I eventually figured out what tf I was doing, doing it over and over with each new project I started became repetitive. I wanted a simple tool that could help me begin a project fast, but not abstract away all the important details that someone just
getting in React needs to know.

Goddamninit is a minimalistic, quick-start tool that will help you get started with a React project in seconds. Forget `npm init` `git init` and downloading the hundred billion dependencies that make a React project tick. Goddamninit takes care of it all for you by walking you through the setup process, making it virtually painless. Never say “God damnit React, you pain in the ass” again!

#### Usage

* Clone the repository
* Run `npm install -g`
* Usage: `goddamninit name (optional)` If a name is specified, a new directory is created to house the project

Output:

```
|––name/
|  |––public/
|     |––index.html
|  |––src/
|     |––index.js
|     |––components/
|         |––App.js
|  |––webpack.config.js
|  |––.babelrc
|  |––package.json
```

* cd into your new directory and run `webpack-dev-server`
* navigate to `http://localhost:8080` to see the react site