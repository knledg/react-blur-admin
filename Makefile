BABEL = node_modules/.bin/babel

export NODE_ENV = test

.PHONY: build clean dist

build:
	$(BABEL) src/ --modules common --out-dir dist

clean:
	rm -rf dist

dist:
	make clean
	make build