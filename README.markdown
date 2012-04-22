Chrome Plugin Enabling Keyboard Browsing on Hacker News
=======================================================
This is a Chrome browser plugin to enable keyboard browsing on the news.ycombinator.com / .org website.  

This plugin has no script dependencies, it reads and modifies the DOM using pure javascript.  

The source file, *keyboard.js*, can also be used as a greasemonkey script.


Here's how to use it:
---------------------
1. Tab, Esc
  - Tab enters keyboard browsing mode.
  - Esc cancels keyboard browsing mode.

2. Up, Down, Left, Right
  - Up and Down to navigate articles.  
  - Left and right to focus on the article link or the comments link.  
  - Enter opens the selected link.


Here's how to install it:
-------------------------
1. Download the repo to a folder on your computer.
2. In the Chrome menu, go to "Tools > Extensions".
3. Check the "Developer Mode" box.
4. Click "Load Unpacked Extension".
5. Point the browser to the downloaded extension.


----------
Some non-issues:
* Doesn't work on the search page, breaks on any page that has fewer than 30 articles.  
* Released under the MIT license.  Full license in keyboard.js