const handleNoUserData = (res, userData) => {
    if (!userData) {
        res.statusCode = 404
        return res.json('can not get user')
    }

    return res.json({data: userData})
}

// eslint-disable-next-line no-undef
module.exports = {
    handleNoUserData
}
