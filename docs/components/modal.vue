<template>
    <div v-if="visible" class="modal-wrapper">
        <div class="title">
            <span>公告</span>
            <svg
                class="close-icon"
                width="20"
                height="20"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                data-v-042ca774=""
                @click="visible = false"
            >
                <path
                    fill="currentColor"
                    d="M512 64a448 448 0 110 896 448 448 0 010-896zm0 393.664L407.936 353.6a38.4 38.4 0 10-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1054.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1054.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 10-54.336-54.336L512 457.664z"
                ></path>
            </svg>
        </div>
        <div class="content">
            <div class="item">
                全网首个专属于UniApp的编译工具插件，全面支持各平台、各环境、各语言、各类型文件、各编译工具。
            </div>
            <div class="item">QQ群: 424521214</div>
            <div
                class="item link"
                @click="onClickTo('https://github.com/2460392754/uniapp-router-view-loader/issues')"
            >
                GitHub Issues
            </div>
        </div>

        <div
            class="footer"
            @click="onClickTo('https://github.com/2460392754/uniapp-router-view-loader')"
        >
            <svg
                class="icon"
                width="30"
                height="30"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                data-v-042ca774=""
            >
                <path
                    fill="currentColor"
                    d="M283.84 867.84L512 747.776l228.16 119.936a6.4 6.4 0 009.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 00-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 00-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 00-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 009.28 6.72z"
                ></path>
            </svg>
            <span>给我一个Star !</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: true,
            title: '公告',
            content: [
                '全网首个专属于UniApp的编译工具插件，全面支持各平台、各环境、各语言、各类型文件、各编译工具。',
                'QQ群: 424521214'
            ]
        };
    },

    methods: {
        onClickTo(url) {
            window.open(url);
        }
    }
};
</script>

<style lang="scss">
.modal-wrapper {
    border: 2px solid var(--c-text-accent);
    width: 300px;
    position: fixed;
    top: 100px;
    right: 20px;
    border-radius: 12px;
    z-index: 10;
    overflow: hidden;
    font-family: var(--font-family-quicksand);
    background-color: #fff;
    color: var(--c-text);
    font-weight: 600;

    > .title {
        color: #fff;
        background-color: var(--c-text-accent);
        padding: 0.9rem;
        text-align: center;
        font-size: 0.9rem;
        position: relative;

        > .close-icon {
            position: absolute;
            right: 0.9rem;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
        }
    }

    > .content {
        padding: 1.5rem;
        font-size: 0.9rem;

        .item {
            margin-bottom: 0.9rem;

            &:last-of-type {
                margin-bottom: 0;
            }

            &.link {
                transition: all 0.3s;
                cursor: pointer;

                &:hover {
                    color: var(--c-text-accent);
                }
            }
        }
    }

    > .footer {
        background-color: var(--c-text-accent);
        padding: 0.9rem;
        text-align: center;
        color: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0.9rem;
        border-radius: 12px;
    }
}
</style>
