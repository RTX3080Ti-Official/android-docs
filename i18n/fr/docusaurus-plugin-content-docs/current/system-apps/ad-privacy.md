---
tags:
  - ad-services
---

# Ad Privacy

**Ad Privacy** is an app added in Android 13, it is part of a feature disabled by default. It's package name is `com.android.adservices.api`

<details>

<summary>Learn more</summary>

This app was introduced in Android 13 privacy sandbox beta components, you can read more here: https://source.android.com/docs/core/ota/modular-system/adservices

</details>

## Activities

All the activities are some kind of setting under the package name `com.android.adservices.ui.*`

:::tip

If you use a degoogled ROM (e.g. LineageOS) **Ad Privacy** is still included but not shown in Settings. If you want to access them for some reasons you can use the open-source app [App Manager](https://github.com/MuntashirAkon/AppManager).

:::

## Services

La plupart des services ne sont que des tâches d'analyse, d'annonces et de sujets. Theirs packages names are `com.android.adservices.*`

:::note Fun Fact

[App Manager](https://github.com/MuntashirAkon/AppManager) does not detect any tracker used in **Ad Privacy**

:::