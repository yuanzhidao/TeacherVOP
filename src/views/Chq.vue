<template>
	<div class="flex justify-center items-center flex-col">
		<img src="https://tea.iyuan.ltd/assets/img/caihanqing.jpg" alt="蔡汉卿头像" class="rounded-full shadow-xl w-64 h-64 mt-4" />
		<div class="text-5xl mt-4">蔡汉卿</div>
	</div>
	<div class="bg-base-100 shadow-xl rounded-xl my-4 p-4">
		<p>点击按钮即可让小菜发声。陆续更新中，稍安勿躁🚀</p>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/chq/xyd1.mp3')">相应的</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/chq/bazijideshexiangtoudoukaikaiba.mp3')">把自己的摄像头都开开吧</button>
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
