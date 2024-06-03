import request from 'superagent'

const rootUrl = '/api/v1'

export function getGoals(): Promise<string[]> {
    return request.get(rootUrl + '/test').then((res) => {
        return res.body
    })
}