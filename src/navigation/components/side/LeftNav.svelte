<script>
    import { Link } from "@jamen/svelte-router"
    import Icon from 'fa-svelte'
    import {
        faTachometerAlt,
        faColumns,
        faBookOpen,
        faChartArea,
        faChartBar,
        faAngleDown,
        faAngleRight,
        faTable,
        faCogs
    } from '@fortawesome/free-solid-svg-icons/'

    let tachometerAltIcon = faTachometerAlt
    let columnsIcon = faColumns
    let bookOpenIcon = faBookOpen
    let chartAreaIcon = faChartArea
    let chartBarIcon = faChartBar
    let angleDownIcon = faAngleDown
    let angleRightIcon = faAngleRight
    let tableIcon = faTable
    let CogsIcon = faCogs
</script>

<div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div class="sb-sidenav-menu">
            <div class="nav">
                <div class="sb-sidenav-menu-heading">Core</div>
                <a class="nav-link" href="index.html">
                    <div class="sb-nav-link-icon">
                        <Icon icon={tachometerAltIcon}></Icon>
                    </div>
                    Dashboard
                </a>
                <div class="sb-sidenav-menu-heading">Interface</div>
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts"
                    aria-expanded="false" aria-controls="collapseLayouts">
                    <div class="sb-nav-link-icon">
                        <Icon icon={columnsIcon}></Icon>
                    </div>
                    Projects
                    <div class="sb-sidenav-collapse-arrow">
                        <Icon icon={angleDownIcon}></Icon>
                    </div>
                </a>
                <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                    <nav class="sb-sidenav-menu-nested nav"><a class="nav-link" href="layout-static.html">Static
                            Navigation</a><a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a></nav>
                </div>
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="false" aria-controls="collapsePages">
                    <div class="sb-nav-link-icon">
                        <Icon icon={bookOpenIcon}></Icon>
                    </div>
                    Clients
                    <div class="sb-sidenav-collapse-arrow">
                        <Icon icon={angleDownIcon}></Icon>
                    </div>
                </a>
                <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                    <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseAuth"
                            aria-expanded="false" aria-controls="pagesCollapseAuth">Authentication
                            <div class="sb-sidenav-collapse-arrow">
                                <Icon icon={angleDownIcon}></Icon>
                            </div></a>
                        <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne"
                            data-parent="#sidenavAccordionPages">
                            <nav class="sb-sidenav-menu-nested nav"><a class="nav-link" href="login.html">Login</a><a
                                    class="nav-link" href="register.html">Register</a><a class="nav-link"
                                    href="password.html">Forgot
                                    Password</a></nav>
                        </div>
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseError"
                            aria-expanded="false" aria-controls="pagesCollapseError">Error
                            <div class="sb-sidenav-collapse-arrow">
                                <Icon icon={angleDownIcon}></Icon>
                            </div></a>
                        <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne"
                            data-parent="#sidenavAccordionPages">
                            <nav class="sb-sidenav-menu-nested nav"><a class="nav-link" href="401.html">401 Page</a><a
                                    class="nav-link" href="404.html">404 Page</a><a class="nav-link" href="500.html">500
                                    Page</a>
                            </nav>
                        </div>
                    </nav>
                </div>
                <div class="sb-sidenav-menu-heading">Addons</div>
                <Link class="nav-link" href="tags">
                    <div class="sb-nav-link-icon">
                        <Icon icon={chartAreaIcon}></Icon>
                    </div>
                    Tags
                </Link>
                <Link class="nav-link" href="projects">
                    <div class="sb-nav-link-icon">
                        <Icon icon={tableIcon}></Icon>
                    </div>
                    Projects
                </Link>
            </div>
        </div>
        <div class="sb-sidenav-footer py-4">
             <Icon class="mr-1"  icon={CogsIcon}></Icon> Settings
            <!-- <div class="small">Setting</div> -->
            <!-- Start Bootstrap -->
        </div>
    </nav>
</div>