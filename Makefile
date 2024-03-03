ifneq ($(realpath /bin/bash),)
	SHELL = /usr/bin/env bash
else
	SHELL = /usr/bin/env sh
endif

help: ## Print help for each target
	$(info =============================)
	$(info )
	$(info Available commands:)
	$(info )
	@grep '^[[:alnum:]_-]*:.* ##' $(MAKEFILE_LIST) \
	| sort | awk 'BEGIN {FS=":.* ## "}; {printf "%-25s %s\n", $$1, $$2};'

git-pull: ## git pull
	@git pull

dev: ## Run the code in development mode
	@npm run dev

lint: ## Lint the code
	@npm run lint

container-build: ## Build the container
	@docker build -t syntaxbullet/personal-website .

container-run: ## Run the container
	@docker run -it --rm -p 3000:3000 --name personal-website syntaxbullet/personal-website

container-rund: ## Run the container in daemon mode in `nginx-public` network
	@docker run -d --network nginx-public --name personal-website syntaxbullet/personal-website

clean: ## Cleanup
	@rm -rf node_modules

update-deploy: git-pull container-build container-rund
