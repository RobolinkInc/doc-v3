---
title: "Updating the Library"
slug: Updating-Library
customHeadElements:
  - <link rel="manifest" href="manifest.json" />
---

## Updating CoDrone EDU Python Library

Occasionally, there will be updates to the CoDrone EDU Python library. The current library version is version 1.9.

:::tip

If your version of Python is different from the CoDrone EDU library version, it can be a good idea to stay up to date (although updating your Python version is not always necessary). See Python versions available <a href="https://www.python.org/downloads/">here</a>

:::

1. First, check your current codrone-edu library version in your project interpreter settings.

:::note
On Windows, you can find your project interpreter settings under File > Settings. On MacOS, the settings menu is under PyCharm > Settings.

:::

Your current version is listed in the middle column. If there is a newer version available, it will be listed in the third column denoted by the 🔼 symbol.

<img src="\img\CDE\python_docu\update_library_1.png"/>

2. Double click on the library to open up the installation window. Select the checkbox "Specify version". It should default to the newest version available. Note: If you do not check the box the library will not update.

<img src="\img\CDE\python_docu\update_library_2.png"/>

3. Click "Install Package" to install the specified version (in this case, the latest version).

<img src="\img\CDE\python_docu\update_library_3.png"/>

4. Close the installation window and verify the installation in the package list.

<img src="\img\CDE\python_docu\update_library_4.png"/>

:::warning
If you have multiple projects that were set up with the default virtual environment settings, you will need to repeat this process for each PyCharm project. Updating the library in one project will not transfer over to any other projects.
:::