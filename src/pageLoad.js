function homePage() {
    const content = document.querySelector('#content');
    const main_content = document.createElement('div');
    const header = document.createElement('header');
    const section = document.createElement('section');
    const footer = document.createElement('footer');  
    
    let h1 = document.createElement('h1');
    h1.textContent = "Welcome to Delicious Delights";
    header.appendChild(h1);
    
    let p1 = document.createElement('p');
    p1.textContent = "Indulge in a culinary journey of flavors and sensations that will tantalize your taste buds. At Delicious Delights, we bring you exquisite dishes prepared by our master chefs with passion and creativity.";
    let img = document.createElement('img');
    img.src = "https://c4.wallpaperflare.com/wallpaper/362/862/476/anime-original-cafe-wallpaper-preview.jpg";
    img.alt = "Restaurant Image";
    section.classList.add('intro');
    section.appendChild(img);
    section.appendChild(p1);
    
    let p2 = document.createElement('p');
    p2.textContent = "Contact us at: info@deliciousdelights.com";
    footer.appendChild(p2);
    
    main_content.id = "main-content";
    main_content.appendChild(header);
    main_content.appendChild(section);
    main_content.appendChild(footer);
    content.appendChild(main_content);
}

export { homePage };