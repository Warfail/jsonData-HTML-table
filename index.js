   fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
    function appendData(data) {
        var mainContainer = document.getElementById("myData");
        for (var i = 0; i < data.length; i++) {
            var table = document.createElement("tr");
            table.innerHTML = ` 
                                    <td>${data[i].id}</td>
                                    <td>${data[i].name}</td>
                                    <td>${data[i].username}</td>
                                    <td>${data[i].email}</td>
                                    <td>${data[i].address['street']},${data[i].address['suite']},${data[i].address['city']},${data[i].address['zipcode']} Geo : ${data[i].address.geo['lat']} Geo : ${data[i].address.geo['lng']}</td>
                                    <td>${data[i].company.name}</td>
                                ` ;
            mainContainer.appendChild(table);
        }
        }
