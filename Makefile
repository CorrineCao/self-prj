default:
	# build server
	{	cd server; \
		yarn install --production=false --frozen-lockfile; \
		yarn clean; \
		yarn build; \
		rm -fr node_modules; \
		yarn install --production --frozen-lockfile; \
	}

	# build client
	{	cd client; \
		yarn clean; \
		yarn install --production=false --frozen-lockfile; \
		yarn build; \
	}

	# prepare cdn static files
	rm -fr dist
	mkdir -p dist/self-prj
	cp -r client/dist/ dist/self-prj

	# prepare server files
	rm -fr releases && mkdir releases
	tar -zcf releases/self-prj.tar.gz server/dist server/node_modules client/dist/index.html
