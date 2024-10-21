	const inputText = document.querySelector('#txt');//գտնում է այն էլեմնտները որոնց id-ն txt է
	const myButton = document.querySelector('.list');
	const list = document.querySelector('.div ul');
	myButton.addEventListener('click', function(e)
		{
			e.preventDefault(); //եթե սա չգրենք չի ավելացնում ՝ բառացի կանխում է լռելյայն ձևի ներկայացումը կամ կոճակի վարքագիծը
			//Եթե ինփութը դատարկ է
			if (inputText.value === "") {
				alert("Դաշտը լրացված չէ։ Խնդրում ենք լրացնել!"); 
				 
			}
			//եթե ինփութըդատարկ չէ 
			else{
					const myLi = document.createElement('li');//ստեղծում է էլեմենտ լի
					myLi.innerHTML = inputText.value;//ինփութի արժեքնը վերցնում է
					list.appendChild(myLi);//ինփութից վերցրած արժեքը կցում է ցուցակին
					const mySpan = document.createElement('span');
					mySpan.innerHTML = 'Delete';
					myLi.appendChild(mySpan);
					//երբ դելեթ սեղմենք ցուցակից տարրը հանի
					const close = document.querySelectorAll('span');
					for (let i = 0; i < close.length; i++) {
						close[i].addEventListener('click', function() {
							close[i].parentElement.style.opacity = 0;
							setTimeout(function() {
								close[i].parentElement.remove();
							}, 500);//500մլվրկ սպասում է և ջնջում է էլեմնետը ցուցակից
						});
					}
					
					
				}
				inputText.value = "";// ինփութի մեջի գրածը ցուցակում ավելացնելուց հետո մաքրել
		});
