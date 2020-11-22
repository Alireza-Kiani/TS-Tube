import {
    DataTypes,
    Model,
    BelongsToGetAssociationMixin,
    BelongsToSetAssociationMixin
} from "sequelize";

import sequelize from "../db/connection";
import User from "./users";


class Token extends Model {
    public id!: number;
    public token!: string;
    //
    public setUser!: BelongsToSetAssociationMixin<User, number | null>;
    public getUser!: BelongsToGetAssociationMixin<User>;
}

Token.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    }, token: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
    tableName: "tokens",
    sequelize
})


export default Token;