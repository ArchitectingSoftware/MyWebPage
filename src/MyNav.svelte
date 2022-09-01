<script lang="ts">
    import {
      Collapse,
      Container,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink,
      Dropdown,
      DropdownToggle,
      DropdownMenu,
      DropdownItem
    } from 'sveltestrap';

    import { animateScroll } from 'svelte-scrollto-element';
  
    let isOpen = false;
  
    function handleUpdate(event: any) {
      isOpen = event.detail.isOpen;
    }
  </script>

  <style>

  </style>
  

  <Navbar class="fixed-top drexel-blue"   dark expand="md">
    <NavbarBrand href="#" ><code style="color: #FFC600">/* My Address Space */</code></NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" style="border-color: #FFC600" on:update={handleUpdate}>
      <Nav class="ms-auto" navbar>
        <NavItem>
          <NavLink href="#teaching" style="color: #FFC600">TEACHING</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#research" style="color: #FFC600">RESEARCH</NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
          href="#me" style="color: #FFC600">ABOUT</NavLink>
        </NavItem>
      </Nav>
    </Collapse>

  </Navbar>
