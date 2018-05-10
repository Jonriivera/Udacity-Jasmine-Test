# Jasmine Testing project

In this project we were asked to create test suites and tests to insure the functionality of the given feed reader page.

## How to run Jasmine

Download or clone all the files via this repo. If the jasmine script has not been added to the index.html file, add ```<script src="jasmine/spec/feedreader.js></script>"``` to the bottom of the body element. Then when you open index.html in your browser the Jasmine application should show at the bottom of the web page.

## What tests I ran

The tests ran against the free reader tested:
<br>
1) That the allFeeds variables is defined and not empty and that the names and URLs of the feeds were defined and not empty.
<br>
2) That by default the menu is hidden and by clicking it the visibility is toggled.
<br>
3) Making sure that the loadFeed function is called and completes its work, and there is at least a single .entry element within the .feed container. Also when a new feed is loaded by the loadFeed function that the content actually changes.
