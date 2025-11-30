# 1. Build Stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --omit=dev --ignore-scripts

# Copy source and build
COPY . .
RUN npm run build


FROM nginx:1.29.3-alpine

COPY --from=builder --chown=nginx:nginx /app/build /usr/share/nginx/html 
COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
