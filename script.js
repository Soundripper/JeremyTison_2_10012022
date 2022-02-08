function toggleActive() {
	if (document.querySelector('a.active') !== null) {
	  document.querySelector('a.active').classList.remove('active');
	}
	event.target.className = "active";
  }