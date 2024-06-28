let baseURL;

fetch('./url.json')
	.then((response) => response.json())
	.then((json) => { baseURL = json.baseURL })
	.then(()=> initialise());

function initialise() {

	// load css files
	const head = document.getElementsByTagName('HEAD')[0];
	const css1 = document.createElement('link');
	css1.rel = 'stylesheet';
	css1.type = 'text/css';
	css1.href = baseURL + 'global.css';
	head.appendChild(css1);

	const css2 = document.createElement('link');
	css2.rel = 'stylesheet';
	css2.type = 'text/css';
	css2.href = baseURL + 'stock/dashicons.min.css';
	head.appendChild(css2);

	const css3 = document.createElement('link');
	css3.rel = 'stylesheet';
	css3.type = 'text/css';
	css3.href = baseURL + 'stock/font-awesome.min.css';
	head.appendChild(css3);

	const header = document.getElementById('header');
	const footer = document.getElementById('footer');

	footer.innerHTML = `

<div id="row-1"><!-- 并入js时有待删除 -->
<section class="row-1-1-bg"><!-- 背景图 -->
	<div class="row-1-1-gradient"><!-- 渐变层 -->
		<div class="row-1-1-br">
			<div class="row-1-1-service-content"><!-- 审计业务；大抵是提供外围格式、空隙值 -->
				<div class="row-1-1-service-title">
					<i class="fa fa-check-square-o"></i>
					<p>审计业务</p>
				</div>
				<div class="row-1-1-service-desc">
					<ul>
						<li> <i class="fa fa-commenting"></i> 袁 伟</li>
						<li> <i class="fa fa-phone-square"></i> 13516748206</li>
						<li> <i class="fa fa-envelope-square"></i> yw@junliancpa.com
						</li>
					</ul>
				</div>
			</div>
			<div class="row-1-1-service-content"><!-- 税务业务 -->
				<div class="row-1-1-service-title">
					<i class="fa fa-check-square-o"></i>
					<p>
						税务业务
					</p>
				</div>
				<div class="row-1-1-service-desc">
					<ul>
						<li> <i class="fa fa-commenting"></i> 周 萍
						</li>
						<li> <i class="fa fa-phone-square"></i> 15088484220
						</li>
						<li> <i class="fa fa-envelope-square"></i>
							zp@junliancpa.com
						</li>
					</ul>
				</div>
			</div>
		</div><!---->
		<div class="row-1-1-br">
			<div class="row-1-1-service-content">
				<div class="row-1-1-service-title">
					<i class="fa fa-check-square-o"></i>
					<p>
						商务服务
					</p>
				</div>
				<div class="row-1-1-service-desc">
					<ul>
						<li> <i class="fa fa-commenting"></i> 王秀杰
						</li>
						<li> <i class="fa fa-phone-square"></i> 15857450212
						</li>
						<li> <i class="fa fa-envelope-square"></i>
							wxj@junliancpa.com
						</li>
					</ul>
				</div>
			</div>
			<div class="row-1-1-service-content">
				<div class="row-1-1-service-title">
					<i class="fa fa-check-square-o"></i>
					<p>商务合作</p>
				</div>
				<div class="row-1-1-service-desc">
					<ul>
						<li> <i class="fa fa-commenting"></i> 诸成刚
						</li>
						<li> <i class="fa fa-phone-square"></i> 13989308985
						</li>
						<li> <i class="fa fa-envelope-square"></i>
							zcg@junliancpa.com
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="row-1-2-qrcode"> <!-- 二维码部分 -->
	<div class="row-1-2-1-social-icons">
		<div class="social-icon">
			<a href="https://www.linkedin.com/in/成刚-诸-860b97161/" target="_blank">
				<i class="fa fa-linkedin"></i>
			</a>
		</div>
		<div class="social-icon">
			<a href="http://toutiao.manqian.cn/account_gh_5460e354cf06.html" target="_blank">
				<i class="fa fa-weixin"></i>
			</a>
		</div>
		<div class="social-icon">
			<a href="https://www.weibo.com/u/3477425814?source=blog" target="_blank">
				<i class="fa fa-weibo"></i>
			</a>
		</div>
	</div>

	<div class="row-1-2-1-info">
		<div class='img-qr-code'></div>
		<h3>宁波千寻产业园</h3>
		<p>扫码关注公众号<br><br>
			获取最新最专业的财税资讯</p>
	</div>
</section>
</div>
<div class="row-2"> <!-- copyright -->
<div class="row-2-1">
	宁波君联会计师事务所 © 2024
</div>
<div class="row-2-2">技术支持 sinc.vip
</div>
</div>
`;


	header.innerHTML =

		`
<div class="header-wrap">
<div class="site-branding">
	<a href="`+ baseURL + `" rel="home">
		<div class="custom-logo"></div>
	</a>
</div>
<div class="menu-wrap">
	<div id="mobile-toggle-block" class='mobile-toggle-close'></div><!-- 手机端按钮 -->
	<ul class="primary-menu">
		<li class='primary-menu-item'>
			<a class="mega-menu-link" href="`+ baseURL + `">主页</a>
		</li>
		<li class='primary-menu-item'>
			<a class="mega-menu-link sub-indicator">服务领域</a>
			<ul class="secondary-menu menu-service">
				<li class='secondary-menu-item'><a class="mega-menu-link"
						href="`+ baseURL + `%e5%ae%a1%e8%ae%a1.html">审计</a>
					<ul class="tertiary-menu">
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e5%ae%a1%e8%ae%a1.html?1">年度财务报表审计</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e5%ae%a1%e8%ae%a1.html?2">专项审计</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e5%ae%a1%e8%ae%a1.html?3">企业内部控制审计</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e5%ae%a1%e8%ae%a1.html?4">财务尽职调查</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e5%ae%a1%e8%ae%a1.html?5">验资</a>
						</li>
					</ul>
				</li>

				<li class='secondary-menu-item'><a class="mega-menu-link"
						href="`+ baseURL + `%e7%a8%8e%e5%8a%a1%e5%ae%a1%e6%a0%b8.html">税务审核</a>
					<ul class="tertiary-menu">
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e7%a8%8e%e5%8a%a1%e5%ae%a1%e6%a0%b8.html?1">企业所得税年终汇算清缴审核</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e7%a8%8e%e5%8a%a1%e5%ae%a1%e6%a0%b8.html?2">个人所得税纳税申报审核</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e7%a8%8e%e5%8a%a1%e5%ae%a1%e6%a0%b8.html?3">纳税情况审核</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e7%a8%8e%e5%8a%a1%e5%ae%a1%e6%a0%b8.html?4">土地增值税清算审核</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e7%a8%8e%e5%8a%a1%e5%ae%a1%e6%a0%b8.html?5">研发费用加计扣除审核</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e7%a8%8e%e5%8a%a1%e5%ae%a1%e6%a0%b8.html?6">资产损失专项审核</a>
						</li>
					</ul>
				</li>

				<li class='secondary-menu-item'><a class="mega-menu-link"
						href="`+ baseURL + `%e7%a8%8e%e5%8a%a1%e6%9c%8d%e5%8a%a1.html">税务服务</a>
					<ul class="tertiary-menu">
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e7%a8%8e%e5%8a%a1%e6%9c%8d%e5%8a%a1.html?1">财政补贴</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e7%a8%8e%e5%8a%a1%e6%9c%8d%e5%8a%a1.html?2">税收优惠</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e7%a8%8e%e5%8a%a1%e6%9c%8d%e5%8a%a1.html?3">外籍个人所得税解决方案</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e7%a8%8e%e5%8a%a1%e6%9c%8d%e5%8a%a1.html?4">高净值人群个税解决方案</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e7%a8%8e%e5%8a%a1%e6%9c%8d%e5%8a%a1.html?5">高新技术认定</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e7%a8%8e%e5%8a%a1%e6%9c%8d%e5%8a%a1.html?6">同期资料准备/转让定价</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e7%a8%8e%e5%8a%a1%e6%9c%8d%e5%8a%a1.html?7">特殊重组服务</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e7%a8%8e%e5%8a%a1%e6%9c%8d%e5%8a%a1.html?8">非贸易项下对外支付</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e7%a8%8e%e5%8a%a1%e6%9c%8d%e5%8a%a1.html?9">境外股权转让</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e7%a8%8e%e5%8a%a1%e6%9c%8d%e5%8a%a1.html?10">增值税税务服务</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e7%a8%8e%e5%8a%a1%e6%9c%8d%e5%8a%a1.html?11">增值税共享系统代理开票</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e7%a8%8e%e5%8a%a1%e6%9c%8d%e5%8a%a1.html?12">其他税务服务</a>
						</li>
					</ul>
				</li>

				<li class='secondary-menu-item'><a class="mega-menu-link"
						href="`+ baseURL + `%e5%95%86%e5%8a%a1%e6%9c%8d%e5%8a%a1.html">商务服务</a>
					<ul class="tertiary-menu">
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e5%95%86%e5%8a%a1%e6%9c%8d%e5%8a%a1.html?1">企业设立</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e5%95%86%e5%8a%a1%e6%9c%8d%e5%8a%a1.html?2">企业变更</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e5%95%86%e5%8a%a1%e6%9c%8d%e5%8a%a1.html?3">企业注销</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e5%95%86%e5%8a%a1%e6%9c%8d%e5%8a%a1.html?4">商务秘书</a>
						</li>
					</ul>
				</li>

				<li class='secondary-menu-item'><a class="mega-menu-link"
						href="`+ baseURL + `%e8%b4%a2%e5%8a%a1%e6%9c%8d%e5%8a%a1.html">财务服务</a>
					<ul class="tertiary-menu">
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e8%b4%a2%e5%8a%a1%e6%9c%8d%e5%8a%a1.html?1">会计外包</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e8%b4%a2%e5%8a%a1%e6%9c%8d%e5%8a%a1.html?2">纳税申报</a>
						</li>
					</ul>
				</li>

				<li class='secondary-menu-item'><a class="mega-menu-link"
						href="`+ baseURL + `%e5%92%a8%e8%af%a2%e6%9c%8d%e5%8a%a1.html">咨询服务</a>
					<ul class="tertiary-menu">
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e5%92%a8%e8%af%a2%e6%9c%8d%e5%8a%a1.html?1">税务咨询</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e5%92%a8%e8%af%a2%e6%9c%8d%e5%8a%a1.html?2">财务咨询</a>
						</li>
						<li class='tertiary-menu-item'><a class="mega-menu-link"
								href="`+ baseURL + `%e5%92%a8%e8%af%a2%e6%9c%8d%e5%8a%a1.html?3">财税培训</a>
						</li>
					</ul>
				</li>
			</ul>
		</li>


		<!-- 回归第一层 -->
		<li class='primary-menu-item'>
			<a class="mega-menu-link" href="`+ baseURL + `%e5%85%ac%e5%bc%80%e8%af%be.html">公开课</a>
		</li>

		<li class='primary-menu-item'>
			<a class="mega-menu-link sub-indicator">财务资讯</a>
			<ul class="secondary-menu">
				<li class='secondary-menu-item'><a class="mega-menu-link"
						href="`+ baseURL + `%e7%a8%8e%e6%94%b6%e6%96%b0%e6%94%bf.html">税收新政</a>
				</li>
				<li class='secondary-menu-item'><a class="mega-menu-link"
						href="`+ baseURL + `%e7%83%ad%e7%82%b9%e8%b5%84%e8%ae%af.html">热点资讯</a>
				</li><!--
				<li class='secondary-menu-item'><a class="mega-menu-link"
						href="`+ baseURL + `%e4%bc%81%e4%b8%9a%e6%96%b0%e9%97%bb.html">企业新闻</a>
				</li>-->
			</ul>
		</li>

		<li class='primary-menu-item'><a class="mega-menu-link"
				href="`+ baseURL + `%e5%b9%b3%e5%8f%b0%e5%90%88%e4%bd%9c.html">平台合作</a>
		</li>

		<li class='primary-menu-item'><a class="mega-menu-link sub-indicator">关于我们</a>
			<ul class="secondary-menu">
				<li class='secondary-menu-item'><a class="mega-menu-link"
						href="`+ baseURL + `%e5%85%b3%e4%ba%8e%e6%88%91%e4%bb%ac.html">关于我们</a></li>
				<li class='secondary-menu-item'><a class="mega-menu-link"
						href="`+ baseURL + `%e5%8a%a0%e5%85%a5%e5%90%9b%e8%81%94.html">加入君联</a>
				</li>
			</ul>
		</li>

	</ul>
</div>
</div>
`;



	let isMobile, deviceType;

	const mobileToggle = document.getElementById('mobile-toggle-block');
	const primaryMenu = document.getElementsByClassName('primary-menu')[0];

	let menuOpen = false;

	const subMenu1 = document.getElementsByClassName('primary-menu-item')[1];
	const subMenu2 = document.getElementsByClassName('primary-menu-item')[3];
	const subMenu3 = document.getElementsByClassName('primary-menu-item')[5];

	const subMenuArea1 = document.getElementsByClassName('secondary-menu')[0];
	const subMenuArea2 = document.getElementsByClassName('secondary-menu')[1];
	const subMenuArea3 = document.getElementsByClassName('secondary-menu')[2];

	let sub1Open = false, sub2Open = false, sub3Open = false;

	function menuToggle() {

		if (menuOpen === false) {
			mobileToggle.className = "mobile-toggle-open";
			primaryMenu.style.display = 'block';
			menuOpen = true;
		}
		else {
			mobileToggle.className = "mobile-toggle-close";
			primaryMenu.style.display = 'none';
			menuOpen = false;
		}

	}

	function subToggle1() {

		if (sub1Open === false) {
			subMenuArea1.style.display = 'block';
			sub1Open = true;
		}
		else {
			subMenuArea1.style.display = 'none';
			sub1Open = false;
		}
	}

	function subToggle2() {
		if (sub2Open === false) {
			subMenuArea2.style.display = 'block';
			sub2Open = true;
		}
		else {
			subMenuArea2.style.display = 'none';
			sub2Open = false;
		}
	}

	function subToggle3() {
		if (sub3Open === false) {
			subMenuArea3.style.display = 'block';
			sub3Open = true;
		}
		else {
			subMenuArea3.style.display = 'none';
			sub3Open = false;
		}
	}

	function checkWindowSize() {

		if (window.innerWidth < 801) {
			isMobile = true;
		} else {
			isMobile = false;
		}

		if (!deviceType === isMobile) {
			resizeMenu();
			deviceType = isMobile;
		}
	}

	function resizeMenu() {

		if (isMobile === true) {

			reverseToMobile();

			mobileToggle.addEventListener("click", menuToggle, false);

			subMenu1.addEventListener("click", subToggle1, false);
			subMenu2.addEventListener("click", subToggle2, false);
			subMenu3.addEventListener("click", subToggle3, false);

		} else {

			reverseToDesktop()

			mobileToggle.removeEventListener("click", menuToggle, false);

			subMenu1.removeEventListener("click", subToggle1, false);
			subMenu2.removeEventListener("click", subToggle2, false);
			subMenu3.removeEventListener("click", subToggle3, false);
		}

	}

	function reverseToDesktop() {
		menuOpen = false;
		sub1Open = true;
		sub2Open = true;
		sub3Open = true;

		menuToggle();
		subToggle1();
		subToggle2();
		subToggle3();
	}

	function reverseToMobile() {
		menuOpen = true;

		menuToggle();

	}

	checkWindowSize();

	// tmp
	window.addEventListener('resize', checkWindowSize, false);

}