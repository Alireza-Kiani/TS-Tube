import User from "../../models/users";
import bcrypt from "bcryptjs"


class UserServices {
    createUser = async (input: {
        name: string,
        username: string,
        password: string
    }): Promise<User> => {
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

    redButton = async () => {
        if(User.sequelize?.config.database === "ts-tube-test") {
            try {
                await User.destroy({
                    where: {},
                    truncate: true
                });
            } catch (e) {
                console.log(e)
            }
        }
    }
}

export default new UserServices();