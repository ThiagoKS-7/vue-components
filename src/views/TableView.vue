<script setup>
import TableComponent from '@/components/TableComponent.vue';
</script>
<template>
    <main class="wrapper">
        <TableComponent/>
    </main>
</template>
<script>
export default {
  name: "TableView",
}
</script>
<style scoped>
.wrapper {
    display: flex;
    justify-content: center;
    padding: 2em 0;
}
</style>