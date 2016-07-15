module.exports = function (app) {
    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function (req, res) {
        var jsonTest = {"key":"value"};
        res.json(jsonTest);
    });
}