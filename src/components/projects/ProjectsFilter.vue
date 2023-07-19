<script>
export default {
	props: {
		select: {
			type: String,
			default: 'projects',
			required: true,
		},
		selectOptions: {
			type: Array,
			default: () => [
				'Web Application',
				'Mobile Application',
				'UI/UX Design',
				'Branding & Anim',
			],
		},
	},
};
</script>

<template>
	<select
		@change="$emit('filter', $event.target.value)"
		:name="select"
		:id="select"
		class="font-general-medium
				px-4
				py-2
				border-1 border-gray-200
				dark:border-gray-900
				rounded-lg
				text-sm
				sm:text-md
				bg-green-50
				dark:bg-gray-800
				text-black
				dark:text-green-700
			"
	>
		<option value class="text-sm sm:text-md">All Projects</option>
		<option
			v-for="option in selectOptions"
			:key="option"
			:value="option"
			class="sm:text-md"
		>
			{{ option }}
		</option>
	</select>
</template>

<style lang="scss" scoped></style>
