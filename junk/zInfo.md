#Todo:
 - [ ] c. bt api
~installed for android~
todo: ios
 - [ ] d. compass api
(next in a fast iteration and then complete)
 - [v] ~d. redux state~
 - [v] e. ~read data into redux~
 - [ ] f. read data components
 - [ ] g. Accordion: fix with list item and toggled state

# Environment:  
Started with: 
OS: Windows 10, Node: 8.11.1, Yarn: 1.6.0, npm: 6.0.0, Watchman: Not Found
XCode: N/A, Android Studio: Version 3.1.0.0 AI-173.4670197, 
react: ^16.3.2 => 16.3.2,  react-native: ^0.55.3 => 0.55.3

Now: 
Environment:
**Android**: OS: Windows 10, Node: 8.11.1, Yarn: 1.7.0
npm: 6.1.0, Watchman: Not Found, Xcode: N/A
Android Studio: Version 3.1.0.0 AI-173.4907809
react: 16.3.1 => 16.3.1,  react-native: 0.55.3 => 0.55.3

**IOS**: macOS High Sierra 10.13.6, Node: 8.11.3, Yarn: 1.9.4
npm: 5.6.0, Watchman: 4.9.0, Xcode: Xcode 9.4.1 Build version 9F2000
Android Studio: 3.1 AI-173.4670197
react: 16.3.1 => 16.3.1, react-native: 0.55.3 => 0.55.3

 @pashute

how to configure eslint prettier and flow
https://hackernoon.com/configure-eslint-prettier-and-flow-in-vs-code-for-react-development-c9d95db07213

---

had to install java jdk8 jse-sdk (standard edition)
from here: http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
then set %JAVA_HOME% to the directory of the jdk under program files/java
then added to the PATH %Java_Home%/bin;
keytool -genkey -v -keystore noam-release-key.keystore -alias noam-key -keyalg RSA -keysize 2048 -validity 10000

further keytool [noam info in private drive file](https://docs.google.com/document/d/1RGpnlgliBMF5veozDY6P3nn88wGF6o4uwNEdekFXIUE/edit)

"name": "Noam",
rem"icon": "./icons/icon.png",
"version": "0.0.1",
"slug": "noam",
"orientation": "portrait",
"primaryColor": "#003366",
"sdkVersion": "27.0.0",
"platforms": ["android", "ios"],

exp publish
exp publish --release-channel production

signed apk https://facebook.github.io/react-native/docs/signed-apk-android.html


how to run detached: 
inside the project folder run this commands: 
 `npm install` (the first time), `npm start` and `react-native run-android`

native kontakt.io

react native elements tut (youtube utube) ui
https://www.youtube.com/watch?v=LdKtugH-sb8
problem with listitem https://github.com/react-native-training/react-native-elements/issues/490#issuecomment-318164502
elements scrollbar http://ranewallin.com/react-native-tap-controlled-scrollview/
rightIcon={{ name: 'arrow-right', type: 'font-awesome', style: { marginRight: 10, fontSize: 15 } }}

beacons listed in kontakt.io  [See private doc](https://docs.google.com/document/d/1RGpnlgliBMF5veozDY6P3nn88wGF6o4uwNEdekFXIUE/edit)

native bluetooth status
https://www.npmjs.com/package/react-native-bluetooth-status

react native compass:
https://github.com/yonahforst/react-native-heading
other compass:
https://www.npmjs.com/package/react-native-simple-compass
https://www.npmjs.com/package/react-native-compass
https://github.com/yonahforst/react-native-heading
and this in windows about calibration: https://docs.microsoft.com/en-us/uwp/api/Windows.Devices.Sensors.MagnetometerAccuracy

to see log use: `react-native log-android`

expo vector icons for react-native-elements
https://www.npmjs.com/package/@expo/vector-icons

redux explained:
https://medium.com/@imranhishaam/react-native-with-redux-for-beginners-6281959a2899

Fixed problem with Flow ([js] error ... can only be used in a .ts file)
https://stackoverflow.com/questions/48852007/type-aliases-can-only-be-used-in-a-ts-file/50392975#50392975 second answer is mine

How to make smart looking accordion (tutorial)
https://moduscreate.com/blog/expanding-and-collapsing-elements-using-animations-in-react-native/

json online editor
https://jsoneditoronline.or
