@echo off
rem GenyMotion  
rem C:\Program Files\Genymobile\Genymotion
rem genymotion.exe
rem delete app from running tasks...

rem  react-native start
rem  react-native run-android

rem yarn start 
rem or: npm start
rem a - for android  
rem R - for full restart

rem npm install: 
@echo on
@echo 1. --------
call npm install eslint
@echo 2. --------
call npm install react-native-scripts
@echo 3. ---------
call npm install expo@27.0.0
@echo 4. ---------
@call npm install object-path
@echo 5. ---------
call npm install react-native-action-bar
@echo 6. ---------
call npm install rn-stack-router
@echo 7. ---------
call npm install react-native-simple-radio-button
@echo 8. ---------
call npm install react-native-checkbox
@echo 9. ---------
call npm install react-native-material-dropdown
@echo 10. ---------
call npm install react-native-exit-app
@echo 11. ---------
call npm install react-native-collapsible
@echo 12. ---------
call npm install react-native-drawer-layout
@echo 13. ---------
call npm install react-native-tab-view
@echo 14. ---------
call npm install react-navigation
@echo 15. ---------
call npm install react-native-elements
@echo 16. ---------
call npm install react-native-vector-icons


@echo DONE -------
@echo off
echo  

rem a. trying npm
rem b. returning splash
rem c. adding in colors and icons
rem d. adding in data, state and props

rem Environment:
rem   OS: Windows 10
rem   Node: 8.11.1
rem   Yarn: 1.6.0
rem   npm: 6.0.0
rem   Watchman: Not Found
rem   Xcode: N/A
rem   Android Studio: Version  3.1.0.0 AI-173.4670197

rem Packages: (wanted => installed)
rem react: ^16.3.2 => 16.3.2
rem react-native: ^0.55.3 => 0.55.3

rem ----------------
rem had to install java jdk8 jse-sdk (standard edition) 8  
rem from here: http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
rem then set %JAVA_HOME% to the directory of the jdk under program files/java
rem then added to the PATH %Java_Home%/bin;  