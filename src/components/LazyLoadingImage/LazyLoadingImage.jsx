import React,{Component} from 'react';

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
	componentDidMount(){
		let props = this.props;
		this.options = {
			lazyLoadingImageClassName: props.lazyLoadingImageClassName || 'lazy-load-img-warp',
			defaultImgSrc: props.defaultImgSrc || 'http://img1.imgtn.bdimg.com/it/u=2577331868,2902592379&fm=26&gp=0.jpg',
			loadingImgSrc: props.loadingImgSrc || 'https://toddmotto.com/labs/echo/img/ajax.gif',
			offsetTop: props.offsetTop || 100,
			throttle: props.throttle || 250,
			offsetBottom: props.offsetBottom || 50
		}

		this.init();


	}

	componentWillUnmount(){
		root = null;
		let that = this;
		if (document.removeEventListener) {
			document.removeEventListener('scroll', this.scrollFn);
		} else {
			document.detachEvent('onscroll', this.scrollFn);
		}
		if(this.timer){
			clearTimeout(this.timer);
		}
	}

	init(){
		// 添加滚动事件
		let that = this;
		root = this;
		
		this.nodes = document.querySelectorAll(`${'.'+this.options.lazyLoadingImageClassName} img[data-lazyimg]`);

		this.replaceBackgroundImgNode = document.querySelectorAll('.lazy-load-img-warp img[data-lazyimg]');

		this.replaceBackgroundDefaultImg();
		this.scrollFn();

		if (document.addEventListener) {
			document.addEventListener('scroll', this.scrollFn, false);
		} else {
			document.attachEvent('onscroll', this.scrollFn);
		}
	}

	replaceBackgroundDefaultImg(){
		this.nodes.forEach((itemNode)=>{
			itemNode.src = this.options.defaultImgSrc;
			itemNode.style.backgroundImage = "url("+this.options.defaultImgSrc+")";
		});
	}

	scrollFn(){

		let {offsetTop,throttle,offsetBottom,loadingImgSrc,defaultImgSrc} = root.options;

		if(root.timer){
			clearTimeout(root.timer)
		}
		
		root.timer = setTimeout(()=>{
			root.nodes.forEach((itenNode)=>{
				let nodeScroTop = itenNode.offsetTop+itenNode.offsetHeight/2;
				if(nodeScroTop - document.body.scrollTop>(0-offsetTop) && nodeScroTop - document.body.scrollTop<(document.body.offsetHeight+offsetBottom)){
					itenNode.src = loadingImgSrc;
					itenNode.setAttribute('data-loadimg',loadingImgSrc);

					itenNode.setAttribute('data-defaultimg',defaultImgSrc);
					itenNode.style.backgroundImage = 'none';

					let imgSrc = itenNode.getAttribute('data-lazyimg'); // 真实图片
					let imgobj = new Image();
					imgobj.src = imgSrc;
					imgobj.onload=()=>{
						itenNode.src = imgSrc;
					};
					
				}
			})
		},throttle);
	}


	findEditImg(children,imgSrcArr,that){
		console.log(imgSrcArr);
		React.Children.map(children,(child)=>{
			// console.log(child);
			if(child.type=='img' && child.props && child.props['data-lazyimg']){
				let imgIndex = that.state.imgIndex;
				console.log(child);
				console.log(imgSrcArr);
				child.props['data-lazyimg'] = imgSrcArr[imgIndex];
				imgIndex+=1;
				that.setState({imgIndex:imgIndex});
				console.log(child);

			}

			if(Object.prototype.toString.call(child.props.children)=='[object Array]'){
				this.findEditImg(child.props.children,imgSrcArr,that)
			}
		})
	}

	render() {
		let options = this.props.options;

		// this.findEditImg(this.props.children, options.imgSrcArr, this);

		// React.Children.map(this.props.children,(child)=>{
		// 	// console.log(child);
		// 	child.props.children.forEach((item)=>{
		// 		console.log(item)
		// 	})
		// })


		// console.log(this.props.children);
		return (
			<div className='lazy-load-img-warp' id={options.id ? options.id : ''}>
				{this.props.children}
			</div>
		)
	}
}














/*
<img 
					className={options.imgClassName?options.imgClassName:''}
					src={options.loadingSrc}
					data-imgSrc={options.imgSrc}
				/>


{React.Children.map(this.props.children, function (child) {
          			return <li>{child}</li>;
        		})}

*/













