<script>
  import { Link } from "@jamen/svelte-router"
  import jQuery from 'jquery'
  import Icon from 'fa-svelte'
  import {
    faBars,
    faUser,
    faSearch,
    faPlus,
  } from '@fortawesome/free-solid-svg-icons/'

  let barsIcon = faBars
  let userIcon = faUser
  let searchIcon = faSearch
  let plusIcon = faPlus

  // export let name;
  let location = 'Dashboard'
  // Toggle the side navigation
  let tglSB = () => {
    jQuery("body").toggleClass("sb-sidenav-toggled");
  }


</script>

<nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    <button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" on:click={tglSB}>
      <Icon icon={barsIcon}></Icon>
    </button><Link class="navbar-brand" href="/">{location}</Link> <!-- <a class="navbar-brand" href="/" use:link>{location}</a> Navbar Search-->
    <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
      <div class="input-group">
        <input class="form-control" type="text" placeholder="Search for..." aria-label="Search"
          aria-describedby="basic-addon2" />
        <div class="input-group-append">
          <button class="btn btn-primary" type="button">
            <Icon icon={searchIcon}></Icon>
          </button>
        </div>
      </div>
    </form>
    <!-- Navbar-->
    <ul class="navbar-nav ml-auto ml-md-0">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <Icon icon={plusIcon}></Icon>
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
          <Link class="dropdown-item" href="task-list">Task</Link>
          <a class="dropdown-item" href="#">Project</a>
          <a class="dropdown-item" href="#">Client</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Tag</a>
        </div>
      </li>
      <!-- <li class="nav-item">
        <a href="#" class="nav-link" role="button">
          <Icon icon={plusIcon}></Icon>
        </a>
      </li> -->
    </ul>
  </nav>