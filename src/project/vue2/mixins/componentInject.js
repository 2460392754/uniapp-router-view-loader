import { provideKey } from '../../../config'

export default {
    inject: [provideKey],

    /**
     * 抹平 $refs 各平台差异
     */
    mounted() {
        const refs = this[provideKey].$refs

        Object.keys(refs).forEach(k => {
            refs[k].$v = refs[k].$vm === undefined ? refs[k] : refs[k].$vm;
        })
    },
}
