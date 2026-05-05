import navItems from "./data.js"

function Navigation(items) {
    const all_li = Array.from(items).map(elem=>`<li class="nav-item"><a class="nav-link link text-info text-primary display-4" href="${elem.href}">${elem.text}</a>
					</li>`)
    return `<nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
		<div class="container">
			<div class="navbar-brand">
				
				<span class="navbar-caption-wrap"><a class="navbar-caption text-info display-4" href="index.html#header05-1">IT PATH</a></span>
			</div>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<div class="hamburger">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                ${all_li}
						
					</ul>
				
				
			</div>
		</div>
	</nav>`
}

document.getElementById("menu02-0").innerHTML = Navigation(navItems)