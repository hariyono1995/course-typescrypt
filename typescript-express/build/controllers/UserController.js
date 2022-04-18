"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = [
    { id: 1, name: "budi" },
    { id: 2, name: "andi" },
    { id: 3, name: "susi" },
    { id: 4, name: "siti" },
    { id: 5, name: "sri" },
    { id: 6, name: "sriyanti" },
];
class UserController {
    index(req, res) {
        console.log("masuk ke controller user index setelah middleware");
        return res.send(data);
    }
    show(req, res) {
        const id = parseInt(req.params.id);
        const users = data.find((user) => user.id === id);
        return res.send(users);
    }
    create(req, res) {
        const { id, name } = req.body;
        const user = data.push({ id, name });
        return res.send({
            msg: "success",
            user: { id: id, name: name },
            data: user,
        });
    }
    update(req, res) {
        const id = parseInt(req.params.id);
        const { name } = req.body;
        const user = data.find((user) => user.id === id);
        user.name = name;
        return res.send({ msg: "success", data: user });
    }
    delete(req, res) {
        const id = parseInt(req.params.id);
        const user = data.filter((user) => user.id !== id);
        return res.send({ msg: "user id: " + id + "deleted", data: user });
    }
}
exports.default = new UserController();
