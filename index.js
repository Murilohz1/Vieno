const { spawn } = require('child_process');

spawn('bash', ['-c', 'cd Vieno-bot-v1 && sh start.sh'], { stdio: 'inherit' });