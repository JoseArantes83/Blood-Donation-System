# Blood-Donation-System
This is a guide to get the Blood Donation System project up and running. Follow these steps to set up the project on your local machine.
## Prerequisites
Before you begin, ensure that you have the following installed on your machine:
* [WSL2](https://learn.microsoft.com/en-us/windows/wsl/install) (Windows Subsystem for Linux) on Windows
* [Docker](https://docs.docker.com/engine/install/) installed and running
* [Node.js](https://nodejs.org/en) and [NPM](https://www.npmjs.com/) installed
* [Vue CLI](https://cli.vuejs.org/) (for the Vue project)
## Steps to Run the Project
### 1. Install Docker on WSL 2
If you're using WSL 2, make sure Docker is installed and running. You can follow the official [Docker documentation](https://docs.docker.com/) to install Docker Desktop, which will configure Docker for use with WSL 2.
### 2. Create a PostgreSQL Container
Create and run a Docker container with PostgreSQL to use as the database for the project. Run the following command in your terminal (make sure Docker is running):
```bash
sudo docker run --name container-postgres -e POSTGRES_PASSWORD=yourpassword -e POSTGRES_USER=youruser -e POSTGRES_DB=postgres -p 5432:5432 -d postgres
```
### 3. Create .env File in the NestJS Project
In the NestJS project, create a .env file in the root directory with the following environment variables:
```bash
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=youruser
DB_PASSWORD=yourpassword
DB_NAME=postgres
```
Ensure that these values match the configuration you used for the PostgreSQL container.
### 4. Install Dependencies for the NestJS and Vue Projects
**For the NestJS Project:**
Navigate to the **NestJS** project directory and install the necessary dependencies:
```bash
cd /path/to/nestjs/project
npm install
```
**For the Vue Project:**
Navigate to the **Vue** project directory and install the necessary dependencies:
```bash
cd /path/to/vue/project
npm install
```
### 5. Run the NestJS Project
In the **NestJS** project directory, run the following command to start the server:
```bash
npm run start
```
This will start the NestJS backend server.
### 6. Run the Vue Project
In the Vue project directory, run the following command to start the front-end application:
```bash
npm run dev
```
This will start the Vue development server.
### 7. Access the Application
* **Vue Frontend**: Once the Vue application is running, it will be accessible at [http://localhost:5173](http://localhost:5173/).
