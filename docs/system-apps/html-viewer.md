# HTML Viewer
HTML Viewer is similar to [CaptivePortalLogin](./captive-portal-login.md), as it's the same layout. It's package name is ``com.android.htmlviewer``.

:::danger

This app IS a depedency of the [core system](./android-system.md) on MIUI 12.5.4+ phones. It WILL bootloop your phone if you remove this app. The reason of this is currently unknown.

:::

## Remarks
If you launch the activity without any arguments the webpage it tries to load is ``http://null/``. The error code is ``net::ERR_CLEARTEXT_NOT_PERMITTED`` \
This app does not contain a Download Service unlike [CaptivePortalLogin](./captive-portal-login.md).

:::note

It turns out this is the app that gets loaded on apps with **system WebViews**.

:::