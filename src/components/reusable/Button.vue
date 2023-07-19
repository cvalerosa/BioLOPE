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
  <button class="text-md font-general-medium bg-green-500 hover:bg-green-700 text-white shadow-sm rounded-md px-5 py-2.5 duration-300 max-w-full px-8 py-4 bg-gradient-to-r from-[#709775] to-[#A1CCA5] border border-[#A1CCA5] text-white">
    {{ title }}
  </button>
</template>

<style lang="scss" scoped></style>