<script>
import feather from 'feather-icons';
import ProjectsFilter from './ProjectsFilter.vue';
import ProjectSingle from './ProjectSingle.vue';
import projects from '../../data/projects';

export default {
	components: { ProjectSingle, ProjectsFilter },
	data: () => {
		return {
			projects,
			projectsHeading: 'Projects Portfolio',
			selectedCategory: '',
			searchProject: '',
		};
	},
	computed: {
		// Get the filtered projects
		filteredProjects() {
			if (this.selectedCategory) {
				return this.filterProjectsByCategory();
			} else if (this.searchProject) {
				return this.filterProjectsBySearch();
			}
			return this.projects;
		},
	},
	methods: {
		// Filter projects by category
		filterProjectsByCategory() {
			return this.projects.filter((item) => {
				let category =
					item.category.charAt(0).toUpperCase() +
					item.category.slice(1);
				console.log(category);
				return category.includes(this.selectedCategory);
			});
		},
		// Filter projects by title search
		filterProjectsBySearch() {
			let project = new RegExp(this.searchProject, 'i');
			return this.projects.filter((el) => el.title.match(project));
		},
	},
	mounted() {
		feather.replace();
	},
};
</script>

<template>
	<!-- Projects grid -->
	<section class="pt-10 sm:pt-14">
		<!-- Projects grid title -->
		<div class="text-center">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-gray-800 dark:text-green-700"
			>
				{{ projectsHeading }}
			</p>
		</div>

		<!-- Filter and search projects -->
		<div class="mt-10 sm:mt-10">
			<h3
				class="font-general-regular
					text-center text-gray-900
					dark:text-green-700
					text-md
					sm:text-xl
					font-normal
					mb-4
				"
			>
				Search projects by title or filter by category
			</h3>
			<div
				class="
					flex
					justify-between
					border-b border-green-500
					dark:border-gray-900
					pb-3
					gap-2
				"
			>
				<div class="flex justify-between gap-2">
					<span
						class="
							hidden
							sm:block
							bg-green-500
							dark:bg-gray-800
							p-2.5
							shadow-sm
							rounded-xl
							cursor-pointer
							"
					>
						<i
							data-feather="search"
							class="text-gray-800 dark:text-green-700"
						></i>
					</span>
					<input
						v-model="searchProject"
						class="font-general-medium
						pl-3
						pr-1
						sm:px-4
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
						id="name"
						name="name"
						type="search"
						required=""
						placeholder="Search Projects"
						aria-label="Name"
					/>
				</div>
				<ProjectsFilter @filter="selectedCategory = $event" />
			</div>
		</div>

		<!-- Projects grid -->
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"
		>
			<ProjectSingle
				v-for="project in filteredProjects"
				:key="project.id"
				:project="project"
			/>
		</div>
	</section>
</template>

<style scoped></style>
