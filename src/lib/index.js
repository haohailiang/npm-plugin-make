import ToastComponent from './vue-toast-haohailiang.vue'

let Toast = {}

Toast.install = (Vue, options) => {
	var opt = {
		duration:3000
	}

	for(var key in options){
		opt[key] = options[key]
	}

	Vue.prototype.$toast = (message, option) => {
		if(typeof option == 'object'){
			for(var key in option){
				opt[key] = option[key];
			}
		}

		const ToastController = Vue.extend(ToastComponent);

		let instance = new ToastController().$mount(document.createElement('div'))
		instance.message = message;
		instance.visible = true;

		document.body.appendChild(instance.$el);

		setTimeout(() => {
			instance.visible = false;
			document.body.removeChild(instance.$el)
		}, opt.duration)
	}

	Vue.prototype.$toast['show'] = (message, option) => {
		Vue.prototype.$toast(message, option);
	}
}

if(window.Vue){
	window.Vue.use(Toast);
}

export default Toast;