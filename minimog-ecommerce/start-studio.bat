
@echo off
echo Loading environment and starting Prisma Studio...
call npx dotenv -e .env -- npx prisma studio
pause
