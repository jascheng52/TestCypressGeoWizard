FROM cypress/included:11.2.0
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install
RUN $(npm bin)/cypress run