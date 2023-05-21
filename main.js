const findMyState = () => {
    const status = document.querySelector('.status');
    const statustwo = document.querySelector('.statustwo');
    const continent = document.querySelector('.continent');
    const county = document.querySelector('.county');
    const region = document.querySelector('.region');
    const lat = document.querySelector('.lat');
    const long = document.querySelector('.long');
    const success = (position) => {
        console.log(position);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
       fetch(geoApiUrl)
       .then(res => res.json())
       .then(data => {
        continent.textContent = data.continent;
          county.textContent = data.countryName;
          status.textContent = data.principalSubdivision;
          statustwo.textContent = data.city;
          region.textContent = data.locality;
          lat.textContent = data.latitude;
          long.textContent = data.longitude;          

       })
    }
    const error = () => {
        status.textContent = "Unable to track you";
    }
    navigator.geolocation.getCurrentPosition(success, error);


    // table 
    // create a new table element
var table = document.createElement('table');

// create the table header cells and their content
var headerCell1 = document.createElement('th');
headerCell1.textContent = 'continent';

var headerCell2 = document.createElement('th');
headerCell2.textContent = 'Country';

var headerCell3 = document.createElement('th');
headerCell3.textContent = 'Status';

var headerCell4 = document.createElement('th');
headerCell4.textContent = 'Statustwo';

var headerCell5 = document.createElement('th');
headerCell5.textContent = 'Region';

var headerCell6 = document.createElement('th');
headerCell6.textContent = 'Lat';

var headerCell7 = document.createElement('th');
headerCell7.textContent = 'Long';

// create the table header row and append the header cells to it
var headerRow = document.createElement('tr');
headerRow.appendChild(headerCell1);
headerRow.appendChild(headerCell2);
headerRow.appendChild(headerCell3);
headerRow.appendChild(headerCell4);
headerRow.appendChild(headerCell5);
headerRow.appendChild(headerCell6);
headerRow.appendChild(headerCell7);

// add the header row to the table
table.appendChild(headerRow);

// create the table body rows and their cells
var bodyRow1 = document.createElement('tr');

var bodyCell1 = document.createElement('td');
bodyCell1.textContent = 'asdfsd';
bodyRow1.appendChild(bodyCell1);

var bodyCell2 = document.createElement('td');
bodyCell2.textContent = 'asdfasdf';
bodyRow1.appendChild(bodyCell2);

var bodyCell3 = document.createElement('td');
bodyCell3.textContent = 'adf';
bodyRow1.appendChild(bodyCell3);

var bodyCell4 = document.createElement('td');
bodyCell4.textContent = 'asdf';
bodyRow1.appendChild(bodyCell4);

var bodyCell5 = document.createElement('td');
bodyCell5.textContent = 'sdf';
bodyRow1.appendChild(bodyCell5);

var bodyCell6 = document.createElement('td');
bodyCell6.textContent = 'asdf';
bodyRow1.appendChild(bodyCell6);

var bodyCell7 = document.createElement('td');
bodyCell7.textContent = 'asfsda';
bodyRow1.appendChild(bodyCell7);

var bodyRow2 = document.createElement('tr');

var bodyCell8 = document.createElement('td');
bodyCell8.textContent = 'qwerty';
bodyRow2.appendChild(bodyCell8);

var bodyCell9 = document.createElement('td');
bodyCell9.textContent = 'qwertyuiop';
bodyRow2.appendChild(bodyCell9);

var bodyCell10 = document.createElement('td');
bodyCell10.textContent = 'qwe';
bodyRow2.appendChild(bodyCell10);

var bodyCell11 = document.createElement('td');
bodyCell11.textContent = 'qwerty';
bodyRow2.appendChild(bodyCell11);

var bodyCell12 = document.createElement('td');
bodyCell12.textContent = 'ert';
bodyRow2.appendChild(bodyCell12);

var bodyCell13 = document.createElement('td');
bodyCell13.textContent = 'rty';
bodyRow2.appendChild(bodyCell13);

var bodyCell14 = document.createElement('td');
bodyCell14.textContent = 'er';
bodyRow2.appendChild(bodyCell14);

// add the body rows to the table
table.appendChild(bodyRow1);
table.appendChild(bodyRow2);

// add the table to the page
document.body.appendChild(table);

    
}
document.querySelector('.find-state').addEventListener('click', findMyState);