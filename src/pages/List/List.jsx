import React, { Component } from 'react';
require('./List.less');


import LazyLoadingImage from '../../components/LazyLoadingImage/LazyLoadingImage.jsx';



export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        return (
            <div className="list-box">
				<h1>list页面</h1>
				<div>
					<LazyLoadingImage 
						options={{
							lazyLoadingImageClassName: 'lazy-img-com-1',  // 用于区别同一页面不同懒加载组件容器
							defaultImgSrc: "http://www.3d2000.com/wp-content/uploads/2016/05/294194-5401da2449c8901d.gif",  // loadingimg
							// offsetTop:100,  // 图片组件距离顶部
							// offsetBottom: 50,  //图片距离底部
							// throttle: 250,  // 窗口滚动触发后250ms，执行图片懒加载
						}}
					>
						<li>
							<p>
								Praesent vestibulum mi est, non mattis leo suscipit non. Cras elit lectus, faucibus sit amet tincidunt vitae, dapibus dignissim eros. Donec libero eros, sollicitudin eget faucibus sed, adipiscing feugiat erat. Fusce mollis ligula ac rhoncus facilisis. Cras commodo, lectus eget pulvinar consectetur, justo eros convallis metus, vehicula porta lectus mauris vel quam. Aliquam vitae odio metus. Donec aliquet ornare eleifend. Nunc eget lacinia nisl. In et facilisis purus. Donec ut nibh at sem convallis ornare sed a purus. Duis non justo at massa iaculis auctor suscipit vitae elit. Nunc a tincidunt orci, eu convallis mauris. Ut dignissim purus mauris, ac ornare enim egestas aliquet. Etiam laoreet, sem nec elementum hendrerit, urna justo scelerisque sapien, ac porttitor neque quam vel lacus.
							</p>
							<img 
								src="" 
								data-lazyimg='https://img.alicdn.com/imgextra/i3/3016667721/TB2yVTzXLBNTKJjSszcXXbO2VXa_!!3016667721.jpg'
								className="list-box-lazy-img"
							/>
						</li>
						<li>
							<p>
								<img 
								src=" " 
								data-lazyimg='https://img.alicdn.com/imgextra/i2/2129855716/O1CN015jzkxv1s5yS4U5Rkz_!!2129855716.jpg'
								/>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate sed mauris sit amet varius. Maecenas sit amet blandit lacus. Fusce sapien erat, auctor cursus ornare pulvinar, interdum aliquet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut erat sagittis, faucibus erat a, porttitor lorem. Suspendisse vestibulum dolor at hendrerit venenatis. Quisque ut sem nec nisl dictum dictum. Maecenas purus erat, accumsan eu tincidunt eu, sodales eget urna.
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate sed mauris sit amet varius. Maecenas sit amet blandit lacus. Fusce sapien erat, auctor cursus ornare pulvinar, interdum aliquet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut erat sagittis, faucibus erat a, porttitor lorem. Suspendisse vestibulum dolor at hendrerit venenatis. Quisque ut sem nec nisl dictum dictum. Maecenas purus erat, accumsan eu tincidunt eu, sodales eget urna.
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate sed mauris sit amet varius. Maecenas sit amet blandit lacus. Fusce sapien erat, auctor cursus ornare pulvinar, interdum aliquet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut erat sagittis, faucibus erat a, porttitor lorem. Suspendisse vestibulum dolor at hendrerit venenatis. Quisque ut sem nec nisl dictum dictum. Maecenas purus erat, accumsan eu tincidunt eu, sodales eget urna.
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate sed mauris sit amet varius. Maecenas sit amet blandit lacus. Fusce sapien erat, auctor cursus ornare pulvinar, interdum aliquet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut erat sagittis, faucibus erat a, porttitor lorem. Suspendisse vestibulum dolor at hendrerit venenatis. Quisque ut sem nec nisl dictum dictum. Maecenas purus erat, accumsan eu tincidunt eu, sodales eget urna.
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate sed mauris sit amet varius. Maecenas sit amet blandit lacus. Fusce sapien erat, auctor cursus ornare pulvinar, interdum aliquet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut erat sagittis, faucibus erat a, porttitor lorem. Suspendisse vestibulum dolor at hendrerit venenatis. Quisque ut sem nec nisl dictum dictum. Maecenas purus erat, accumsan eu tincidunt eu, sodales eget urna.
								</span>
							</p>
						</li>
						<li>
							<p>
								<img 
								src="" 
								data-lazyimg='https://img.alicdn.com/bao/uploaded/i1/TB1xjN1elCw3KVjSZR0SuvcUpXa.jpg_190x190Q75s0.jpg'
								className="list-box-lazy-img"
								/>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate sed mauris sit amet varius. Maecenas sit amet blandit lacus. Fusce sapien erat, auctor cursus ornare pulvinar, interdum aliquet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut erat sagittis, faucibus erat a, porttitor lorem. Suspendisse vestibulum dolor at hendrerit venenatis. Quisque ut sem nec nisl dictum dictum. Maecenas purus erat, accumsan eu tincidunt eu, sodales eget urna.
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate sed mauris sit amet varius. Maecenas sit amet blandit lacus. Fusce sapien erat, auctor cursus ornare pulvinar, interdum aliquet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut erat sagittis, faucibus erat a, porttitor lorem. Suspendisse vestibulum dolor at hendrerit venenatis. Quisque ut sem nec nisl dictum dictum. Maecenas purus erat, accumsan eu tincidunt eu, sodales eget urna.
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate sed mauris sit amet varius. Maecenas sit amet blandit lacus. Fusce sapien erat, auctor cursus ornare pulvinar, interdum aliquet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut erat sagittis, faucibus erat a, porttitor lorem. Suspendisse vestibulum dolor at hendrerit venenatis. Quisque ut sem nec nisl dictum dictum. Maecenas purus erat, accumsan eu tincidunt eu, sodales eget urna.
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate sed mauris sit amet varius. Maecenas sit amet blandit lacus. Fusce sapien erat, auctor cursus ornare pulvinar, interdum aliquet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut erat sagittis, faucibus erat a, porttitor lorem. Suspendisse vestibulum dolor at hendrerit venenatis. Quisque ut sem nec nisl dictum dictum. Maecenas purus erat, accumsan eu tincidunt eu, sodales eget urna.
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate sed mauris sit amet varius. Maecenas sit amet blandit lacus. Fusce sapien erat, auctor cursus ornare pulvinar, interdum aliquet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut erat sagittis, faucibus erat a, porttitor lorem. Suspendisse vestibulum dolor at hendrerit venenatis. Quisque ut sem nec nisl dictum dictum. Maecenas purus erat, accumsan eu tincidunt eu, sodales eget urna.
								</span>
							</p>
						</li>
						<li>
							<p>
								<img 
								src="" 
								data-lazyimg='https://img.alicdn.com/bao/uploaded/i1/TB1kdvmelaE3KVjSZLeSutsSFXa.jpg_190x190Q75s0.jpg'
								className="list-box-lazy-img"
								/>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate sed mauris sit amet varius. Maecenas sit amet blandit lacus. Fusce sapien erat, auctor cursus ornare pulvinar, interdum aliquet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut erat sagittis, faucibus erat a, porttitor lorem. Suspendisse vestibulum dolor at hendrerit venenatis. Quisque ut sem nec nisl dictum dictum. Maecenas purus erat, accumsan eu tincidunt eu, sodales eget urna.
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate sed mauris sit amet varius. Maecenas sit amet blandit lacus. Fusce sapien erat, auctor cursus ornare pulvinar, interdum aliquet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut erat sagittis, faucibus erat a, porttitor lorem. Suspendisse vestibulum dolor at hendrerit venenatis. Quisque ut sem nec nisl dictum dictum. Maecenas purus erat, accumsan eu tincidunt eu, sodales eget urna.
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate sed mauris sit amet varius. Maecenas sit amet blandit lacus. Fusce sapien erat, auctor cursus ornare pulvinar, interdum aliquet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut erat sagittis, faucibus erat a, porttitor lorem. Suspendisse vestibulum dolor at hendrerit venenatis. Quisque ut sem nec nisl dictum dictum. Maecenas purus erat, accumsan eu tincidunt eu, sodales eget urna.
								</span>
							</p>
						</li>
						<li>
							<p>
								<img 
								src="" 
								data-lazyimg='https://img.alicdn.com/imgextra/i4/3016667721/TB2i36weBUSMeJjy1zkXXaWmpXa_!!3016667721.jpg'
								className="list-box-lazy-img"
								/>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate sed mauris sit amet varius. Maecenas sit amet blandit lacus. Fusce sapien erat, auctor cursus ornare pulvinar, interdum aliquet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut erat sagittis, faucibus erat a, porttitor lorem. Suspendisse vestibulum dolor at hendrerit venenatis. Quisque ut sem nec nisl dictum dictum. Maecenas purus erat, accumsan eu tincidunt eu, sodales eget urna.
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate sed mauris sit amet varius. Maecenas sit amet blandit lacus. Fusce sapien erat, auctor cursus ornare pulvinar, interdum aliquet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut erat sagittis, faucibus erat a, porttitor lorem. Suspendisse vestibulum dolor at hendrerit venenatis. Quisque ut sem nec nisl dictum dictum. Maecenas purus erat, accumsan eu tincidunt eu, sodales eget urna.
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate sed mauris sit amet varius. Maecenas sit amet blandit lacus. Fusce sapien erat, auctor cursus ornare pulvinar, interdum aliquet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut erat sagittis, faucibus erat a, porttitor lorem. Suspendisse vestibulum dolor at hendrerit venenatis. Quisque ut sem nec nisl dictum dictum. Maecenas purus erat, accumsan eu tincidunt eu, sodales eget urna.
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate sed mauris sit amet varius. Maecenas sit amet blandit lacus. Fusce sapien erat, auctor cursus ornare pulvinar, interdum aliquet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut erat sagittis, faucibus erat a, porttitor lorem. Suspendisse vestibulum dolor at hendrerit venenatis. Quisque ut sem nec nisl dictum dictum. Maecenas purus erat, accumsan eu tincidunt eu, sodales eget urna.
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate sed mauris sit amet varius. Maecenas sit amet blandit lacus. Fusce sapien erat, auctor cursus ornare pulvinar, interdum aliquet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut erat sagittis, faucibus erat a, porttitor lorem. Suspendisse vestibulum dolor at hendrerit venenatis. Quisque ut sem nec nisl dictum dictum. Maecenas purus erat, accumsan eu tincidunt eu, sodales eget urna.
								</span>
							</p>
						</li>
						<li>
							<p>
								<img 
								src="" 
								data-lazyimg='https://img.alicdn.com/imgextra/i4/3016667721/TB2klYBXLNNTKJjSspcXXb4KVXa_!!3016667721.jpg'
								className="list-box-lazy-img"
								/>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate sed mauris sit amet varius. Maecenas sit amet blandit lacus. Fusce sapien erat, auctor cursus ornare pulvinar, interdum aliquet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut erat sagittis, faucibus erat a, porttitor lorem. Suspendisse vestibulum dolor at hendrerit venenatis. Quisque ut sem nec nisl dictum dictum. Maecenas purus erat, accumsan eu tincidunt eu, sodales eget urna.
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate sed mauris sit amet varius. Maecenas sit amet blandit lacus. Fusce sapien erat, auctor cursus ornare pulvinar, interdum aliquet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut erat sagittis, faucibus erat a, porttitor lorem. Suspendisse vestibulum dolor at hendrerit venenatis. Quisque ut sem nec nisl dictum dictum. Maecenas purus erat, accumsan eu tincidunt eu, sodales eget urna.
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate sed mauris sit amet varius. Maecenas sit amet blandit lacus. Fusce sapien erat, auctor cursus ornare pulvinar, interdum aliquet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut erat sagittis, faucibus erat a, porttitor lorem. Suspendisse vestibulum dolor at hendrerit venenatis. Quisque ut sem nec nisl dictum dictum. Maecenas purus erat, accumsan eu tincidunt eu, sodales eget urna.
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate sed mauris sit amet varius. Maecenas sit amet blandit lacus. Fusce sapien erat, auctor cursus ornare pulvinar, interdum aliquet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut erat sagittis, faucibus erat a, porttitor lorem. Suspendisse vestibulum dolor at hendrerit venenatis. Quisque ut sem nec nisl dictum dictum. Maecenas purus erat, accumsan eu tincidunt eu, sodales eget urna.
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate sed mauris sit amet varius. Maecenas sit amet blandit lacus. Fusce sapien erat, auctor cursus ornare pulvinar, interdum aliquet sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut erat sagittis, faucibus erat a, porttitor lorem. Suspendisse vestibulum dolor at hendrerit venenatis. Quisque ut sem nec nisl dictum dictum. Maecenas purus erat, accumsan eu tincidunt eu, sodales eget urna.
								</span>
							</p>
						</li>
					</LazyLoadingImage>
				</div>
			</div>
        )
    }
};