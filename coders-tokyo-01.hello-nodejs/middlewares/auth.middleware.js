const db = require('./../db')
module.exports.authRequire = (req, res, next) => {
    if (!req.signedCookies.userId) {
        res.redirect('/auth/login');
        return;
    }
    const user = db.get('users').find({ id: req.signedCookies.userId }).value();
    if (!user) {
        res.redirect('/auth/login');
        return;
    }
    res.locals.user = user;
    next();
}