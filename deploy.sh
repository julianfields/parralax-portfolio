#!/bin/sh

set -e

bundle

bundle exec middleman build

s3cmd sync build/ s3://julianfields.net/

