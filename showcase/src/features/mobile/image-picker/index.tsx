import React from "react";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import PreviewImage from "../../../assets/image-picker.png";

const Index: React.FC = () => {
  useNavSideBar([
    { path: "/image-picker#preview", label: "Preview" },
    { path: "/image-picker#dependencies", label: "Dependencies" },
    {
      path: "/image-picker#setups",
      label: "Setups",
      items: [
        { path: "/image-picker#android", label: "Android" },
        { path: "/image-picker#ios", label: "IOS" },
      ],
    },
    { path: "/image-picker#usage", label: "Usage" },
  ]);
  useScrollIntoView();

  return (
    <div>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          OTP Input
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
            A customizable OTP input field for Flutter applications. This
            component allows you to input OTP with a maximum of 6 digits.
          </span>
        </p>
      </div>
      <br />
      <div className="space-y-2" id="#preview">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Preview
        </h3>
        <hr />
        <div className="w-full border h-[400px] rounded-sm flex items-center justify-center">
          <img className="h-[300px]" src={PreviewImage} />
        </div>
        <h5 className="scroll-m-20 text-xl font-bold tracking-tight">Files</h5>
        <CodeBlocks
          code={`/ui_kit/permission/permission_call.dart (following customized permission request | unless self-modified)
/ui_kit/permission/contact_dialog.dart (optional, may be turned off in #1 )
/presentation/screen`}
          language="js"
        />
        <h5 className="scroll-m-20 text-xl font-bold tracking-tight">
          Additional libraries
        </h5>
        <CodeBlocks
          code={`image_picker (https://pub.dev/packages/image_picker)
permission_handler (https://pub.dev/packages/permission_handler)
mime (https://pub.dev/packages/mime)
flutter_contacts (https://pub.dev/packages/flutter_contacts) (optional, may be turned off as permission_call file is a customized permission request)`}
          language="js"
        />
      </div>
      <br />
      <div className="space-y-2" id="#dependencies">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Dependencies
        </h3>
        <hr />
        <CodeBlocks
          code={`/pubspec.yaml:

dependencies:
  image_picker: ^[latest]
  permission_handler: ^[latest]
  mime: ^[latest]`}
          language="js"
        />
      </div>
      <br />
      <div className="space-y-2" id="#setups">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Setups
        </h3>
        <hr />
        <h5
          className="scroll-m-20 text-xl font-bold tracking-tight"
          id="#android"
        >
          Android
        </h5>
        <CodeBlocks
          code={`/android/app/src/main/AndroidManifest.xml:

<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />
<uses-permission android:name="android.permission.READ_MEDIA_VIDEO" />
<uses-permission android:name="android.permission.READ_MEDIA_AUDIO" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.MANAGE_EXTERNAL_STORAGE" />`}
          language="js"
        />
        <h5 className="scroll-m-20 text-xl font-bold tracking-tight" id="#ios">
          IOS
        </h5>
        <CodeBlocks
          code={`/ios/Runner/info.plist:
            
<key>NSCameraUsageDescription</key>
<string>[your reason]</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>[your reason]</string>`}
          language="js"
        />
      </div>
      <br />
      <div className="space-y-2" id="#usage">
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">Usage</h3>
        <hr />
        <CodeBlocks
          code={`/lib/presentation/[screen folder]/controller/[controller file]:
            
<PermissionStatus status = await DevicePermission.requestStatus(
  ctx, PlatformPermisson.camera,
);
if (status == PermissionStatus.granted) {
  XFile? xFile = await ImagePicker().pickImage(
    source: ImageSource.camera,
  );
}

PermissionStatus status = await DevicePermission.requestStatus(
  ctx, PlatformPermisson.gallery,
);
if (status == PermissionStatus.granted) {
  XFile? xFile = await ImagePicker().pickImage(
    source: ImageSource.gallery,
  );
}`}
          language="js"
        />
        <br />
        <strong>Note:</strong> the “result” variable may vary based on
        presentation needs or UI design, int is just example
        <br />
        <CodeBlocks
          code={`/lib/presentation/[screen folder]/[screen file]:
          
controller.changeImage(result);`}
          language="js"
        />
      </div>
    </div>
  );
};

export default Index;
