package com.ui;

import com.facebook.react.ReactActivity;
import com.farmisen.react_native_file_uploader.RCTFileUploaderPackage;
import com.github.xfumihiro.react_native_image_to_base64.ImageToBase64Package;
import com.imagepicker.ImagePickerPackage;
import com.magus.fblogin.FacebookLoginPackage;
import com.facebook.reactnative.androidsdk.FBSDKPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ui";
    }
}
