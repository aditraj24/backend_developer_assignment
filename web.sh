#!/bin/bash
set -e

echo "Starting backend server..."
cd backend
npm run start &
BACK_PID=$!

echo "Starting frontend server..."
cd ../frontend
npm run start

if ps -p $BACK_PID > /dev/null; then
  echo "Backend still running (PID $BACK_PID)"
fi

# chmod +x setup.sh web.sh