FROM node:22-slim

ENV NODE_ENV=production

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .
COPY ./prisma ./prisma

RUN apt-get update -y && apt-get install -y openssl

RUN npm install && npx prisma generate

COPY ./node_modules/.prisma ./node_modules/.prisma

COPY . .

CMD ["node", "index.js"]

EXPOSE 5000

