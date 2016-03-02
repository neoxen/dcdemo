FROM node:4.3.1

npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN npm install -g yo
RUN npm install -g generator-webapp


# replace this with your application's default port
EXPOSE 3000 3001