BABEL = node_modules/.bin/babel

export NODE_ENV = test

.PHONY: build clean dist lint test

build:
	$(BABEL) src/ --modules common --out-dir dist

lint:
	npm run lint

test:
	npm run test

clean:
	rm -rf dist

dist:
	make clean
	make build
