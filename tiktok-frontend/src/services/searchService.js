import * as httpRequest from '~/utils/httpRequest'

export const search = async (q) => {
    try {
        const res = await httpRequest.get(`/users/search`, {
            params: {
                q,
                type: 'less',
            },
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}
