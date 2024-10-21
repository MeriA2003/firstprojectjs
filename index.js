	const inputText = document.querySelector('#txt');
	const myButton = document.querySelector('.list');
	const list = document.querySelector('.div ul');
	myButton.addEventListener('click', function(e)
		{
			e.preventDefault(); 
			if (inputText.value === "") {
				alert("Դաշտը լրացված չէ։ Խնդրում ենք լրացնել!"); 
				 
			}
			else{
					const myLi = document.createElement('li');
					myLi.innerHTML = inputText.value;
					list.appendChild(myLi);
					const mySpan = document.createElement('span');
					mySpan.innerHTML = 'Delete';
					myLi.appendChild(mySpan);
					const close = document.querySelectorAll('span');
					for (let i = 0; i < close.length; i++) {
						close[i].addEventListener('click', function() {
							close[i].parentElement.style.opacity = 0;
							setTimeout(function() {
								close[i].parentElement.remove();
							}, 500);
						});
					}
					
					
				}
				inputText.value = "";// ինփութի մեջի գրածը ցուցակում ավելացնելուց հետո մաքրել
		});
