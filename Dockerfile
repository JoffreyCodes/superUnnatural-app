FROM node

WORKDIR /app

COPY package.json .

RUN npm install

# First dot signifies current directory where Dockerfile is located 
# in and place it into the second dot which signifies the WORKDIR
COPY .  .

EXPOSE 3000

CMD ["npm", "start"]