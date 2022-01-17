
start:
	make install

install:
	yarn

setup:
	make install

run:
	make setup
	yarn start

tests:
	make setup
	yarn test