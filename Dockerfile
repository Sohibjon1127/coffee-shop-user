# Node.js bazasi
FROM node:20-alpine

# Ishchi katalog
WORKDIR /app

# Paket fayllarni ko‘chirish
COPY package*.json ./

# Modul o‘rnatish
RUN npm install

# Barcha fayllarni ko‘chirish
COPY . .

# Portni ochish
EXPOSE 3000

# Development rejimda ishga tushirish
CMD ["npm", "run", "start:dev"]
