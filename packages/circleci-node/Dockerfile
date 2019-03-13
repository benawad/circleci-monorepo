FROM node
WORKDIR /usr/app
COPY . .
RUN yarn

ENV NODE_ENV=production
EXPOSE 4000
CMD cd ./packages/server && ts-node -T src/index.ts
USER node