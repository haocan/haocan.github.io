
/*		前端知识汇总&案例展示
	*   {
	*       caseName: @value String            		*         案例总标题
	*       caseList: @value Array         			*         案例说明信息
	*       	caseTitle: @value String            *         案例标题  
	*      		publishTime: @value String 			*         案例上传时间  格式为：2016.10.09 08:00
	*       	caseThumbnail: @value String        *         缩略图地址
	*       	caseDescription: @value String      *         案例描述 
				caseWebsite: @value String       	*         案例网址
	*       
	*   }
*/




var casees = [
		{
			caseName:"JS的属性操作",
			caseList:[
				{
					caseTitle:"JS热身运动练习",
					publishTime:"2016-6-7 22:08",
					caseThumbnail:"images/case/1/1-JS热身课程-课后练习.gif",
					caseDescription:"属性操作、图片切换、短信属性操作<br>图片切换、短信",
					caseWebsite:"haocan.github.io/warm/style"
				},
				{
					caseTitle:"模拟手机短信发送",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/1/2-模拟手机短信发送.gif",
					caseDescription:"描述：这是我完成的一个小案例，综合涉及到的知识点是判断、字符串拼接，以及布局方面的小技巧，比如提交留言后，A用户在左，B用户在右"
					,caseWebsite:"haocan.github.io/warm/phone"
				}
			]
		},
		{
			caseName:"自定义属性操作、if、this",
			caseList:[
				{
					caseTitle:"生成100个div",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/1/100div.gif",
					caseDescription:"描述：用for循环自动生成100个div，不同的颜色，取模的熟练使用"
					,caseWebsite:"haocan.github.io/for/100div"
				},
				{
					caseTitle:"自动改变v字方向",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/1/4v.gif",
					caseDescription:"描述：生成4个方向的v自省，确定好top值和left值"
					,caseWebsite:"haocan.github.io/for/4v"
				},
				{
					caseTitle:"图片擦擦擦",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/1/ca.gif",
					caseDescription:"把每个图片分成若干个，给每个图片定位，图片move时显示"
					,caseWebsite:"haocan.github.io/for/caca"
				},
				{
					caseTitle:"多图切换",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/1/change.gif",
					caseDescription:"上一组和下一组是控制两组照片的，可以用传参去写"
					,caseWebsite:"haocan.github.io/for/change"
				},{
					caseTitle:"QQ列表",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/1/qq.gif",
					caseDescription:"点击展开，再次点击关闭，如果当前点击的和上一次点击的不是同一个，上一次点击的自动关闭，做判断"
					,caseWebsite:"haocan.github.io/for/qqlist"
				},
				{
					caseTitle:"评分",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/1/pingfen.gif",
					caseDescription:"判断当前移入的是第几个，记入索引值做判断"
					,caseWebsite:"haocan.github.io/for/grade"
				},{
					caseTitle:"全选",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/1/check.gif",
					caseDescription:"隔行变色，都选中时全选按钮自动勾选，全选按钮勾选所有都会被选中，判断当前没被选中的"
					,caseWebsite:"haocan.github.io/for/checked"
				}
			]
		},{
			caseName:"数据类型、函数传参、作用域、运算",
			caseList:[
				{
					caseTitle:"修改文本框的值",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/1/编辑.gif",
					caseDescription:"用传参，如果值改变保存后就是改变的值，取消值还会恢复之前的"
					,caseWebsite:"haocan.github.io/type/amend"

				},
				{
					caseTitle:"传参div",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/1/传参.gif",
					caseDescription:"用传参，数据可以随便增减，任意的颜色"
					,caseWebsite:"haocan.github.io/type/div"

				},
				{
					caseTitle:"商品计价",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/1/商品计价.gif",
					caseDescription:"商品计价需注意数据的获取和更改，不能让用户随意更改"
					,caseWebsite:"haocan.github.io/type/price"

				},
				{
					caseTitle:"选择卡嵌套",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/1/选项卡.gif",
					caseDescription:"样式自动生成，多层选择卡的嵌套，先写好一个li的js然后传参"
					,caseWebsite:"haocan.github.io/type/Tab"

				},
				{
					caseTitle:"找出合适的值",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"数据类型的熟练应用，NaN的掌握"
					,caseWebsite:"haocan.github.io/type/result"

				},
				{
					caseTitle:"搜狐",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/1/搜狐.gif",
					caseDescription:"熟练应用传参"
					,caseWebsite:"haocan.github.io/type/souhu"

				},
				{
					caseTitle:"缩略图",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/1/缩略.gif",
					caseDescription:"常见效果图，移入时对应图片的缩略图也会显示"
					,caseWebsite:"haocan.github.io/type/brevi"

				}
			]
		},
		{
			caseName:"定时器类型和日期对象、setInterval",
			caseList:[
				{
					caseTitle:"时钟翻转",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"定时器的应用，获取本机时间。日期对象"
					,caseWebsite:"haocan.github.io/timer/turn"
				},
				{
					caseTitle:"时钟滑动",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"定时器的应用，获取本机时间。日期对象"
					,caseWebsite:"haocan.github.io/timer/slide"
				},
				{
					caseTitle:"仿window日历",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认 为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可 以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为 浏览器可以被认为浏览器可以被认为"
					,caseWebsite:"haocan.github.io/timer/solar"
				},
				{
					caseTitle:"淘宝",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"循环播放，注意播放顺序"
					,caseWebsite:"haocan.github.io/timer/taobao"
				},
				{
					caseTitle:"随意掉落div",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"点击任意一个掉落"
					,caseWebsite:"haocan.github.io/timer/sydl"
				},
				{
					caseTitle:"随机排序",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"从大到小，打乱顺序"
					,caseWebsite:"haocan.github.io/timer/sort"
				},
				{
					caseTitle:"随机播放",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"递归，时间随机"
					,caseWebsite:"haocan.github.io/timer/random"
				},
				{
					caseTitle:"对象版div",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:""
					,caseWebsite:"haocan.github.io/timer/obj"
				},
				{
					caseTitle:"掉落div",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"注意防止多次点击"
					,caseWebsite:"haocan.github.io/timer/dropdiv"
				},
				{
					caseTitle:"带详情的轮播",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"运动函数的多次嵌套"
					,caseWebsite:"haocan.github.io/timer/detailspic"
				},
				{
					caseTitle:"延时的菜单",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"延时定时器的熟练掌握"
					,caseWebsite:"haocan.github.io/timer/delyed"
				}
			]
		},{
			caseName:"字符串和数组、JSON、for in",
			caseList:[
				{
					caseTitle:"文字查找替换",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"字符串方法的掌握"
					,caseWebsite:"haocan.github.io/string/search"

				},
				{
					caseTitle:"文字搬运工",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"字符串截取，string.splice,"
					,caseWebsite:"haocan.github.io/string/carry"

				}
			]
		},
		{
			caseName:"DOM节点、元素的操作、表格菜单",
			caseList:[
				{
					caseTitle:"这是首行",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"描述：nextElementsibing和prevElementsibling的判断应用"
					,caseWebsite:"haocan.github.io/DOM/first"
				},
				{
					caseTitle:"上下移动",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"描述：ele.insertBefore(),在指定节点前面加入一个新的节点的应用"
					,caseWebsite:"haocan.github.io/DOM/move"
				},
				{
					caseTitle:"多级菜单",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"描述：判断li的children有没有ul，有子菜单显示，一次只展开一层的ul"
					,caseWebsite:"haocan.github.io/DOM/menu"
				},
				{
					caseTitle:"创建文件夹",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"document.createElement,只能是document的创建"
					,caseWebsite:"haocan.github.io/DOM/create"
				},
				{
					caseTitle:"框选",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认 为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可 以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为浏览器可以被认为 浏览器可以被认为浏览器可以被认为"
					,caseWebsite:"haocan.github.io/DOM/choose"
				}
			]
		},{
			caseName:"BOM-BOM基础、常用方法",
			caseList:[
				{
					caseTitle:"文档详情",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"百度百科类似的练习，移入对应的词有详情的内容提示，主要计算最大的宽和高，超出后做判断"
					,caseWebsite:"haocan.github.io/BOM/hint"

				},
				{
					caseTitle:"窗口操作",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"窗口操作的选项卡"
					,caseWebsite:"haocan.github.io/BOM/tabwindow"

				},
				{
					caseTitle:"表格操作",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/icon/exp.png",
					caseDescription:"描述：对表格数据的操作，上下移动删除，添加，批量删除和返选，还有一些sort的使用"
					,caseWebsite:"haocan.github.io/BOM/form"

				}
			]
		},
		{
			caseName:"Event对象，事件流、事件默认行为",
			caseList:[
				{
					caseTitle:"放大镜",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/1/10-时钟滑动.gif",
					caseDescription:"模拟京东放大镜的效果"
					,caseWebsite:"haocan.github.io/event/glass"
				},
				{
					caseTitle:"搜索",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/1/26-时钟翻转.gif",
					caseDescription:""
					,caseWebsite:"haocan.github.io/event/search"
				},
				{
					caseTitle:"右键",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/1/rili.gif",
					caseDescription:"右键点击菜单，阻止默认行为"
					,caseWebsite:"haocan.github.io/event/onmousemenu"
				}
			]
		},{
			caseName:"简易拖拽、碰撞检测、自定义滚动条",
			caseList:[
				{
					caseTitle:"拖拽",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/1/消除表情小游戏.png",
					caseDescription:"event事件对象，onmousedown,onmousemove,onmouseup事件执行时的ev位置"
					,caseWebsite:"haocan.github.io/drag/drag"

				},
				{
					caseTitle:"滚动条",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/1/5-排序实例.gif",
					caseDescription:"自定义滚动条，求内容的高度和滚轮高度的比例"
					,caseWebsite:"haocan.github.io/drag/scroll"

				},
				{
					caseTitle:"根据鼠标方向控制图片走向",
					publishTime:"2011-11-16 22:08",
					caseThumbnail:"images/case/1/5-排序实例.gif",
					caseDescription:"鼠标和键盘控制图片切换方向"
					,caseWebsite:"haocan.github.io/drag/mouseevent"

				}
			]
		}
]