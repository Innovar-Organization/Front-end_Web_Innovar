<template>
  <div class="main">
    <h2 class="main-title">Main</h2>
  </div>
</template>

<style scoped>
.main {
  margin: 20px;
  background-color: cyan;
  padding: 20px;
  text-align: center;
  min-height: 550px;
  border-radius: 5px;
}

.main-title {
  color: white;
  font-size: 24px;
}

@media (max-width: 768px) {
  .main {
    padding: 10px;
  }

  .main-title {
    font-size: 20px;
  }
}
</style>
