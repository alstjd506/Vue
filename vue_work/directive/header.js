const template = /*html*/`
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/todo">Navbar</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="/post">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/todo">Link</RouterLink>
        </li>
        <li class="nav-item dropdown">
          <RouterLink class="nav-link dropdown-toggle" to="/for" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </RouterLink>
          <ul class="dropdown-menu">
            <li><RouterLink class="dropdown-item" to="/if">Action</RouterLink></li>
            <li><RouterLink class="dropdown-item" to="/event">Another action</RouterLink></li>
            <li><hr class="dropdown-divider"></li>
            <li><RouterLink class="dropdown-item" to="/dataBinding">Something else here</RouterLink></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
`;



export default {
    template,
    data(){ return {} },
    methods : {}
}