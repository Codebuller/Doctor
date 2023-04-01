<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    
    {
        
        items: [
            { label: 'Главная', icon: 'pi pi-fw pi-id-card', to: '/uikit/formlayout' },
            { label: 'Админ', icon: 'pi pi-code', to: '/uikit/input' },
            { label: 'Профиль', icon: 'pi pi-fw pi-id-card', to: '/uikit/floatlabel' },
            { label: 'Статистика', icon: 'pi pi-fw pi-bookmark', to: '/uikit/floatlabel' },
        ]
    },
    
    
    
    
    
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
        
    </ul>
</template>

<style lang="scss" scoped></style>
