function menuPage() {
    const content = document.querySelector('#content');
    const section = document.createElement('section');
    
    let images = ["https://wallpapercave.com/wp/wp5712622.jpg", "https://w0.peakpx.com/wallpaper/199/947/HD-wallpaper-food-drinks-archives-anime-food.jpg", "https://wallpapercave.com/wp/wp12634944.png"];
    let TextContent = ["Bento Boxes", "Delicious Sushi", "Ramen Paradise"];
    let ParaContent = ["Enjoy the perfect blend of flavors and textures with our thoughtfully curated bento boxes, each a delightful meal on its own.", "Experience the art of sushi-making with our fresh and delectable assortment of nigiri, sashimi, and maki rolls.", "Warm your soul with our authentic ramen dishes, featuring rich broth, tender noodles, and a variety of toppings."];
    
    for (let x = 0; x < 3; x++) {
        let div = document.createElement('div');
        div.classList.add('feature');
        let img = document.createElement('img');
        img.src = images[x];
        img.alt = `Feature ${x + 1}`;
        let h2 = document.createElement('h2');
        h2.textContent = TextContent[x];
        let p = document.createElement('p');
        p.textContent = ParaContent[x];
        div.classList.add('feature');
        section.classList.add('features');
        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(p);
        section.appendChild(div);
    }
    
    content.appendChild(section);
}

export { menuPage };