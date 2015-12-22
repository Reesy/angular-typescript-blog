#!/bin/bash
echo "compiling server.ts"
tsc server --module commonjs
cd ./public/scripts
echo "compiling app.ts"
tsc app --module commonjs
