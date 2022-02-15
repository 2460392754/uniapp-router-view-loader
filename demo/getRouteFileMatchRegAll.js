import { getRouteFileMatchRegAll } from '../src/utils'

const regList = getRouteFileMatchRegAll({
    publicPath: './test'
})

console.log(regList)