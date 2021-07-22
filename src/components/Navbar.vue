<template>
  <div>
    <nav class="navbar navbar-light brand">
      <div class="container-fluid">
        <a class="navbar-brand" @click='$router.push("/")' style='font-size:120%;font-weight: bold; color: white'>Transcribe-Translate</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.brand{
  background: linear-gradient(30deg, rgb(44, 188, 99), rgb(22, 164, 138) 70%);
}
</style>