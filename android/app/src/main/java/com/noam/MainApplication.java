package com.noam;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.ibeacon.simulator.BeaconBroadcastPackage;
import com.slowpath.hockeyapp.RNHockeyAppPackage;
import com.artirigo.kontaktio.KontaktPackage;
import com.reactlibrary.RNSimpleCompassPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.slowpath.hockeyapp.RNHockeyAppModule; // for hockey
import com.slowpath.hockeyapp.RNHockeyAppPackage; // for hockey

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
            new BeaconBroadcastPackage(),
            new RNHockeyAppPackage(), 
        new RNSimpleCompassPackage(), 
        new VectorIconsPackage(),
        new KontaktPackage(),
        new RNHockeyAppPackage(MainApplication.this) // added for hockeyapp
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
