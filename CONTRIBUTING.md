#### Starting the application
Currently, we are at work developing our application for IOS using React Native and Redux. To start, make sure you have node, npm, and xcode updated and installed. Clone the repository and from the root directory run
* `npm install`
* `react-native run-ios`

You may need to run `react-native run-ios` as root. Afterwards, you should see another terminal window pop up that'll start running the server on port 8081. Next, a simulator should pop up with a minimal iPhone layout home screen. If you see a black screen, go to Hardware -> Reboot and then navigate to the Petra app and start it.

Alternatively, you can use Xcode once you have a feel for things. Open up Xcode, and navigate to the `/ios` directory and tell Xcode to open up the file.

#### Helpful Tips & Tricks
* You can easily refresh the application by hitting cmd + R
* It's possible that some changes may not show up because the application is caching files. This isn't very likely, but you can run
    * `watchman watch-del-all`
    * `./node_modules/react-native/packager/packager.sh --reset-cache`
* You can change which screen appears first in `App.js` by changing the `initial` attribute.
* You can set the direction prop in a Scene to determine which way the Scene will transition in.
* If you notice that the device transitions started moving slower, go to Debug > Slow Animations. You might've turned it on by accident.

#### Containers
Containers map state to the props for a component. For smaller components that are used in larger components, we only map state to the props of the larger component, keeping the smaller ones more presentational (dependent on only the props provided to it). A way to visualize this would be

State > Props > Large Component > Props > Smaller Component

#### Layout and Modules
Unless necessary, components in layout and modules should be kept presentational. Pass state to them using props, and pass them functions with the parameters they'll need when calling them.
