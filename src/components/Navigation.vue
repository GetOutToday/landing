<template>
  <div class="container-lg">
    <div class="nav-container">
      <div class="logo-container">
        <a class="nav-item">
          GetOut.today
        </a>
      </div>
      <a class="nav-item">Features</a>
      <a class="nav-item">Demo</a>
      <div class="login-container">
        <a class="nav-item">Try it free</a>
        <a class="nav-item">Sign in</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style scoped>

.nav-item {
  padding: 0 25px;
  display: inline-block;
  height: 50px;
  white-space: nowrap;
  user-select: none;
  font-size: 17px;
  line-height: 50px;
  margin: 0;
}

.nav-container, .login-container {
  position: relative;
  display: flex;
}

.nav-container {
  justify-content: center;
}

.login-container {
  position: absolute;
  top: 0;
  right: 0;
}

.logo-container {
  position: absolute;
  top: 0;
  left: 0;
}

</style>
