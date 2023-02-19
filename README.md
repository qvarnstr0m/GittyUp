## GittyUp! List your latest Github events! 🎠  
  
<img width="200" alt="NotBotScreenshot" src="https://user-images.githubusercontent.com/70780322/219974374-3f80ba88-bc2c-458d-8f89-bfe6e270aeaa.png">

  
### Table of contents  
+ Introduction  
+ How it works  
+ Try it out  
+ How to use it  
+ Tech stack  
+ Contribute   
  
### Introduction  
  GittyUp is a lightweight JavaScript plugin that allows you to display the latest GitHub events for a given user on your website. 
  It uses the GitHub API to retrieve the latest events for a user, and provides a simple way to render these events on your webpage as unordered list items.  
    
### How it works  
  
GittyUp consists of three main files:

+ gittyup-config.js: This file contains a configuration object that allows you to customize the plugin's behavior. You can specify the username 
of the user you want to display events for, as well as the number of events to display. And more.

+ gittyup-get.js: This file contains a function that retrieves the latest events for a given user from the GitHub API, and returns these events 
as an array of objects.

+ gittyup-render.js: This file contains a function that renders the latest events for a given user on a webpage. It uses the gittyup-get function 
to retrieve the events, and generates HTML markup to display these events on the page.

To use GittyUp, you simply need to include the gittyup-config.js, gittyup-get.js, and gittyup-render.js files in your webpage, and call the 
renderLatestEvents function with the ID of the HTML element where you want to display the events.  
  
### Try it out  
  
  To try it out just fork this repo, enter a valid username in the gittyup-config.js and run the index.html in a browser.  
  
### How to use it  
  
To use GittyUp on your website, follow these steps:

1. Download the gittyup-config.js, gittyup-get.js, and gittyup-render.js files from this repository.  
  
2. Add the following HTML markup to your webpage, where you want to display the latest GitHub events:  
```<div id="gittyup-events"></div>```  
  
3. Update the gittyup-config.js file with the username of the user you want to display events for, and the number of events to display:  

```
export const gittyupConfig = {
username: 'your-username',
numEvents: 5,
};
```  
  
Note that you will need to update the username parameter with the username of the user you want to display events for, and the numEvents parameter with the number of events you want to display.  
  
4. Add the following JavaScript code to your webpage, to initialize the plugin and display the latest events:

```
// Import the renderLatestEvents function from the gittyup-render.js file
import { renderLatestEvents } from './src/gittyup-render.js';
// Call the renderLatestEvents function with the ID of the HTML element where you want to display the events
renderLatestEvents('gittyup-events');
```    
  
Note that you will need to update the 'gittyup-events' parameter with the ID of the HTML element where you want to display the events.  
    
5. Save your webpage, and view it in your browser to see the latest GitHub events for the specified user.  
  
### Contribute   
  
If you would like to contribute to GittyUp, you can do so by:  
  
+ Forking this repository
+ Making your changes
+ Submitting a pull request  
All types of contributions are welcome, including bug fixes, new features, documentation improvements, and more.  
  
Before submitting a pull request, please make sure to:  
  
+ Follow the existing code style and formatting conventions
+ Write clear and concise commit messages
+ Test your changes thoroughly to ensure that they work as expected
+ Thank you for considering contributing to GittyUp!
  
