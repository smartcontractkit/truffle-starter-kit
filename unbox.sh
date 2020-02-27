#!/usr/bin/env bash

set -e

IMAGE=box-img-lg.png
if [ -f "$IMAGE" ]; then
	rm box-img*
fi