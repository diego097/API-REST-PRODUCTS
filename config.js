module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB || 'mongodb://mongo/shop',
    SECRET_TOKEN: 'miclavedetokens'
}