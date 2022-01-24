const User = require('../models/User')

class userController {
    async create(req, res) {
        const { login, password, fio, role } = req.body
        const candidate = await User.findOne({ login })
        if (candidate) return res.json({ message: "такой пользователь уже существует" })
        if (!login || !password) return res.json({ message: "некорректные данные" })
        const user = new User({ login, password, fio })
        await user.save()
        return res.json(user)
    }
    async delete(req, res) {
        const { deleteLogin, login, pass } = req.body
        if (!deleteLogin || !login || !pass) return res.json({ message: "некорректные данные" })
        const candidate = await User.findOne({ login: deleteLogin })
        if (!candidate) return res.json({ message: "такой пользователь уже существует" })
        const aut = await User.findOne({ login: login, password: pass })
        if (!aut) return res.json({ message: "не авторизирован" })
        if (aut.role !== "ADMIN") return res.json({ message: "нет доступа" })
        await User.deleteOne({ login: deleteLogin })
        return res.json({ message: `пользователь ${deleteLogin} удалён` })
    }
}

module.exports = new userController()