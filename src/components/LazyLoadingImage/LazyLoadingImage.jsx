import React, { Component } from 'react';

require('./LazyLoadingImage.less');

// 用于获取组件this
let root = null;

export default class LazyLoadingImage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imgIndex: 0
        };

        this.timer = null;
    }

    parseInt(num) {
        return parseInt(num);
    }

    componentDidMount() {
        let options = this.props.options;
        this.options = {
            lazyLoadingImageClassName: options.lazyLoadingImageClassName || 'lazy-load-img-warp',
            defaultImgSrc: options.defaultImgSrc || 'http://img1.imgtn.bdimg.com/it/u=2577331868,2902592379&fm=26&gp=0.jpg',
            offsetTop: this.parseInt(options.offsetTop) || 100,
            throttle: this.parseInt(options.throttle) || 250,
            offsetBottom: this.parseInt(options.offsetBottom) || 50
        }

        this.init();
    }

    componentWillUnmount() {
        root = null;
        let that = this;
        if (document.removeEventListener) {
            document.removeEventListener('scroll', this.scrollFn);
        } else {
            document.detachEvent('onscroll', this.scrollFn);
        }
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }

    init() {
        root = this;

        this.replaceBackgroundDefaultImg();
        this.initScroll();
        this.scrollFn();
    }

    initScroll() {
        window.addEventListener('scroll', this.scrollFn, false)
    }

    replaceBackgroundDefaultImg() {
        this.nodes = document.querySelectorAll(`${'.'+this.options.lazyLoadingImageClassName} img[data-lazyimg]`);

        this.nodes.forEach((itemNode) => {
            itemNode.src = this.options.defaultImgSrc;
        });
    }

    scrollFn() {
        let { offsetTop, throttle, offsetBottom, defaultImgSrc } = root.options;
        if (root.timer) {
            clearTimeout(root.timer)
        }

        root.timer = setTimeout(() => {
            root.nodes.forEach((itenNode) => {
                let nodeScroTop = itenNode.offsetTop + itenNode.offsetHeight / 2;

                let bodyScrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

                if (nodeScroTop - bodyScrollTop > (0 - offsetTop) && nodeScroTop - bodyScrollTop < (document.body.offsetHeight + offsetBottom)) {

                    let imgSrc = itenNode.getAttribute('data-lazyimg'); // 真实图片
                    let imgobj = new Image();
                    imgobj.src = imgSrc;
                    imgobj.onload = () => {
                        itenNode.src = imgSrc;
                    };

                }
            })
        }, throttle);
    }

    render() {
        let options = this.props.options;
        return (
            <div className={options.lazyLoadingImageClassName || 'lazy-load-img-warp'}>
                {this.props.children}
            </div>
        )
    }
}