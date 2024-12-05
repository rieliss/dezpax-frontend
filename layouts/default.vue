<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="/">Our Store</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://khessarin.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <nuxt />

    <footer class="bg-light text-center text-lg-start mt-5">
      <div class="container p-4">
        <div class="row">
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase">Our Store</h5>
            <p>Providing quality products for our customers.</p>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Links</h5>
            <ul class="list-unstyled mb-0">
              <li>
                <a
                  class="text-dark"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  class="text-dark"
                  href="https://khessarin.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase mb-0">Contact</h5>
            <ul class="list-unstyled">
              <li>
                <a href="mailto:khessarin@gmail.com" class="text-dark"
                  >khessarin@gmail.com</a
                >
              </li>
              <li>
                <a href="tel:+1234567890" class="text-dark">+66 99-191-2362</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2023 Our Store:
        <a class="text-dark" href="https://ourstore.com/">ourstore.com</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>
