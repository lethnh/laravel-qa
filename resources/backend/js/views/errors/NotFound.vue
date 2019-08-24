<template>
  <div class="error-box">
    <div class="row">
      <div class="col-sm-12 text-sm-center">
        <h1>404</h1>
        <h5>Whoops! You got Lost!</h5>
        <a class="btn btn-lg bg-yellow" href="/">
          <i class="fas fa-arrow-left"></i> Go Back
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
.error-box {
  border-radius: 4px;
  left: 50%;
  margin: 0 auto;
  margin-bottom: 45px;
  padding: 20px;
  position: absolute;
  top: 50%;
  color: #000;
  -webkit-transform: translate(-50%, -60%);
  transform: translate(-50%, -60%);
  width: 800px;
}
.error-box h1 {
  font-size: 10rem;
  color: lightpink;
  margin-bottom: 2rem;
}
.error-box h5 {
    font-size: 2rem;
    color: #000;
    margin-bottom: 40px;
}
</style>