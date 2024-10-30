if [ "$DATABASE" = "postgres" ]
then
    echo "Esperando a que PostgreSQL arranque..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL arrancado"
fi

exec "$@"