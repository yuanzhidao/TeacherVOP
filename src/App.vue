<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<header>
		<div class="navbar bg-base-100 shadow-xl rounded-box mb-4">
			<div class="flex-1">
				<RouterLink to="/" class="btn btn-ghost normal-case text-xl">老师语音包</RouterLink>
			</div>
			<div class="flex-none">
				<label for="modal-1" class="btn btn-ghost btn-circle">公告</label>
				<div class="dropdown dropdown-end">
					<label tabindex="0" class="btn btn-ghost btn-circle">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
					</label>
					<ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-32">
						<li><RouterLink to="/">主页</RouterLink></li>
						<li><RouterLink to="/chq">蔡汉卿</RouterLink></li>
						<li><RouterLink to="/wwj">王文静</RouterLink></li>
					</ul>
				</div>
			</div>
		</div>
	</header>

	<!-- Put this part before </body> tag -->
	<input type="checkbox" id="modal-1" class="modal-toggle" checked="checked" />
	<div class="modal modal-bottom sm:modal-middle">
		<div class="modal-box">
			<h3 class="font-bold text-lg">本站仅供22104班同学使用！！</h3>
			<p class="py-4">禁止大规模对外宣传，否则本站将停止运行。</p>
			<div class="modal-action">
				<label for="modal-1" class="btn">6收到6</label>
			</div>
		</div>
	</div>

	<div class="alert alert-warning shadow-lg mb-4">
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
			<span>禁止大规模对外传播，后果自负。</span>
		</div>
	</div>

	<RouterView />

	<footer>
		<div class="bg-base-100 shadow-xl rounded-xl my-4 p-4 flex justify-center flex-col items-center">
			<p>&copy; 2022 iYuan.</p>
			<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">沪ICP备2022026478号-3</a>
		</div>
	</footer>
</template>
