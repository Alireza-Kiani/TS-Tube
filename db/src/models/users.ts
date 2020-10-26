import {
    DataTypes,
    Association,
    Model,
    HasManyCreateAssociationMixin,
    HasManyAddAssociationMixin,
    HasManyGetAssociationsMixin
} from "sequelize";
import bcrypt from "bcryptjs"

import sequelize from "../db/connection";
import Token from "./tokens";

class User extends Model {
    public id!: number;
    public username!: string;
    public name!: string;
    public password!: string;
    //
    public createToken!: HasManyCreateAssociationMixin<Token>;
    public addToken!: HasManyAddAssociationMixin<Token, number>;
    public getTokens!: HasManyGetAssociationsMixin<Token>;
    //
    public static associations: {
       tokens: Association<User, Token>;
    }
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: new DataTypes.STRING(512),
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    password: {
        type: new DataTypes.TEXT,
        allowNull: false,
    }
}, {
    hooks: {
        beforeSave(User) {
            if (User.changed('password')) {
                User.password = bcrypt.hashSync(User.password, 8);
            }
        }
    },
    tableName: "users",
    sequelize
});


export default User;