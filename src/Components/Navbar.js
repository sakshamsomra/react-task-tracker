import React from "react";
import image from './tri.svg';
import Form from "./Form";


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";


export default function Navbar() {

  return (
    <div>

      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <Link to = "/home"><img id="image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFfUlEQVRoge2YWWhcZRTHf+fOdqezJNPO1HRTtM2IiiIipaYoJG4PQaiieXIBFS1KRUGtINSiPrgrbliwIlZfFNeKUrEppWJaLApSUGMKCrW2mSTtZGYyd+6duceHLKaSmbnTZBqE/J/m3u9s/znf951zLixgAQv4X0PmOwCAzS+/3S2i20BUVe559qG7vvaq629mYF7hM+RdV0kCjBPhbK+680rg42/3nWcYxks//TKQtB3ntGzMC4GdOw8uKi8qPSrCZsA8d2WbdfjPo3ZZK6PAPY3YOuNn4LPd+25AjNeAcwAF3g9I4NHuzrXHTsfeGSPwyd6+C4yK+wpwHYDCj6KyacPVHd/Pxm7TCXy5b1+i7BhbgfsBHzAsIk+VMkde7+npqczWftMIbN2qxqVX9d0q6AsKKaAMvGlXQlt6rr08O1d+mkLg093frxXR14C1E172uPDATZ3rD821rzkl8Pk33y1XvzwD3Dph+wjI4xu6Ot6bSz/TMScEth08GGjL2fep6lNADCiq8pwTlmd7OjqKc+GjGmZN4LM9fdfguq8iXAAgypeuYWy6sfOKP2YfXn2cNoGde/e3VyqVl4HuiVe/gjy4oatj19yE5g0NE9i1a1dkzB99RITHgBBwUkS2xim90dnZWZ77EGvDMwFVlS96+25W0ReBVYALfOA6PHzT9esHmxZhHXgisHN332UVqbwKsh5AhR9E3U0buq480Nzw6qMqgVs+vCXoBuV5RO4quaXImQxqGo6Kyg6z7N/yUc9H9kwCVbtRy19+UlUfQJsXnQcsV9HNlr8M8NhMAtXbadHbpz+qq2SPZxkbGaNiV/AFfUQSEeJtccRobkulhnsHjRJQWDb121UGfx+kVChNrZdLZbLHslg5i6XtSz2TcIoO+aE8Vt6ibI9fWv6gHzNmEk1GCZiBGYKRtmr2PA002eNZSoUSSyIp7l63kdXJNAOZ39i+/y2GC0OMHh+lZVlLTRvqKif+OkEhU0D/sy+dojNObDBPNBWhdWUCEW9/iOFFaGxkDIC7123kwraLCflDXLTsEu68YuPEeqFu8IOHB8ln8mBAQE3oD1PqDVHqDUF/mKCGQSCXyZMZyKDq7fB5ysBkqs9Ltp/yfvWSNACOXbt+nThyklKuNEXGEQvSEEr/K2MDk4mxchYnj5wksSpRNzZPGZg0fDjTf8rrw8P9p6zPBKfoUBjKe3IzHbmhHE6x/qDf0FC//cA27lx3L2uSaQYy/byz/626OvnhPIoSUJPcV64nP/FuA1stCiN5WlfUzkJDBIYLGZ7f/XQjKlijFgBOv/er1ukXSEMxa9G6orZs0z+rVOyJsff8Iub53nQmd2TFqd8bejsDs4Gcfin3otn0DPgCftyKA7+FsQa8fYQIt/vQdBF/oH54DRGYsZCNDdXUMeMmjuUQTIM14M1PIK3YQLjFrCvbEIHJQgZMFbJ6hzqajJLL5LApYnbXFJ2CDSAQWRKtK+vtDExcINUKWa2pImAGiCVjntxMRzQVm7kv+g88EfAHxxNVrZD5g7Udta5sxYyNbwcRIahhpD+M3RvE7g3CgEkQc6r/MeMmiRWtXkLzRiCSGJ9nth/YxqFjP2OVLQ79/TPv9I0XssjiRTX1RYTUmhSxVAxFsaWIposEu2yCXTassbCxUJRYKkZqdcpzM+fpDMTb4lg5a8ZCFoqGiJ8Vr2tDREisShBNRimM5Clmraka4Qv6CLeYRBZHCYTrbxuvBI4CywHEEJa2L2X0+ChjIwXKdgV/0MeixRHiZzU20ATCAVpXJOpW2FOg8le1paoERGWHim6eejaElmUtdfv+psBwd1RbqkrALPu3WP4yKnobE5mYB4wP9U7giXnyv4AFLKDZ+Af/bgcY3JqOtwAAAABJRU5ErkJggg=="/></Link>
          <a class="navbar-brand" id="nav" href="/">Home</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link"  to="/signup">Sign up</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login"> Login</Link>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link" to="/aboutus" >
                  About Us
                </Link>
                
              </li>

            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>

            </form>
          </div>
        </div>
      </nav>




    </div>
  )
}

