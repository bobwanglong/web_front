push:
	git push -u origin --all

create:
	npx create-react-app $(PROJ)

build:
	cd $(PROJ) && npm run build

start:
	cd $(PROJ) && npm start

vite:
	npm create vite $(PROJ) --template react

# 安装react-router包
router:
	cd $(PROJ) && npm add react-router-dom@6