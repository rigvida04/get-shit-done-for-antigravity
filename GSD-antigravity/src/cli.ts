function printHelp() {
  console.log('GSD Antigravity CLI');
  console.log('');
  console.log('Usage:');
  console.log('  npm run cli -- <command>');
  console.log('');
  console.log('Commands:');
  console.log('  status    Show project status');
  console.log('  help      Show this help text');
}

function run() {
  const command = process.argv[2] ?? 'help';

  if (command === 'status') {
    console.log('GSD-antigravity is ready.');
    return;
  }

  printHelp();
}

run();
