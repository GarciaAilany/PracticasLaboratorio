fetch('menu.json')
.them(response => response.json())
.then (data =>{
    const menuContainer = document.getElementById(`menu-container`);
    let total = 0;
    data.items.forEach(category =>{
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.category;
        menuContainer.appendChild(categoryTitle);

        const table = document.createElement(`table`);
        const tableContent= `<tr><th>Foto</th><th>Descripcion</th><th>Precio</th><th>Seleccionar</th></tr>`;

        category.items.forEach(item => {
            tableContent += `<tr>
                <td><img srsc="${item.image}" alt="${item.name}"></td>
                <td>${item.name} ${item.descripcion}</td>
                <td>${item.price}</td>
                <td><input type="checkbox" data-price="${item.price.replace('$','')}" onchange="updateTotal()"></td>
            </tr>`;
        });
        table.innerHTML = tableContent;
        menuContainer.appendChild(table);
    });
});
function updateTotal (){
    const checkboxes = document.querySelectorAll('input  [type = "checkbox"][data-price]');
    let currentTotal = 0;
    checkboxes.forEach(checkbox =>{
        if(checkbox.checked){
            currentTotal += parseFloat (checkbox.getAttribute ('data-price'));
        }
    });
    document.getElementById('total').textContent = currentTotal.toFixed(2);
};