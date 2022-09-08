module.exports = {
    index : (req, res) => {
        return res.render('index')
    },

    adminHome : (req, res) => {
        return res.render('admin')
    }
}