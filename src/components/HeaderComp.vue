<template>
  <div class="header">
    <h2 class="header-text">Este é o Header</h2>
  </div>
</template>

<style scoped>
.header {
  background-color: cyan;
  height: 160px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}

.header-text {
  color: white;
  font-size: 24px; 
}

@media (max-width: 768px) {
   .header-text {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .header-text {
    font-size: 16px;
  }
}
</style>
