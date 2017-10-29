<template>
	<section class="toast-container">
		<div class="toast" v-show="visible">
			<span>{{ message }}</span>
		</div>
	</section>
</template>
<style>
	.toast-container{
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 2000;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.toast-container .toast{
		padding: 10px 20px;
		background: rgba(0,0,0,.8);
		border-radius: 10px;
		color: #fff;
	}
</style>
<script>
	export default {
		data(){
			return {
				visible:false,
				message:''
			}
		}
	}
</script>