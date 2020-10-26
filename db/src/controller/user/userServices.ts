import User from "../../models/users";
import {UserType} from "../../types/user"
import bcrypt from "bcryptjs"


class UserServices {
    createUser = async (input: UserType): Promise<UserType> => {
        return await User.create(input);
    }

    login = async (input: {
        input: string,
        type: string,
        password: string
    }): Promise<User | null> => {
        const user: User | null = await User.findOne({where: {[input.type]: input.input}})

        if (!user) {
            throw ({error: "user not found"});
        }

        if (bcrypt.compareSync(input.password, user.password)) {
            return user;
        } else {
            throw ({error: "Wrong password"});
        }
    }
}

export default new UserServices();