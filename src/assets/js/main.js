const Main = () => {
   
    /**
     * Easy selector helper function
     */
     const select = (el, all = false) => {
      //  if(!el){
      //   return
      //  }
        el = el.trim()
        if (all) {
          return [...document.querySelectorAll(el)]
        } else {
          if(el != '')
          return document.querySelector(el)
        }
      }
    
      /**
       * Easy event listener function
       */
      const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
          if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
          } else {
            selectEl.addEventListener(type, listener)
          }
        }
      }
    
      /**
       * Easy on scroll event listener 
       */
      const onScroll = (el, listener) => {
        el.addEventListener('scroll', listener)
      }
    
      /**
       * Navbar links active state on scroll
       */
      let navbarlinks = select('#navbar .scrollto', true)
      const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
          if (!navbarlink.hash) return
          let section = select(navbarlink.hash)
          if (!section) return
          if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classList.add('active')
          } else {
            navbarlink.classList.remove('active')
          }
        })
      }
      window.addEventListener('load', navbarlinksActive)
      onScroll(document, navbarlinksActive)
    
      /**
       * Scrolls to an element with header offset
       */
      const scrollto = (el) => {
        let header = select('#header')
        let offset = header.offsetHeight
    
        let elementPos = select(el).offsetTop
        window.scrollTo({
          top: elementPos - offset,
          behavior: 'smooth'
        })
      }
    
      /**
       * Toggle .header-scrolled class to #header when page is scrolled
       */
      
      
      
      
      let selectHeader = document.querySelector('#header')
      let selectTopbar = document.querySelector('#topbar')
      // let selectNav = document.querySelector('.our-services-div')
      // let selectNav2 = document.querySelector('.solution-div')

      if (selectHeader) {
        const headerScrolled = () => {
          if (window.scrollY > 100) {
            selectHeader.classList.add('header-scrolled')
            // selectNav.style.top = '-60px'
            // selectNav2.style.top = '-60px'
            // selectNav.style.transition = 'all 0.5s'
            // selectNav2.style.top = 'all 0.5s'
            if (selectTopbar) {
              selectTopbar.classList.add('topbar-scrolled')
            }
          } else {
            selectHeader.classList.remove('header-scrolled')
            if (selectTopbar) {
              selectTopbar.classList.remove('topbar-scrolled')
          //     selectNav.style.top = '0px'
          //     selectNav2.style.top = '0px'
          // selectNav.style.transition = ''
          // selectNav2.style.top = ''
            }
          }
        }
        window.addEventListener('load', headerScrolled)
        onScroll(document, headerScrolled)
      }
    
  
  
  
  
  
  
  
  
      /**
       * Back to top button
       */
      let backtotop = select('.back-to-top')
      if (backtotop) {
        const toggleBacktotop = () => {
          if (window.scrollY > 100) {
            backtotop.classList.add('active')
          } else {
            backtotop.classList.remove('active')
          }
        }
        window.addEventListener('load', toggleBacktotop)
        onScroll(document, toggleBacktotop)
      }
    
      /**
       * Mobile nav toggle
       */
      on('click', '.mobile-nav-toggle', function() {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
      })
    
      /**
       * Mobile nav dropdowns activate
       */
      on('click', '.navbar .dropdown > a', function(e) {
        if (select('#navbar').classList.contains('navbar-mobile')) {
          e.preventDefault()
          this.nextElementSibling.classList.toggle('dropdown-active')
        }
      }, true)
    
      /**
       * Scrool with ofset on links with a class name .scrollto
       */
      on('click', '.scrollto', function(e) {
        if (select(this.hash)) {
          e.preventDefault()
    
          let navbar = select('#navbar')
          if (navbar.classList.contains('navbar-mobile')) {
            navbar.classList.remove('navbar-mobile')
            let navbarToggle = select('.mobile-nav-toggle')
            navbarToggle.classList.toggle('bi-list')
            navbarToggle.classList.toggle('bi-x')
          }
          scrollto(this.hash)
        }
      }, true)
    
      /**
       * Scroll with ofset on page load with hash links in the url
       */
      window.addEventListener('load', () => {
        if (window.location.hash) {
          if (select(window.location.hash)) {
            scrollto(window.location.hash)
          }
        }
      });
    
      /**
       * Preloader
       */
      let preloader = select('#preloader');
      if (preloader) {
        window.addEventListener('load', () => {
          preloader.remove()
        });
      }


      document.querySelectorAll('.gototop').forEach(ell=>{
        ell.addEventListener("click", ()=>{
          window.scrollTo({ top: 0, behavior: "smooth" });
        })
      })
      




} 

export default Main