<template>
  <div class="main">
    <h2 class="main-title">Main</h2>
    <div class="content">
      <div class="left-column">
        <h3>Horários Bloqueados</h3>
        <div class="time-list">
          <div class="time" v-for="(blockedTime, index) in blockedTimes" :key="index">
            {{ blockedTime }}
          </div>
        </div>
        <input v-model="newBlockedTime" @keyup.enter="addBlockedTime" placeholder="Adicionar horário">
      </div>
      <div class="middle-column">
      
      </div>
    
      <div class="right-column">
    
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blockedTimes: [],
      newBlockedTime: "",
    };
  },
  methods: {
    addBlockedTime() {
      if (this.newBlockedTime.trim() !== "") {
        this.blockedTimes.push(this.newBlockedTime);
        this.newBlockedTime = "";
      }
    },
  },
};
</script>

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

.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.left-column {
  width: 30%; 
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}

.middle-column {
  width: 30%; 
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}

.right-column {
  width: 30%; 
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}

.time-list {
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid black;
}

.time {
  padding: 5px;
}
</style>
