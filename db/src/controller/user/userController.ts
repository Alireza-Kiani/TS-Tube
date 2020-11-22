import UserServices from "../user/userServices";

class UserController {

    addUser = async (input: any, cb: any) => {
        try {
            if (!input.name || !input.password || !input.username) {
                throw ({message: "Invalid Input"});
            }

            const user = await UserServices.createUser(input);

            cb(user, null);
        } catch (error){
            cb(null, error);
        }
    }

    findUser = async (input: any, cb: any) => {
        try {
            if (!input.password || !input.input) {
                throw ({message: "Invalid Input"});
            }
            const user = await UserServices.login(input);

            cb(user, null);
        } catch (error){
            cb(null, error);
        }
    }

    // editUser: RequestHandler = async (req, res) => {
    //     res.status(200).send("editUser");
    // }

    // clearUsers: RequestHandler = async (req, res) => {
    //     res.send(await UserServices.redButton())
    // }



}

export default new UserController();

