const handleRes = res => data => res.json(data)
const handleErr = res => e => res.status(400).json("Error: " + e)

const routeHandler = (request) => (res) =>
    request()
        .then(handleRes(res))
        .catch(handleErr(res))

module.exports = {handleRes, handleErr, routeHandler}
