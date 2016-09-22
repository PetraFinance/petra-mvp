#### Starting the application
Currently, we are at work developing our application for IOS using React Native and Redux. To start, make sure you have node, npm, and xcode updated and installed. Clone the repository and from the root directory run
* `npm install`
* `react-native run-ios`

You may need to run `react-native run-ios` as root. Afterwards, you should see another terminal window pop up that'll start running the server on port 8081. Next, a simulator should pop up with a minimal iPhone layout home screen. If you see a black screen, go to Hardware -> Reboot and then navigate to the Petra app and start it.

#### Helpful Tips & Tricks
* You can easily refresh the application by hitting cmd + R
* It's possible that some changes may not show up because the application is caching files. In this case, you can run
    * `watchman watch-del-all`
    * `./node_modules/react-native/packager/packager.sh --reset-cache`
* You can change which screen appears first in `App.js` by changing the `initial` attribute. 
