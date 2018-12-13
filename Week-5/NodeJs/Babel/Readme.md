NODE.JS WITH BABEL:

You should be able to develop a Node.js application by now, but there is more to setting up a sophisticated Node.js 
project with recent JavaScript language features (ECMAScript) like async/await or the object spread operator. 
That’s where Babel becomes useful. You can install babel-cli from the command line for your project’s development dependencies.

----   npm install babel-cli --save-dev   ----

Next, add it to your npm start script:

{
  ...
  "main": "index.js",
  "scripts": {
    "start": "nodemon --exec babel-node src/index.js"
  },
  "keywords": [],
  ...
}

Nothing should change when you run the application again, thought that’s just the surface.
Under the hood, Babel trans piles your code to vanilla JavaScript. 
When you use an upcoming JavaScript language feature, which hasn’t been introduced in Node.js, 
you can still use the feature in your source code. Babel makes sure that Node.js understands it. 
However, there is still one crucial step to include upcoming language features with Babel. 
New features in the JavaScript language are introduced in stages. To use features from JavaScript in your application, 
you’ll need to the stage at which it appears.

The following walk through shows how to introduce JavaScript features up to Stage 2. First, install the necessary dependencies in the command line:

-----   npm install babel-preset-env babel-preset-stage-2 --save-dev    ----


Next, use these dependencies directly in your npm start script:

{
  ...
  "main": "index.js",
  "scripts": {
    "start": "nodemon --exec babel-node --presets env,stage-2 src/index.js"
  },
  "keywords": [],
  ...
}
Now, let’s see if we can find a more elegant way to complete this task. In the project’s root folder, create a .babelrc file in the command line:

touch .babelrc

In this configuration file for Babel, you can include the two recently installed dependencies for unlocking the upcoming JavaScript language features.

{
 "presets": ["env", "stage-2"]
}

Now include some of these upcoming JavaScript features in your src/index.js file. If you run into problems, 
make sure the features are included in the Stage 2 specification from your .babelrc file. 
The application runs with npm start on the command line.