# Executables (local)
DOCKER_COMPOSE = docker compose

# Docker containers
NODE_CONTAINER = $(DOCKER_COMPOSE) exec node-knex-api

# Monta imagem
build:
	@$(DOCKER_COMPOSE) build

# Inicia os containers
up:
	@$(DOCKER_COMPOSE) up $(c)

# Inicia os containers sem travar o terminal
up-d:
	@$(DOCKER_COMPOSE) up --detach $(c)

# Para a execução dos containers
stop:
	@$(DOCKER_COMPOSE) stop $(c)

# Desmonta os containers
down:
	@$(DOCKER_COMPOSE) down $(c) --remove-orphans

# Mostra logs
logs:
	@$(DOCKER_COMPOSE) logs $(c)

# Mostra logs
logs-f:
	@$(DOCKER_COMPOSE) logs --tail=0 --follow $(c)

# Lista containers
ps:
	@$(DOCKER_COMPOSE) ps

# Abre o diretório do container 
node-sh:
	@$(NODE_CONTAINER) sh

# Configura permissões
set-permissions:
	@$(NODE_CONTAINER) chown -R 1000.1000 .

#  Lista IP dos contaienrs
list-ip-containers:
	docker network inspect node-knex-api | grep --color -E 'IPv4Address|Name'

# Força a execução de um comando
force:
	@true

knex@init:
	$(NODE_CONTAINER) npx knex init

# Executa as migrações
migrate:
	$(NODE_CONTAINER) npx knex migrate:latest --esm

# Cria uma nova migração
make@migration:
	$(NODE_CONTAINER) npx knex migrate:make $(name)

# Executa os seeds
seed:
	$(NODE_CONTAINER) npx knex seed:run

# Cria um novo seed
make@seed:
	$(NODE_CONTAINER) npx knex seed:make $(name)

migrate@rollback:
	$(NODE_CONTAINER) npx knex migrate:rollback

migrate@test:
	$(NODE_CONTAINER) npx knex migrate:latest --env test --esm