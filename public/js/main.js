const submitBtn = document.getElementById("submitBtn");
const cityname = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".data_hide");
const getInfo = async (e) => {
    
    e.preventDefault();
    let cityVal = cityname.value;
    if (cityVal ==='') {
        city_name.innerText = 'Pleaese Write the name before search.';
        datahide.classList.add('data_hide');
    } else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&APPID=token`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
    
            const tempMod ="Clear";// arrData[0].weather[0].main;
    
            if (tempMod === "Clear") {
                temp_status.innerHTML = `<i class="fa fa-sun" aria-hidden="true" style = 'color: #eccc70;'></i>`;
            } else if (tempMod === "Clouds"){
                temp_status.innerHTML = `<i class="fa fa-cloud" aria-hidden="true" style = 'color: #f1f2f7;'></i>`
            } else if (tempMod === "Rain") {
                temp_status.innerHTML = `<i class="fas fa-cloud-rain " style = 'color: #a4b0be;'></i>`
            } else {
                temp_status.innerHTML = `<i class="fa fa-cloud" aria-hidden="true" style = 'color: #f1f2f7;'></i>`
            }
            datahide.classList.remove('data_hide');
        } catch (error) {
            city_name.innerText = 'Pleaese Enter the City name proerly.';   
            datahide.classList.add('data_hide');
        }
        
    }
}

submitBtn.addEventListener('click',getInfo );
