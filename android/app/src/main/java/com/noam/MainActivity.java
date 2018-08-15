package com.noam;

import com.facebook.react.ReactActivity;
import com.slowpath.hockeyapp.RNHockeyAppModule; 
import com.slowpath.hockeyapp.RNHockeyAppPackage; 
 
public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "noam";
    }

    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new RNHockeyAppPackage(this), // <------ add this line to yout MainActivity class 
            new MainReactPackage());
    }

}
