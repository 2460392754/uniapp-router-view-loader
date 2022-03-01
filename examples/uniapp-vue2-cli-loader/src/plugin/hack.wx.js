export default function ({ h, originRender, CLASS_NAME }) {
    let _h = this._self._c || h;

    function _render(tagName, render, props) {
        console.log(tagName, render, props)

        !render.class.includes(CLASS_NAME) && render.class.push(CLASS_NAME)
        return _h(tagName, render, props)
    }


    this._self._c = _render

    console.log('render')

    return originRender.call(this, h)
}