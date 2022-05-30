module.exports = (req, res, next) => {
    res.header('Content-Range', 'users 0-10/10')
    res.header('X-Total-Count', '10')
    res.header('Access-Control-Expose-Headers', 'X-Total-Count')
    next()
} 