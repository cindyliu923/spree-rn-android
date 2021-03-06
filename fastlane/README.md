fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew install fastlane`

# Available Actions
## iOS
### ios set_version
```
fastlane ios set_version
```
Set app version.
### ios build
```
fastlane ios build
```
Build the iOS application.
### ios deploy
```
fastlane ios deploy
```
Deploy to Testflight.

----

## Android
### android build
```
fastlane android build
```
Build the Android application.
### android deploy
```
fastlane android deploy
```
Deploy to Playstore

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
