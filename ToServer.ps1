ng build --prod
pause
winscp.exe Honey /keepuptodate "C:\Users\Annaniks LLC\Desktop\aloha\dist\aloha" /html /defaults
pause
# plink -ssh honey@honey.bestmx.net:321 -pw 3xWB94kY "sudo service nginx restart"