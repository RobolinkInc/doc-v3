---
title: "Getting Started"
slug: Getting-Started
customHeadElements:
  - <link rel="manifest" href="manifest.json" />
---

## Getting Started &mdash; Coding in the browser

### What is *Python for Robolink*?
*Python for Robolink*, a browser-based program, allows you to connect to and program your drone without needing to install Python or an IDE (integrated development environment).
<img src="/img/CDE/python_docu/python_for_robolink_editor.png"/>

#### Why did we create two ways to code in Python?
While we still suggest using the desktop version by downloading PyCharm to your computer, we wanted to ensure that everyone has the opportunity to learn Python. *Python for Robolink* is ideal for people who do not have access to a device that has the capability of downloading and storing applications.

Use *Python for Robolink* if...
1. You are using a Chromebook
2. You do not have space on your current device to download PyCharm
3. Your IT team has not installed PyCharm on your computers yet
4. You do not have time to install PyCharm on every device

### How to Access *Python for Robolink*
Since *Python for Robolink* is a browser-based program, it can be accessed from any device that has Google Chrome, with the exception of iPads, tablets, and cell phones.

#### Link to *Python for Robolink*
Start programming your drone with *Python for Robolink* by heading to <a href="https://codrone.robolink.com/edu/python/">codrone.robolink.com/edu/python/</a>

<hr className="section_hr"/>

## Getting Started &mdash; Coding in PyCharm

### How to install Python

Install Python on your Mac or Windows machine. If you’re using a guest or limited account, **make sure you have access to admin credentials** for installing new software on the computer. This is especially important for students using a school computer or parent computer with limited access. If you’re on a Mac computer, you may need to modify the security settings in system preferences in order to download software.

:::caution
**(Last Edited 10/30/23):** The latest version of Python (3.12) has an issue with a library that manages packages in virtual environments. Please use [Python 3.11](https://www.python.org/downloads/release/python-3116/) when following along with this tutorial.
:::

Click [here](https://www.python.org/downloads/release/python-3116/) to go to the Python website to install v3.11. Follow along with the instructions in the video below. Regardless of the Python version shown in the video, the instructions will still apply.

<div className="youtube_video">

  <iframe width="560" height="315" src="https://www.youtube.com/embed/55vxDds3uIY?si=DK5OM6QMpTYH68R9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

</div>

<div className="youtube_video">

  <iframe width="560" height="315" src="https://www.youtube.com/embed/DXDzuI6DMsA?si=pQ9iObTkPd9YTIt8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

</div>

### How to install Pycharm

Next, install PyCharm Community (free) edition , which is what we’ll use for writing out our Python code and running it on CoDrone EDU.

:::note
If you choose not to use PyCharm and prefer your own editor or IDE, you will need to know how to install packages on your platform of choice. If you are not sure how to do this, we recommend following the tutorial for PyCharm instead.
:::

Click [here](https://www.jetbrains.com/pycharm/download/) to go to the PyCharm download page and follow the instructions in the video below.

<div className="youtube_video">

  <iframe width="560" height="315" src="https://www.youtube.com/embed/zK9yZAEnd38?si=yRgi33qqTCxki5Bc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

</div>

<div className="youtube_video">

  <iframe width="560" height="315" src="https://www.youtube.com/embed/uLmv5c_v5kE?si=0HEBeBoE2qYbhzPW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

</div>

### How to install CoDrone EDU library

Now you need to create a new project and set it up with the CoDrone EDU library. Follow along with the video instructions below. In the tutorial, you will need to copy and paste the import statement into the generated main.py. You do not need to connect your drone yet.
```python
from codrone_edu.drone import *
```
<br/>
:::note
If a main.py file was not generated, you can make a new one by right clicking on the project name and selecting “New > Python File”. This is for both Windows and Mac.
<img src="/img/CDE/Python_setup_installation_1.png" width="650px"/>
:::

<br/>

<br/>

<div className="youtube_video">

  <iframe width="560" height="315" src="https://www.youtube.com/embed/KLysZBM3gVw?si=3pjSPPiVFLnmhwEL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

</div>

<div className="youtube_video">

  <iframe width="560" height="315" src="https://www.youtube.com/embed/Iobi5pVSzyc?si=oyGfJOsTtdFPlnXk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

</div>

<hr className="section_hr"/>

## System Requirements

### Device Requirements

- MacOS, Windows, or ChromeOS* (*PyCharm is not supported on Chromebooks)

- Mobile devices such as tables (iPads, Android, etc.) are not supported

- A computer with a USB-A port

- Windows 10 or newer for PC users

For the best experience, it's recommended to keep your browser and devices up-to-date.

### Hardware Requirements

<img src="/img/CDE/device-requirements.png" width="680px"/>  
<br/>
<br/>

Try to use the cable that comes with CoDrone EDU whenever possible! This USB cable can transfer data, which is necessary for programming. Most USB cables now are data compatible. If your drone does not switch to LINK state when connecting, you may have the wrong cable or it may be broken.

### Google Chrome Requirements
Your Google Chrome should be updated to the most recent version. If you are not sure how to check, click on the the menu on the top right, scroll down to “Help”, and select “About Google Chrome”. Google Chrome might automatically update. If not, please update Chrome.

<img src="/img/CDE/chrome_requirements_1.png" width="512px"/>  
<br/>
<br/>

<img src="/img/CDE/chrome_requirements_2.png"/>
