<script>
export default {
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
			author: 'BioLOPE',
		};
	},
};
</script>

<template>
	<div class="flex justify-center items-center text-center">
		<div
			class="font-general-regular text-lg text-gray-800 dark:text-green-700"
		>
			&copy; {{ copyrightDate }}. Developed by
			<a
				href="https://google.com"
				target="__blank"
				class="font-general-medium text-gray-900 dark:text-green-50 uppercase hover:underline hover:text-green-700 dark:hover:text-gray-500 duration-500"
				>{{ author }}.</a
			>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
