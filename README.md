ClockifyWatch
=============

This is a little utility to run Clockify and ActivityWatch in gluon windows
gluon is a framework that supports using native browser windows running as separate apps
This is written in nodejs

Installation
------------

To run this on Windows easily without a command prompt window appearing:

* Install nodejs and npm
* Go to this directory and run npm Install
* Create a Windows shortcut in `%USERPROFILE%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs`, and:
  - Set the target path to `C:\Windows\System32\wscript.exe path\to\cmd-no-windows.vbs path\to\clockifywatch.cmd`
  - Change the icon to `ClockifyWatch.ico` from this directory
