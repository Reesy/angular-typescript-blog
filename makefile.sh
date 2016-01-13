#!/bin/bash
echo "#######  compiling server files:"
echo "server"
cd Atsb-server-side
tsc server --module commonjs
cd ./models
echo "models"
tsc blogModel --module commonjs
cd ../routes
echo "routes"
tsc blogRoutes --module commonjs
echo "data-access"
cd ../DataAccess
tsc blogManager --module commonjs
cd ../../Atsb-client-side/scripts
echo "#######  compiling app.ts"
tsc app --module commonjs
cd ../../Atsb-Server-side
echo "Attempting to run server"
node server
