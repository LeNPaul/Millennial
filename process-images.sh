#!/bin/sh
INPUT=$1
OUTPUT=$2
echo "First arg: $INPUT"
echo "Second arg: $OUTPUT"
for PHOTO in $INPUT/*.jpg; do
    convert -verbose -resize 35% -quality 75 "$PHOTO" "$OUTPUT/$(basename "$PHOTO")"
done
