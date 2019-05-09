# Bootcamp GoStack-6 - Desafio 03

## Sobre o Desafio

Criar uma api usando NODE e Express.
Utilizar o Sentry para controle de erros em ambiente de produção.
Utilizar o conceito de job e filas para envio de email.
Utilizar MongoDb e Redis

## Rodando o app

Primeiro instale e configure os bancos

### Redis

docker run --name gonode-redis -p 6379:6379 -d redis
Isso irá criar uma instancia do Redis, rodando na porta 6379
Caso reinicie o PC utilize o comando abaixo para startar o serviço
docker start gonode-redis

### MongoDb

docker run --name gonode-mongo -p 27017:27017 -d -t mongo
Isso irá criar uma instancia do Mongo, rodando na porta 27017
Caso reinicie o PC utilize o comando abaixo para startar o serviço
docker start gonode-mongo

### Projeto

Na pasta da aplicação rode o comando "yarn" para instalar as dependecias.
Rode o comando "yarn start" para subir o serviço. Por default o serviço irá rodar na porta 3000
