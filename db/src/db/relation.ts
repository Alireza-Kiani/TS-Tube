import User from "../models/users";
import Token from "../models/tokens";

Token.belongsTo(User);
User.hasMany(Token);
