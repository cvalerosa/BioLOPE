<script>
export default {
	props: {
		label: {
			type: String,
			default: '',
		},
		textareaIdentifier: {
			type: String,
			default: '',
		},
		val: {
			type: [String, Number],
			default: '',
		},
	},
};
</script>

<template>
	<div>
		<label
			class="block text-lg text-black dark:text-gray-500 mb-2"
			:for="textareaIdentifier"
			>{{ label }}</label
		>
		<textarea
		class="w-full px-5 py-3 border border-green-300 dark:border-gray-700 border-opacity-50 text-black dark:text-green-50 bg-green-100 dark:bg-gray-800 rounded-md shadow-sm text-md"
			:id="textareaIdentifier"
			:name="textareaIdentifier"
			:aria-label="textareaIdentifier"
			:placeholder="label"
			v-bind="$attrs"
			@input="$emit('update:val', $event.target.value)"
			cols="14"
			rows="6"
		></textarea>
	</div>
</template>

<style lang="scss" scoped></style>
