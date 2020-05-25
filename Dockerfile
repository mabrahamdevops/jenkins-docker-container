# This dockerfile imports node version 12
# Defines the workding directory variable /app
# npm install downloads a package and it's dependencies from 
# https://nodejs.org/en/download/
# EXPOSE 3000 is used to create a connection to docker.socket.
# *This should not be done in a developoment environment without
# consulting with your IT or DevSec Ops teams.  Ideally network ACLs should be used

FROM node:12
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 3000
CMD npm start
