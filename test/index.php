<?php
	include $_SERVER["DOCUMENT_ROOT"]."/inc/header.php";
?>
<div id="container">
	<section id="visual" class="ready" style="background-image: url(src/working.jpg);">
		<video autoplay loop class="js_cover">
			<source src="src/working.mp4" type="video/mp4">
		</video>
		<div class="inner">
			<div class="bx">
				<div class="frm">
					<span>Welcome to my page...!</span>
					<p>HELLO LOUIS</p>
					<b>PUBLISHER / FRONTEND DEVELOPER</b>
				</div>
			</div>
		</div>
	</section>
	<section id="Profile" style="background-color: #f99;">
		<div class="inner">
			<!-- Start : POP UP -->
			<div id="pop" class="clearfix"><!-- 버튼영역 -->
				<div class="pop" data-popid="naver">
				</div>
				<div class="pop" data-popid="nate">
				</div>
				<div class="pop" data-popid="daum">
				</div>
				<div class="pop" data-popid="coupang">
				</div>
				<div class="pop" data-popid="youtube">
				</div>
				<div class="pop" data-popid="facebook">
				</div>
			</div>
			<div id="popup"><!-- 팝업컨텐츠 영역 -->
				<div class="item" id="naver"><!-- 네이버 -->
					<div class="preview">
						<div class="preview_inner">
							<img src="/tmp/images/naver.jpg">
						</div>
					</div>
					<div class="info">
						<p class="tit">
							네이버
						</p>
						<p class="desc">
							예제를 위한 네이버 홈페이지의 캡쳐본 입니다.
						</p>
						<a href="https://www.naver.com">https://www.naver.com</a>
					</div>
					<i class="close"></i>
				</div>
				<div class="item" id="nate"><!-- 네이트 -->
					<div class="preview">
						<div class="preview_inner">
							<img src="/tmp/images/nate.jpg">
						</div>
					</div>
					<div class="info">
						<p class="tit">
							네이트
						</p>
						<p class="desc">
							예제를 위한 네이트 홈페이지의 캡쳐본 입니다.
						</p>
						<a href="https://www.nate.com">https://www.nate.com</a>
					</div>
					<i class="close"></i>
				</div>
				<div class="item" id="daum"><!-- 다음 -->
					<div class="preview">
						<div class="preview_inner">
							<img src="/tmp/images/daum.jpg">
						</div>
					</div>
					<div class="info">
						<p class="tit">
							다음
						</p>
						<p class="desc">
							예제를 위한 다음 홈페이지의 캡쳐본 입니다.
						</p>
						<a href="https://www.daum.net">https://www.daum.net</a>
					</div>
					<i class="close"></i>
				</div>
				<div class="item" id="coupang"><!-- 쿠팡 -->
					<div class="preview">
						<div class="preview_inner">
							<img src="/tmp/images/coupang.jpg">
						</div>
					</div>
					<div class="info">
						<p class="tit">
							쿠팡
						</p>
						<p class="desc">
							예제를 위한 쿠팡 홈페이지의 캡쳐본 입니다.
						</p>
						<a href="https://www.coupang.com">https://www.coupang.com</a>
					</div>
					<i class="close"></i>
				</div>
				<div class="item" id="youtube"><!-- 유튜브 -->
					<div class="preview">
						<div class="preview_inner">
							<img src="/tmp/images/youtube.jpg">
						</div>
					</div>
					<div class="info">
						<p class="tit">
							유튜브
						</p>
						<p class="desc">
							예제를 위한 유튜브 홈페이지의 캡쳐본 입니다.
						</p>
						<a href="https://www.youtube.com">https://www.youtube.com</a>
					</div>
					<i class="close"></i>
				</div>
				<div class="item" id="facebook"><!-- 페이스북 -->
					<div class="preview">
						<div class="preview_inner">
							<img src="/tmp/images/facebook.jpg">
						</div>
					</div>
					<div class="info">
						<p class="tit">
							페이스북
						</p>
						<p class="desc">
							예제를 위한 페이스북 홈페이지의 캡쳐본 입니다.
						</p>
						<a href="https://www.facebook.com/">https://www.facebook.com/</a>
					</div>
					<i class="close"></i>
				</div>
			</div>
			<!-- End : POP UP -->
		</div>
	</section>
	<section id="Skills" style="background-image: url(img/bg_05.jpg);">
		<div class="inner">
			<!-- Start : PROGRESS BAR -->
			<div id="progress_bar" class="clearfix">
				<div class="talent">
					<p class="tit">Photo Shop</p>
					<div class="bar">
						<span>50</span>
						<i></i>
					</div>
				</div>
				<div class="talent">
					<p class="tit">Illustrator</p>
					<div class="bar">
						<span>30</span>
						<i></i>
					</div>
				</div>
				<div class="talent">
					<p class="tit">HTML/CSS</p>
					<div class="bar">
						<span>60</span>
						<i></i>
					</div>
				</div>
				<div class="talent">
					<p class="tit">Javascript/Jquery</p>
					<div class="bar">
						<span>80</span>
						<i></i>
					</div>
				</div>
			</div>
			<!-- End : PROGRESS BAR -->
		</div>
	</section>
	<section id="Portfolio" style="background-color: #fa4;">
		<div class="inner">
			<!-- Start : SLIDE -->
			<div id="slide">
				<div class="slide_frm">
					<ul class="slide_cnt">
						<li class="item" style="background-image: url(img/bg_01.jpg);"></li>
						<li class="item" style="background-image: url(img/bg_02.jpg);"></li>
						<li class="item" style="background-image: url(img/bg_03.jpg);"></li>
						<li class="item" style="background-image: url(img/bg_04.jpg);"></li>
					</ul>
					<div class="controler">
						<a href="javascript:;" class="prev"></a>
						<a href="javascript:;" class="next"></a>
						<div class="navi"></div>
					</div>
				</div>
			</div>
			<!-- End : SLIDE -->
		</div>
	</section>
	<section id="Contact" style="background-image: url(img/bg_06.jpg);">
		<div class="inner">
			<!-- Start : TAB -->
			<div id="tab">
				<nav>
					<a href="javascript:;" class="selected">MENU_1</a>
					<a href="javascript:;">MENU_2</a>
					<a href="javascript:;">MENU_3</a>
					<a href="javascript:;">MENU_4</a>
				</nav>
				<div class="cnt">
					<div class="active">CONTENT_1</div>
					<div>CONTENT_2</div>
					<div>CONTENT_3</div>
					<div>CONTENT_4</div>
				</div>
			</div>
			<!-- Start : TAB -->
		</div>
	</section>
</div>
<?php
	include $_SERVER["DOCUMENT_ROOT"]."/inc/footer.php";
?>