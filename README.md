[![npm version](https://badge.fury.io/js/react-native-common-ux-kit.svg)](https://badge.fury.io/js/react-native-common-ux-kit)

# react-native-common-ux-kit

## Components

[Duration picker](./docs/duration-picker/duration-picker.md)

[Offline notification](./docs/offline-notification/offline-notification.md)

## Installation

```sh
npm i react-native-common-ux-kit --save
```

We are using [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons), so you should add following lines in your project

### Android

/android/app/build.gradle

```apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"```

### iOS

ios/yourApp/Info.plist

``` xml
<key>UIAppFonts</key>
<array>
  <string>AntDesign.ttf</string>
  <string>Entypo.ttf</string>
  <string>EvilIcons.ttf</string>
  <string>Feather.ttf</string>
  <string>FontAwesome.ttf</string>
  <string>FontAwesome5_Brands.ttf</string>
  <string>FontAwesome5_Regular.ttf</string>
  <string>FontAwesome5_Solid.ttf</string>
  <string>Foundation.ttf</string>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>MaterialCommunityIcons.ttf</string>
  <string>SimpleLineIcons.ttf</string>
  <string>Octicons.ttf</string>
  <string>Zocial.ttf</string>
  <string>Fontisto.ttf</string>
</array>
```

## License

MIT
