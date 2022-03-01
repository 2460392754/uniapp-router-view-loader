import Demo from '../components/demo.vue'
import HackH5 from './hack.h5';
import HackWx from './hack.wx'

const CLASS_NAME = 'WxStyles'
const originRender = Demo.render;

Demo.render = function (h) {
    const opts = { h, originRender, CLASS_NAME };

    // #ifdef H5
    return HackH5.call(this, opts)
    // #endif

    // #ifdef MP-WEIXIN
    return HackWx.call(this, opts)
    // #endif
}

