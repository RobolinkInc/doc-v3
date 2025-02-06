---
title: "Updating the Library"
slug: Updating-Library
customHeadElements:
  - <link rel="manifest" href="manifest.json" />
---

## Updating CoDrone EDU Python Library

Occasionally, there will be updates to the CoDrone EDU Python library. The current library version is version 2.0. You can view the changelog [here](/docs/CoDroneEDU/Python/Python-Changelog).

:::tip

If your version of Python is different from the CoDrone EDU library version, it can be a good idea to stay up to date (although updating your Python version is not always necessary). See Python versions available <a role="button" id="popupBtn" onClick={() => window.openModalPython()}>here</a>.
<div id="modalWrap_python">
    <div id="modalContent">
        <div id="modalBody">
            <div>
                <span id="popup_text">
                    You are leaving Robolink’s 
                    Documentation site. Please be 
                    aware that any website 
                    outside of our Document 
                    page will be subject to 
                    privacy policies different 
                    from this website.
                </span>
            </div>
            <br/>
            <div className="popup_div">
                <a id="popup_stay" href="#" onClick={() => window.closeModalPython()}>Stay on this site</a>
            </div>
            <br/>
            <div className="popup_div">
            <button type="button" id="popup_go" onClick={() => window.handleExternalPython()}>Continue to external site</button>
        </div>
        </div>
    </div>
</div>

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