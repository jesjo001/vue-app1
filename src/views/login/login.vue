<template>
  <div class="hello">
    <div class="d-flex flex-row">
      <div class="align-items-stretch flex-fill overview w-50">hello</div>

      <!-- Section -->
      <div class="align-items-stretch flex-column flex-fill w-50">
        <div
          class="row mx-3 mt-5 iconArea d-flex align-items-center"
        >
            <div class="col iconStyle">
              <span><i class="fa-brands fa-google fa-2x googleIcon"></i></span>
              <h6>Google</h6>
            </div>
            <div class="col iconStyle">
                <span><i class="fa-brands fa-facebook fa-2x fbIcon"></i></span>
                <h6>Facebook</h6>
              </div>
            <div class="col iconStyle">
              <span>
                <i class="fa-brands fa-apple fa-2x "></i></span>
                <h6>Apple ID</h6>
            </div>
        
        </div>
        <div class="d-flex align-items-stretch flex-column align-items-center formArea">
          <form class="column g-3 m-5">
            <div class="mb-5">
              <label for="exampleFormControlInput1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>

            <div class="mb-5">
              <label for="exampleFormControlInput1" class="form-label"
                >Password</label
              >
              <input
                type="password"
                class="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Enter Password"
              />
            </div>
            <div class="form-check mb-5">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Remember me
              </label>
            </div>

            <div class="col-auto d-grid gap-2 my-4">
              <button type="submit" class="btn btn-success btn-lg mb-3">
                Login
              </button>
              <h6><a href="#">Forgotten Password ?</a></h6> 
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.overview{
    background-image: url("../../assets/background.png");
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0px;
    padding: 0px;
    /* background-color: aqua; */
    height: 100vh;
}

.iconArea{
    height: 20vh;

}
.iconStyle{
    text-align: center;
}

.fbIcon{
    color: blue;
}
.googleIcon{
    color: rgb(248, 15, 15);
}

.formArea{
    display: flex;
    align-items: center;
    justify-content: center;

}

@media (max-width: 992px){

}

@media (max-width: 768px){
    .overview{
        display: none;
    }
}

</style>