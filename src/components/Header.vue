<script>
/*主页头 */
import { NAvatar, NDropdown } from 'naive-ui'
import { ref, vShow } from 'vue';
import DropDownMenu from './DropDownMenu.vue'
import { store } from '../store';
import logo from '../static/logo.svg'
export default {
  components: {
    NAvatar, NDropdown, DropDownMenu, logo
  },
  setup() {
    let isShowDropMenu = ref(false)
    return {
      isShowDropMenu,
      vShow,
      store
    };
  }
}
</script>
<template>
  <div class="main">
    <div class="info">
      <logo class="logo"/>
      <n-avatar round :size="36" src="/defaultAvatar.svg" />
      <div class="username">{{ store.username }}</div>
    </div>
    <div class="handle">
      <div class="avatar" @click="isShowDropMenu = !isShowDropMenu">
        <n-avatar round :size="36" src="/defaultAvatar.svg" />
      </div>
    </div>
    <DropDownMenu v-show="isShowDropMenu"></DropDownMenu>
  </div>
</template>
<style scoped>
.main {
  margin-top: 7px;
  height: 7%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  position: relative;
}

.info {
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-items: center;
}

.handle {
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
  justify-items: center;
}

.username {
  margin-left: 10px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
}

.logo {
  width: 48px;
  margin-left: 20px;
  margin-right: 30px;
}
.avatar {
  cursor: pointer;
}
</style>

