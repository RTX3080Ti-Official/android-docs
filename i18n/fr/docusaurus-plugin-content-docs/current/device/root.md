# Root (or Superuser)

**Root (or Superuser)** is only available if you use a specific program (e.g. [Magisk](https://github.com/topjohnwu/Magisk)).

## How to use root commands?

Some apps may already come with a Root mode, if so, doing anything that requries Root will open a popup to ask for your consent.

:::danger

Do not allow random apps Root access, only do so if the app/developer is trusted OR the code is open-source (less risk).

:::

You can also use [Termux](https://f-droid.org/en/packages/com.termux/) to run custom commands by using `su` or `sudo`.

:::note

`sudo`/`tsu` requires you to install them by doing `pkg install sudo`/`pkg install tsu`.

:::

## Modules

**Magisk** has the ability to run Modules, these modules usually runs at system startup.

:::danger

Do not install random modules from untrusted sources.

:::

## Special folders

Root allows you to access normally restriced folders (both read and write or just read for some) like `/data/data`. Some folders are still blocked even with Root.

## Comparaison to ADB

Even tho ADB might look like a solid option compared to Root, since you don't need to modify your system, it is not. ADB cannot run Root commands without the `su` prefix, which is only available after installing Root.