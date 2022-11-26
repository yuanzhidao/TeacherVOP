<template>
	<div class="flex justify-center items-center flex-col">
		<img src="/assets/img/wwj.jpg" alt="王文静头像" class="rounded-full shadow-xl w-64 h-64 mt-4" />
		<div class="text-5xl mt-4">王文静</div>
	</div>
	<div class="bg-base-100 shadow-xl rounded-xl my-4 p-4">
		<p>点击按钮即可听到你老师我说话。陆续更新中，稍安勿躁🚀</p>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/nilaoshiwozaizheziyanzishuo.mp3')">你老师我在这自演自说啊</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/39le39lezanhaishangbanma.mp3')">39了39了咱还上课吗</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/ahao.mp3')">啊好</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/ang.mp3')">昂~</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/bawolajinqu.mp3')">把我拉进去</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/bienengnidediannaoang.mp3')">别neng你的电脑昂</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/bushangzanjiushangzixilea.mp3')">不上咱就上自习</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/buduia.mp3')">不对啊</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/buzhengquede.mp3')">不正确的</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/daan.mp3')">答案</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/e.mp3')">额</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/ei.mp3')">欸？（1）</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/ei2.mp3')">欸？（2）</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/emmm.mp3')">emmmm</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/en.mp3')">嗯~</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/ganshenmede.mp3')">干什么的</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/haishangkema.mp3')">还上课吗</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/jintianzhuchirenshishuia.mp3')">今天主持人是谁啊</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/jishanglema.mp3')">记上了吗</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/jiudiansanshijiudianlenimenbushangkeadouganmaqule.mp3')">9:39了你们不上课啊都干嘛去了</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/jiushiwomenshuo.mp3')">就是我们说</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/jizhulema.mp3')">记住了吗</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/laoshigangcaigeinijiangdiao.mp3')">老师刚才给你讲到</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/layixialayixia.mp3')">拉一下拉一下</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/meiyoufazuoye.mp3')">没有发作业</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/meiyoujiaozuoye.mp3')">没有交作业</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/nametongyangdaoli.mp3')">那么同样道理</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/niganmaqule.mp3')">你干嘛去了</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/nilaoshiwo.mp3')">你老师我</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/niyouweixinma.mp3')">你有微信吗</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/nizhelaoshixiecuole.mp3')">你这老师写错了</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/nizheshi.mp3')">你这是</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/ohaochenzhiminjinlailechadaotuotangle.mp3')">好陈志敏进来了查到拖堂了</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/ranhouwomenlaikanyixiaa.mp3')">然后我们来看一下啊</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/shoulinazhehongbi.mp3')">手里拿着红笔</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/tailuanle.mp3')">太乱了</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/tingmingbailema.mp3')">听明白了吗</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/wangwenjingshoujihao.mp3')">王文静手机号</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/weishenmexiebushanglewozhege.mp3')">为什么写不上了我这个</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/xiaoshipina.mp3')">小视频啊</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/xingxingxingxiakebaqitadewobujiangle.mp3')">行行行下课吧其他的我就不讲了</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/yinggaishimeiyouwentidea.mp3')">应该是没有问题的啊</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/youzhidaodema.mp3')">有知道的吗</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/yuqici.mp3')">（语气词）</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/zanmenbana.mp3')">咱们班啊</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/zanmenshuo.mp3')">咱们说</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/zanmenshuoshi.mp3')">咱们说是</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/zhebudanwushimazhenadewenti.mp3')">这不耽误事吗这哪的问题</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/zhegemao.mp3')">这个猫</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/zhengdalv.mp3')">正答率</button>
		<button class="btn btn-success mr-4 mt-4 player" @click="play('/assets/voice/wwj/zuotiandezuoyemeiyoutijiao.mp3')">昨天的作业没有提交</button>
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
