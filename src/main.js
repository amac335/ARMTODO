import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.css' // Import precompiled Bootstrap css
import '@fortawesome/fontawesome-free/css/all.min.css'
// import 'jquery';
import 'svelte-popper'
// import jQuery from "jquery"

import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;