//line 603
settingsWait = waitForElement('[data-hook="settings"]');
				settingsWait.then(function (settingButton) {
					navBar = document.getElementsByClassName('header')[0];
					navBar.id='nothidden';
					hideNavBar = document.createElement('button');
					hideNavBar.innerText = (navBar.hasAttribute("id") ? 'Show NavBar' : 'Hide NavBar');
					hideNavBar.onclick = function () {						
						if (navBar.hasAttribute("id")) { // if(navBar.hidden)
							navBar.style.transition = "height 0.3s";
							navBar.style.height = "35px";
							navBar.removeAttribute('id'); 
							// navBar.style.transition = "height 0.3s";
							hideNavBar.innerText = 'Hide NavBar';
						}
						else { 
							navBar.style.transition = "height 0.3s";
							navBar.setAttribute("id","nothidden");
							navBar.style.height = "0px";
							hideNavBar.innerText = 'Show NavBar';
							}
					}
					
					addonSettingsPopup('game-view');
					settingButton.parentNode.appendChild(hideNavBar);
				})
// line 627
