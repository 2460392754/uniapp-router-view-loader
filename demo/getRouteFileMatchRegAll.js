import { getRouteFileMatchRegAll } from '../src/utils'

const regList = getRouteFileMatchRegAll({
    publicPath: './tes1t'
})

console.log(regList)