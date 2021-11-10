let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];


function Product({ category, type, price }) {
    this.category = category;
    this.type = type;

    if (Array.isArray(price)) {
        this.price = price.join('-');
    } else {
        this.price = price;
    }

    this.render = function () {
        return (
            `<tr>
                <td><img src="images/${category}/${this.type}.svg" alt="${this.type}" width="50" height="50"></td>
                <td>${this.type}</td>
                <td>${this.price} USD</td>
            </tr>`
        );
    };
}


function Table() {
    this.items = [];

    this.addList = function (list, category) {
        list.forEach(item => {
            this.items.push(new Product({ ...item, category }));
        });
    }

    this.render = function () {
        const content =  this.items.map( el => el.render());

        return (
            `
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Icon</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${content}
                    </tbody>
                </table>
            `
        )
    }
}


const table = new Table();
table.addList(kitchenProducts, 'kitchen');
table.addList(devicesProducts, 'devices');
table.addList(cosmeticsProducts, 'cosmetics');
table.render();
document.write(table.render())