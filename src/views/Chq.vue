<template>
	<div class="flex justify-center items-center flex-col">
		<img src="https://tea.iyuan.ltd/assets/img/caihanqing.jpg" alt="蔡汉卿头像" class="rounded-full shadow-xl w-64 h-64 mt-4" />
		<div class="text-5xl mt-4">蔡汉卿</div>
	</div>
	<div class="bg-base-100 shadow-xl rounded-xl my-4 p-4">
		<p>点击按钮即可让小菜发声。陆续更新中，稍安勿躁🚀</p>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/chq/xyd1.mp3')">相应的</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/chq/bazijideshexiangtoudoukaikaiba.mp3')">把自己的摄像头都开开吧</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/chq/chuandaoxydwenjianjialibian.mp3')">传到相应的文件夹里边</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/chq/erjishenmedouzhailea.mp3')">耳机什么都摘了啊</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/chq/lidingxuqiaojianpan.mp3')">李丁旭敲键盘</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/chq/liuqibozailebei1.mp3')">刘骐伯在了呗</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/chq/liuyize.mp3')">刘亦泽刘亦泽</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/chq/nituilegeiwodayigeweixindianhuazhe.mp3')">你退了给我打一个微信电话这</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/chq/qitarenzhuyile.mp3')">其他人注意了</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/chq/shexiangtoubaihaolea.mp3')">摄像头摆好了啊</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/chq/suoyourenzhuajinlea.mp3')">所有人抓紧了啊</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/chq/weixinshanghuozhedingdingshanggeiwodaguolaijiuxinglea.mp3')">微信上或者钉钉上给我打过来就行了啊</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/chq/xyddingdingqun.mp3')">相应的钉钉群</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/chq/xydnidemingzi.mp3')">相应的你的名字</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/chq/zaicitixingaxiaoxinzuoyeshangdedongxibixushangchuan.mp3')">再次提醒啊小鑫作业上的东西必须上传</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/chq/zhengkezhebunengdanwubunengshuozijibuzaihu.mp3')">正课这不能耽误不能说自己不在乎</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/chq/zhuajinshijianlea.mp3')">抓紧时间了啊</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/chq/zhuajinzhunbeiyixiadongxiakaikaishexiangtou.mp3')">抓紧准备一下东西啊摄像头开开吧</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/chq/zijizhuyijiuxingle.mp3')">自己注意就行了</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/chq/zijizhuyile.mp3')">自己注意了</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/chq/zuohaobijia.mp3')">做好笔记啊</button>
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
