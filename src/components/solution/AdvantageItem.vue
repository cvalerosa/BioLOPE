<script>
	export default {
		props: {
			advantage: {
				type: Object,
				required: true,
			},
		},
	}
</script>

<template>
		<div class="relative pl-16">
			<dt class="text-base font-semibold leading-7 text-gray-700">
				<div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
					<i :class="advantage.icon" />
				</div>
				{{ advantage.name }}
			</dt>
			<dd class="mt-2 text-base leading-7 text-gray-500">{{ advantage.description }}</dd>
		</div>
</template>

<style scoped></style>