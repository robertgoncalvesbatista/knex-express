# Executables (local)
DOCKER_COMPOSE = docker compose

# Docker containers
NODE_CONTAINER = $(DOCKER_COMPOSE) exec node-knex-api

# Executables
KNEX = $(NODE_CONTAINER) $(c)

# Makefile
up:
	@$(DOCKER_COMPOSE) up $(c)

up-d:
	@$(DOCKER_COMPOSE) up --detach $(c)

stop:
	@$(DOCKER_COMPOSE) stop $(c)

down:
	@$(DOCKER_COMPOSE) down $(c) --remove-orphans

logs:
	@$(DOCKER_COMPOSE) logs $(c)

logs-f:
	@$(DOCKER_COMPOSE) logs --tail=0 --follow $(c)

ps:
	@$(DOCKER_COMPOSE) ps

node-sh:
	@$(NODE_CONTAINER) sh

knex: force
	@$(KNEX)

list-ip-containers:
	docker network inspect node-knex-api | grep --color -E 'IPv4Address|Name'

set-permissions:
	@$(NODE_CONTAINER) chown -R 1000.1000 .

force:
	@true
