<template>
	<div class="flex justify-center items-center flex-col">
		<img src="/assets/img/wwj.jpg" alt="王文静头像" class="rounded-full shadow-xl w-64 h-64 mt-4" />
		<div class="text-5xl mt-4">王文静</div>
	</div>
	<div class="bg-base-100 shadow-xl rounded-xl my-4 p-4">
		<p>点击按钮即可听到你老师我说话。陆续更新中，稍安勿躁🚀</p>
	</div>
</template>
<script setup>
import { ref } from "vue";
const audio = ref(null);
function play(url) {
	if (audio.value != null) {
		audio.value.pause();
		audio.value = null;
	}
	audio.value = new Audio(url);
	audio.value.play();
}
</script>
