<template>
  <div class="menu">
    <nav>
      <RouterLink to="/" class="nav-item" active-class="active">Заказы</RouterLink>
      <RouterLink to="/employers" class="nav-item" active-class="active">Сотрудники</RouterLink>
      <RouterLink to="/statistics" class="nav-item" active-class="active">Статистика</RouterLink>
      <RouterLink to="/reports" class="nav-item" active-class="active">Отчеты</RouterLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

</script>


<style scoped>
.menu {
  display: flex;
  background-color: var(--vt-c-white);
  border-radius: 999px;
  padding: 8px;
}

nav {
  display: flex;
}

.nav-item {
  padding: 8px 16px;
  background-color: var(--vt-c-white);
  color: var(--color-text);
  border-radius: 999px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
}

.active {
  background-color: var(--vt-c-primary);
}
</style>
