@ECHO off
:Slack
::if Exists C:\Users\%USERNAME%\AppData\Local\slack


:Git
cmd /C "git --version" >> "temp"
set /p gitVer=<"temp"
del "temp"
cmd /C "node getGit.js"
set gitString="'git' is not recognized as an internal or external command, operable program or batch file."
echo %gitVer% 
echo %gitString%
if %gitVer% NEQ %gitString% (
echo "Git was found on your computer, Update will commence"
) else (
echo "Installing Git"
)
cmd /C "node getGit.js"
powershell -Command "Invoke-WebRequest http://git-scm.com/download/win -OutFile Git.exe"
Set /P vers=<ver.txt


:Node
cmd /C "node -v" >> "temp"
set /p ver=<"temp"
del "temp"
set string="'node' is not recognized as an internal or external command, operable program or batch file."
if %ver% NEQ %string% (
echo "Node was found on your computer, Update will commence"
cmd /C "node getLink.js"
Set /P version=<node.txt
Set /P vers=<ver.txt
del node.txt
del ver.txt 
set mypath=%cd%
powershell -Command "Invoke-WebRequest %version% -OutFile %vers%.msi"
start %vers%.msi
pause
) else (
echo "Installing Node"
pause
exit
)

del %vers%.msi
pause