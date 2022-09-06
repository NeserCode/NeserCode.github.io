<template></template>

<script setup>
import { useSidebarItems } from "../composables";

const sidebar = useSidebarItems();

console.log(sidebar.value[0]);
</script>