<script>
export default {
  props: ['title'],
  data: () => {
    return {
      //
    };
  },
};
</script>

<template>
  <button class="text-md font-general-medium bg-green-500 dark:bg-gray-800 hover:bg-green-700 dark:hover:bg-gray-900 text-white dark:text-gray-400 shadow-sm rounded-md px-5 py-2.5 duration-300 max-w-full px-8 py-4 bg-gradient-to-r from-green-500 to-green-200 dark:from-gray-800 dark:to-gray-600 border border-[#A1CCA5] dark:border-gray-800">
    
    {{ title }}
  </button>
</template>

<style lang="scss" scoped></style>