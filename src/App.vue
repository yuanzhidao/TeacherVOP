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
				<div class="dropdown dropdown-end">
					<label tabindex="0" class="btn btn-ghost btn-circle">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
					</label>
					<ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-32">
						<li><RouterLink to="/">主页</RouterLink></li>
						<li><RouterLink to="/chq">蔡汉卿</RouterLink></li>
					</ul>
				</div>
			</div>
		</div>
	</header>

	<RouterView />
</template>
