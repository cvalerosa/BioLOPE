<script>
export default {
	props: ['client'],
};
</script>

<template>
	<div>
		<img
			:src="client.img"
			:alt="client.title"
			class="w-64 py-5 px-10 border border-green-700 dark:border-gray-800 shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-green-50"
		/>
	</div>
</template>

<style lang="scss" scoped></style>
