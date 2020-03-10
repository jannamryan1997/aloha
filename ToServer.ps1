ng build --prod
pause
winscp.exe Mediq /keepuptodate "C:\Users\Annaniks LLC\Desktop\aloha\dist\aloha" /var/www/aloha /defaults
pause
plink -ssh root@46.101.179.50 -pw LCto6XSk "sudo service nginx restart"