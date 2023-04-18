push:
	git push -u origin --all

create:
	npx create-react-app $(PROJ)

build:
	cd $(PROJ) && npm run build

start:
	cd $(PROJ) && npm start