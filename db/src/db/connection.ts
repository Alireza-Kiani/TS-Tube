import {Sequelize} from "sequelize";

const connection: {
    host: string,
    username: string,
    database: string,
    password: string,
    logging: boolean,
    dialect: "mysql"
} = {
    host: process.env.SQLHost!,
    username: process.env.SQLUser!,
    database: process.env.SQLDatabase!,
    password: process.env.SQLPassword!,
    logging: false,
    dialect: "mysql"
}

const sequelize = new Sequelize(connection);

export default sequelize;