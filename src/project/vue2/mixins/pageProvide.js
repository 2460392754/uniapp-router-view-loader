import { provideKey } from '../../../config'

// const s = Symbol()
const s = Date.now()

export default {
    provide() {
        return {
            [provideKey]: this[s]
        };
    },

    data() {
        return {
            [s]: {
                $refs: this.$refs,
            }
        };
    },
}
