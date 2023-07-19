<script>
export default {
	props: {
		theme: {
			type: String,
			required: true,
		},
	},
	methods: {
		toggleTheme() {
			const newTheme = this.theme === 'light' ? 'dark' : 'light';
			localStorage.setItem('theme', newTheme);
			this.$emit('theme-changed', newTheme);
			this.$router.go();
		},
	},
};
</script>

<template>
	<a href="#" @click.prevent="toggleTheme" aria-label="Theme Switcher">
		<i
			v-if="theme === 'light'"
			data-feather="moon"
			class="text-liText-gray-200 hover:text-gray-400 dark:text-liText-green-700 dark:hover:text-liBorder-green-500 w-5"
		></i>
		<i
			v-else
			data-feather="sun"
			class="text-gray-200 hover:text-gray-50 w-5"
		></i>
	</a>
</template>
