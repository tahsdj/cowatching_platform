import video from './video.js'
import header from './header.js'
import chatboard from './chatboard.js'
import './main.sass'

header()
video()
chatboard()

new Vue({
	el: '#app',
	data: {
		msg: 'hello world'
	}
})