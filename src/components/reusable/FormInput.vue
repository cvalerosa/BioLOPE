<script>
export default {
	props: {
		label: {
			type: String,
			default: '',
		},
		inputIdentifier: {
			type: String,
			default: '',
		},
		val: {
			type: [String, Number],
			default: '',
		},
		inputType: {
			type: String,
			default: 'text',
		},
	},
};
</script>

<template>
	<div>
		<label
			class="block mb-2 text-lg text-black dark:text-green-500"
			:for="label"
			>{{ label }}</label
		>
		<input
			class="w-full px-5 py-3 border border-gray-300 dark:border-black border-opacity-50 text-black dark:text-green-50 bg-green-700 dark:bg-gray-800 rounded-md shadow-sm text-md"
			:id="inputIdentifier"
			:name="inputIdentifier"
			:placeholder="label"
			:aria-label="inputIdentifier"
			:value="val"
			:type="inputType"
			v-bind="$attrs"
			@input="$emit('update:val', $event.target.value)"
			required
		/>
	</div>
</template>

<style lang="scss" scoped></style>
