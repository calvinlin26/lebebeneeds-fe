import React from "react";
import useNavSideBar from "../../../hooks/useNavSideBar";
import CodeBlocks from "../../../components/codeBLock";
import useScrollIntoView from "../../../hooks/useScrollIntoView";
import PreviewImage from "../../../assets/qrscanner.png";

const Index: React.FC = () => {
  useNavSideBar([
    { path: "/qrscanner#preview", label: "Preview" },
    { path: "/qrscanner#dependencies", label: "Dependencies" },
    {
      path: "/qrscanner#setups",
      label: "Setups",
      items: [
        { path: "/qrscanner#android", label: "Android" },
        { path: "/qrscanner#ios", label: "IOS" },
      ],
    },
    { path: "/qrscanner#usage", label: "Usage" },
  ]);
  useScrollIntoView();

  return (
    <div>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          QR Scanner
        </h1>
        <p className="text-base text-muted-foreground">
          <span className="inline-block align-top [text-decoration:inherit] max-w-[538px]">
          This component allows users to scan QR codes seamlessly within your Flutter app. It integrates permission handling and utilizes the qr_code_scanner package to deliver a robust QR scanning experience.
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
/presentation/screen`}
          language="js"
        />
        <h5 className="scroll-m-20 text-xl font-bold tracking-tight">
          Additional libraries
        </h5>
        <CodeBlocks
          code={`qr_code_scanner (https://pub.dev/packages/qr_code_scanner)
permission_handler (https://pub.dev/packages/permission_handler)`}
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
  permission_handler: ^[latest]
  qr_code_scanner: ^[latest]`}
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
          code={`/android/app/src/main/AndroidManifest.xml

<manifest xmlns:android="https://schemas.android.com/apk/res/android">
    <uses-permission android:name="android.permission.CAMERA" />`}
          language="js"
        />
        <h5 className="scroll-m-20 text-xl font-bold tracking-tight" id="#ios">
          IOS
        </h5>
        <CodeBlocks
          code={`/ios/Runner/info.plist:
            
<key>NSCaontactsUsageDescription</key>
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
            
DevicePermission.requestStatus(
    ctx,
    platformPermission.camera,
), then((status) {
    if (status == "Permission granted") {
    debugPrint("Permission granted");
    } else {
    debugPrint("Permission denied");
    }
})
  
final qrKey = GlobalKey(debugLabel: 'OR');
late QRViewController qrCo
void onQrCreated(QRViewController controller){
    try {
        qrCo = controller;
        qrCo.resumeCamera();
        controller.scannedDataStream.listen((scanData){
           debugPrint(scanData.code);
        }) 
    } catch (e) {
           debugPrint(e.toString())
    }
}

@override
void dispose(){
    qrCo.dispose();
    super.dispose()
}
`}
          language="js"
        />
        <br />
        <CodeBlocks
          code={`/lib/presentation/[screen folder]/[screen file]:
            
QRView(
    key: controller.qrKey,
    overlay: QrScannerOverlayShape(
        borderColor: AppColor.mainColor,
        borderRadius: 12,
        borderWidth: 5,
        cutOutWidth: 99.w,
        cutOutHeight: 90.w,
    )
   onQrViewCreated: controller.onCreated,
)
`}
          language="js"
        />
      </div>
    </div>
  );
};

export default Index;
