<template>
	<div class="hero rounded-xl overflow-hidden bg-contain mb-4" style="background-image: url(/assets/img/chq.png)">
		<div class="hero-overlay bg-opacity-60"></div>
		<div class="hero-content text-center text-neutral-content">
			<div class="max-w-md py-8">
				<h1 class="mb-5 text-5xl font-bold">小菜语音包</h1>
				<p class="mb-5">暂时完善（？</p>
				<RouterLink class="btn btn-primary" to="/chq">点我前往</RouterLink>
			</div>
		</div>
	</div>

	<div class="hero rounded-xl overflow-hidden bg-contain mb-4" style="background-image: url(/assets/img/wwj.jpg)">
		<div class="hero-overlay bg-opacity-60"></div>
		<div class="hero-content text-center text-neutral-content">
			<div class="max-w-md py-8">
				<h1 class="mb-5 text-5xl font-bold">你老师语音包</h1>
				<p class="mb-5">正在开发中.</p>
				<RouterLink class="btn btn-primary" to="/wwj">点我前往</RouterLink>
			</div>
		</div>
	</div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
