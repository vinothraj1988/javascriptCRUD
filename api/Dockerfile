FROM node:14

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm install -g pm2

RUN npm ci --only=production

COPY . .

# expose port 3000 for our server to run on
# EXPOSE 3000
# command to start our server
# CMD [ "pm2-runtime", "start", "index.js", "-i", "max" ]

EXPOSE 8080
CMD [ "node", "index.js" ]