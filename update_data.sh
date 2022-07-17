#!/bin/sh

wget "https://tabla-constitucional.herokuapp.com/api/capitulos?populate[sub_capitulos][populate][0]=articulos" -O data.json

cp data.json srcs/data

if [ $? -ne 0 ]; then
    echo " 🛑 Error: command failed."
    exit $exit_code
else
	echo "Replaced in srcs/data. 👍"
fi

mv data.json static

if [ $? -ne 0 ]; then
    >&2 echo " 🛑 Error: command failed."
    exit $exit_code
else
	echo "Replaced in srcs/data. 👍"
fi

echo Updated! 👍