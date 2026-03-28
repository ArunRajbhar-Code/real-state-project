# Stage 1: Build
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:stable-alpine
# Copy the built files from Vite's 'dist' folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 (standard for HTTP)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
