let lampu = document.getElementById('lampu');
for (let i = 0; i < 60; i++) {
    let trafficLight = "";
 
	 if (i % 3 == 0) {
	    trafficLight = "hijau"
	}
	else if (i % 3 == 2) {
	    trafficLight = "biru"
	}
	else if (i % 1 == 0)  {
	    trafficLight = "merah"
	} 

    lampu.innerHTML += `<div class="traffic" id="traffic` + i + `">
    <div class="sinar bulat ${trafficLight}"></div>
    <button class="button bulat" data-index="`+ i + `"></button></div>`
}

function toggleLight(index) {
let ranti = document.getElementById('traffic' + index).querySelector('.sinar');
ranti.classList.toggle('on')
}

lampu.addEventListener('click', function (event) { 
    { let index = event.target.attributes['data-index'].value
    toggleLight(index)}
});