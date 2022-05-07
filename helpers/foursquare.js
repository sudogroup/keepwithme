export default $axios => () => ({
   async getCheckins() {
        const TOKEN = "GDIZRFP2N0RLNM0KQ1MGZI0SEL3HRLZSYUHW4AOU3BTTJSS1"
        const VERSION = "20220507"
        const URL = `https://api.foursquare.com/v2/users/self/checkins?oauth_token=${TOKEN}&v=${VERSION}`
        const checkinsResponse = await $axios.$get(URL)
        const checkins = checkinsResponse.response.checkins.items.slice(0, 3)
        return checkins
    }
})