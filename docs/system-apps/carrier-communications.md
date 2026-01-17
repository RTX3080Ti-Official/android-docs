# Carrier Communications
**Carrier Communications** is an app used by carriers to indicate when a device has run OOB (Out Of Balance). It's package name is ``com.android.carrierdefaultapp``.

:::note

Most carriers do not use this feature (unlimited data, etc...) so it's safe to disable but it's still recommended to check with your carrier.

:::

## Activities
There's 3 activities in this app:
- Sign in to mobile network (``.CaptivePortalLoginActivity``)
- Purchase a performance boost (``.SlicePurchaseActivity``)
- Sign in to mobile network (``.URLHandlerActivity``)

:::note

Launching these activities without any context will crash the **Carrier Communications** app.

:::