

const card = document.getElementById('card')
const data = [
    {
        image: 'https://www.bonjourfete.com/cdn/shop/products/new-years-eve-bar-cart-bonjour-fete-5_9b9f6abd-a6d3-412a-b4cc-b6f92bae1a82.jpg?v=1670527571&width=1080',
        name: 'Wine Bottle',
        price: '125.00',
    },
    {
        image: 'https://proviant.kz/images/stories/virtuemart/product/_________________56658d6e30d25.jpg',
        name: 'Santa Bag',
        price: '155.00',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfVlX6lOWrwPQHuARrAbg5N-6ybpx1HbIwg&s',
        name: 'Santa Cap',
        price: '230.00',
    },
    {
        image: 'https://i.pinimg.com/236x/19/8e/cd/198ecdf29f5a4d3b57b8afc1167d86e6.jpg',
        name: 'Foot Gloves',
        price: '60.00',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2H4aNwdR786Dl0NZcnhIlHquByPekbYGUhg&s',
        name: 'Door Docating',
        price: '115.00',
    },
    {
        image: 'https://m.media-amazon.com/images/I/61ct8MwbNvL._AC_UF894,1000_QL80_.jpg',
        name: 'Treo Candle ',
        price: '200.00',
    },
    {
        image: 'https://cuturie.com.ua/components/com_virtuemart/shop_image/product/_________________50bc62636eed4.jpg',
        name: 'Santa',
        price: '150.00',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnRpjYsgbOYR9w7UcdpieuVYLKG-5bOrN_iw&s',
        name: 'Docoration light',
        price: '120.00',
    }


]

const cardsContainer = document.getElementById('cards-container');

data.forEach((item) => {
    const card = document.createElement('div');
    const cardImage = document.createElement('img');
    const cardName = document.createElement('h2');
    const cardPrice = document.createElement('span');

    cardImage.src = item.image;
    cardName.textContent = item.name;
    cardPrice.textContent = item.price + ' $';

    card.appendChild(cardImage);
    card.appendChild(cardName);
    card.appendChild(cardPrice);

    card.classList.add('card');

    cardsContainer.appendChild(card);
});


const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100 && window.scrollY < 300) {
        header.style.transform = 'translateY(-50vh)'
    } else if (window.scrollY > 300) {
        header.style.transform = 'translateY(0vh)'
        header.style.background = 'linear-gradient(5deg, red 45%, #ffc6c6 120%)'
    } else {
        header.style.transform = 'translateY(0vh)'
        header.style.background = ""
    }
});





const NUMBER_OF_SNOWFLAKES = 500;
const MAX_SNOWFLAKE_SIZE = 5;
const MAX_SNOWFLAKE_SPEED = 0.5;
const SNOWFLAKE_COLOUR = '#ddd';
const snowflakes = [];

const canvas = document.createElement('canvas');
canvas.classList.add('snows')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');


const createSnowflake = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
    color: SNOWFLAKE_COLOUR,
    speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
    sway: Math.random() - 0.5 // next
});

const drawSnowflake = snowflake => {
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
    ctx.fillStyle = snowflake.color;
    ctx.fill();
    ctx.closePath();
}

const updateSnowflake = snowflake => {
    snowflake.y += snowflake.speed;
    snowflake.x += snowflake.sway; // next
    if (snowflake.y > canvas.height) {
        Object.assign(snowflake, createSnowflake());
    }
}

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach(snowflake => {
        updateSnowflake(snowflake);
        drawSnowflake(snowflake);
    });

    requestAnimationFrame(animate);
}

for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
    snowflakes.push(createSnowflake());
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// setInterval(animate, 15);
animate()



const section1 = document.getElementById('section1')

const makes = [
    {
        image: 'https://img.freepik.com/premium-vector/merry-christmas-vector-background-with-christmas-elements_9327-412.jpg?w=740',
        name: 'CHRISMAS GIFTS',
    },
    {
        image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSlGk3nvrczC2ZUFm6kp2JmRpvXdYc13_BhuB6TA-_IpjryaqcQ',
        name: 'NEW COSTUMES',
    },
    {
        image: 'https://scontent.fala8-1.fna.fbcdn.net/v/t1.6435-9/80434657_103806967784246_8590921356441288704_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JRV-VTcwvUkQ7kNvgEcRcN9&_nc_zt=23&_nc_ht=scontent.fala8-1.fna&_nc_gid=A1F23Eb_ljI82pGuD8u7Fa3&oh=00_AYBHwry88IIr0PphR7mErthqvpXka1ur2rKce108eo-Tog&oe=67931822',
        name: 'CHRISTMAS GIFTS',
    },
    {
        image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS_aqnrF2KZXZqzFFNxwvzO6f0Puf9GqyniyCnUnYG9H4u9kX3b',
        name: 'DECORE LOGHTING',
    },
]
makes.forEach((itam) => {
    const sec = document.createElement('div')
    const secimg = document.createElement('img')
    const secName = document.createElement('h2')
    
    secName.classList.add('names')
    secimg.classList.add('images')
    secimg.src = itam.image
    secName.textContent = itam.name

    sec.appendChild(secimg)
    sec.appendChild(secName)
    sec.classList.add('sec')

    section1.appendChild(sec)
})




const section2 = document.getElementById('section2')

const talk = [
    

    {
        image: 'https://www.bonjourfete.com/cdn/shop/products/new-years-eve-bar-cart-bonjour-fete-5_9b9f6abd-a6d3-412a-b4cc-b6f92bae1a82.jpg?v=1670527571&width=1080',
        name: 'Wine Bottle',
        price: '125.00',
    },
    {
        image: 'https://proviant.kz/images/stories/virtuemart/product/_________________56658d6e30d25.jpg',
        name: 'Santa Bag',
        price: '155.00',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfVlX6lOWrwPQHuARrAbg5N-6ybpx1HbIwg&s',
        name: 'Santa Cap',
        price: '230.00',
    },
    {
        image: 'https://i.pinimg.com/236x/19/8e/cd/198ecdf29f5a4d3b57b8afc1167d86e6.jpg',
        name: 'Foot Gloves',
        price: '60.00',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2H4aNwdR786Dl0NZcnhIlHquByPekbYGUhg&s',
        name: 'Door Docating',
        price: '115.00',
    },
    {
        image: 'https://m.media-amazon.com/images/I/61ct8MwbNvL._AC_UF894,1000_QL80_.jpg',
        name: 'Treo Candle ',
        price: '200.00',
    },
    {
        image: 'https://cuturie.com.ua/components/com_virtuemart/shop_image/product/_________________50bc62636eed4.jpg',
        name: 'Santa',
        price: '150.00',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnRpjYsgbOYR9w7UcdpieuVYLKG-5bOrN_iw&s',
        name: 'Docoration light',
        price: '120.00',
    }
]

const btn = document.getElementById('btn')
talk.forEach((itm) => {
    const ces = document.createElement('div')
    const cesimg = document.createElement('img')
    const cesprice = document.createElement('span')
    const cesName = document.createElement('h2')

    cesimg.src = itm.image
    cesName.textContent = itm.name
    cesprice.textContent = itm.price + '$'

    ces.appendChild(cesimg);
    ces.appendChild(cesName);
    ces.appendChild(cesprice);
    

    ces.classList.add('ces')

    section2.appendChild(ces)
})

