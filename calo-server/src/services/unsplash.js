const fetch = require('node-fetch')
global.fetch = fetch
const { createApi } = require("unsplash-js")

const unsplash = createApi({ accessKey: process.env.UNSPLASH_ACCESS_KEY })

module.exports = {
    async getRandomPhoto({ query }) {
        try {
            const res = await unsplash.photos.getRandom({ query })
            return res
        } catch (e) {
            console.error(e.message)
        }
    }
}