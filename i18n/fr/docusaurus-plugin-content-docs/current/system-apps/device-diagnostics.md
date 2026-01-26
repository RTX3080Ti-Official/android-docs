# DeviceDiagnostics

**DeviceDiagnostics** is a diagnostic app included by default, with it's package name being `com.android.devicediagnostics`

:::tip

This app is normally locked down, requiring a **trused device QR code** to start normally, luckily, all activities are **exported** which means you can still do some parts of the diagnostics without a QR code.

:::

## Table of working diagnostics

| Battery | Display | Touch | Storage     |
| ------- | ------- | ----- | ----------- |
| ❎       | ✅       | ✅     | Partially\* |

\* Storage only has storage size, it looks like it isn't supposed to be only this.

## QR Code

In `.MainActivitiy`, there's two modes: Component health and Evaluation mode.
Evaluation mode has two options: Trusted device and Evaluated device, both require a QR Code tho.