
export const state = () => ({
    avatar: "https://avatars.githubusercontent.com/u/9112378?v=4"
})

export const mutations = {
    changeAvatar(state, value) {
        state.avatar = value
    }
}