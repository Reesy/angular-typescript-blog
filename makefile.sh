#!/bin/bash
echo "#######  compiling server files:"
echo "server"
tsc server --module commonjs
cd ./models
echo "models"
tsc blogModel --module commonjs
cd ../routes
echo "routes"
tsc blogRoutes --module commonjs
cd ../public/scripts
echo "#######  compiling app.ts"
tsc app --module commonjs
