# PERN Template

PERN stack template with latest package versions

This repository contains a template for setting up a full-stack application using the PERN stack (PostgreSQL, Express, React, Node.js). The template is configured with the latest versions of all required packages, ensuring compatibility and access to the most up-to-date features and security patches.

It provides a ready-to-use foundation for building robust web applications, including backend API setup with Express, database integration using PostgreSQL, and a frontend built with React. Whether you're starting a new project or experimenting with the stack, this template offers a clean, modern setup with minimal configuration.

Features:

- [PostgreSQL](https://www.postgresql.org/) (14) - A powerful, open-source relational database management system (RDBMS) that uses SQL to store structured data. It supports advanced features like JSON data types, ACID compliance, and complex queries, making it ideal for handling both relational and semi-structured data in large-scale applications.
- [Express.js](https://expressjs.com/) - A lightweight and fast web framework for Node.js, used to build the backend and handle HTTP requests and API routes efficiently.
- [React](https://reactjs.org/) (19.0.0) - A powerful JavaScript library for building user interfaces, especially for single-page applications where dynamic, real-time updates are key.
- [Node.js](https://nodejs.org/) (v22.13.1) - A JavaScript runtime that allows us to use JavaScript on the server-side, handling backend logic, APIs, and database operations.


### Installation for development
#### 1. Install nvm
(f.e. https://www.vultr.com/docs/install-nvm-and-node-js-on-ubuntu-20-04/)
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
nvm --version
```
ALTERNATIVE:
```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh
```

#### 2. Install Node
```
nvm install v22.13.1
nvm alias pern v22.13.1
nvm use pern
```

#### 3. Make Node using automatically (optional but strongly recommended)
Run command:
```
code $HOME/.bashrc
```
Put here:
```
enter_directory() {
  if [[ $PWD == $PREV_PWD ]]; then
    return
  fi

  PREV_PWD=$PWD
  [[ -f ".nvmrc" ]] && nvm use
}

export PROMPT_COMMAND=enter_directory
```

#### 4. Install packages
```
npm i
```

#### 5. Prepare environment
Copy the .env.example file to .env and replace the placeholders with the correct values.

#### 6. Install PostgreSQL
Use official documentation [PostgreSQL (Windows installation)](https://www.postgresql.org/download/windows/)

#### 7. Prepare database
Make sure that the database you are connecting to in the DATABASE_URL exists.
Run command for migrations applying:
```
npx prisma migrate deploy
```
*Note: we use prisma 5.21.1 and @prisma/client 5.21.1 because latest prisma is not working in WSL - see [migrate dev error #24970](https://github.com/prisma/prisma/issues/24970)*

#### 8. Start application
For development mode run these commands
```
npm run client
```
```
npm run server
```
For building use
```
npm run client:build
```
```
npm run server:build
```
Or common build
```
npm run build
```