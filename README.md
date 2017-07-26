## react-lazy-load-img-component  图片懒加载

### 安装依赖  yarn add
### 运行demo npm run dev
### 用法

```javascript
	
	import LazyLoadingImage from 'relative path';

	<LazyLoadingImage 
		options={{
			lazyLoadingImageClassName: 'lazy-img-com-1',  // 用于区别同一页面不同懒加载组件容器
			"defaultImgSrc": "http://img1.imgtn.bdimg.com/it/u=2577331868,2902592379&fm=26&gp=0.jpg",  // 默认图片
			"loadingImgSrc": "https://toddmotto.com/labs/echo/img/ajax.gif",  // 加载图片

			offsetTop:100,  // 图片组件距离顶部
			offsetBottom: 50,  //图片距离底部
			throttle: 250,  // 窗口滚动触发后250ms，执行图片懒加载
		}}
	>

		<img 
			src=" " 
			data-lazyimg='https://toddmotto.com/labs/echo/img/album-2.jpg'
		/>

	</LazyLoadingImage>
  
```

