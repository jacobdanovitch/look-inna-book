#!/bin/bash

set -e

USER="jacobgdt"
APP="look-inna-book-comp3005"

DATA_PATH="amazon_books.csv"
SAMPLE_PATH="book_sample.csv"
DUMP_PATH="look-inna-book.dump"
# REMOTE_PATH="https://jacobdanovitch.blob.core.windows.net/datasets/look-inna-book.dump"
REMOTE_HOST="look-inna-book-postgres-hasura-pg-server.postgres.database.azure.com"

pandas-cli $DATA_PATH ".sample(10000).to_csv('$SAMPLE_PATH', index=False)"
pgcsv --db 'postgresql://localhost/look-inna-book?user=$USER' books 
pg_dump -Fc --no-acl --no-owner -h localhost -U $USER look-inna-book > $DUMP_PATH

pg_restore -v --no-owner --host=$REMOTE_HOST \
                        --port 5432 \
                        --user=jacobgdt@look-inna-book-postgres-hasura-pg-server \
                        --dbname look-inna-book \
                        --clean \
                        $DUMP_PATH

# heroku pg:backups:restore "$REMOTE_PATH" DATABASE_URL -a $APP