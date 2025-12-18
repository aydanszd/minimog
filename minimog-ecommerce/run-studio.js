
const { spawn } = require('child_process');
const dotenv = require('dotenv');

// Load environment variables
const result = dotenv.config();

if (result.error) {
    console.error('Error loading .env file:', result.error);
    process.exit(1);
}

console.log('Environment loaded.');
console.log('DATABASE_URL is set:', !!process.env.DATABASE_URL);

const prisma = spawn('npx', ['prisma', 'studio'], {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env }
});

prisma.on('close', (code) => {
    console.log(`Prisma Studio process exited with code ${code}`);
});
