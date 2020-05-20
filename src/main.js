import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'svelte-popper'

import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;