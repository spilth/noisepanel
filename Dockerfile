FROM node:10.16.0-alpine
WORKDIR /soundboard-react-typescript
COPY package.json yarn.lock ./
RUN npx yarn@1.17.3 install
COPY . .
RUN npm run build
EXPOSE 5000
ENV NODE_ENV=production
CMD npx --no-install serve -s
