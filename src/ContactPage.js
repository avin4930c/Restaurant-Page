function contactPage() {
    const content = document.querySelector('#content');
    const section = document.createElement('section');
    
    let h2 = document.createElement('h2');
    h2.textContent = "Contact Us";
    let p1 = document.createElement('p');
    p1.textContent = "If you have any questions or feedback, feel free to reach out to us:"
    let div = document.createElement('div');
    let input1 = document.createElement('input');
    input1.type = 'text';
    input1.placeholder = "Your Name";
    let input2 = document.createElement('input');
    input2.type = "email";
    input2.placeholder = "Email";
    let textarea = document.createElement('textarea');
    textarea.placeholder = "Your Message";
    let button = document.createElement('button');
    button.textContent = "send";
    
    div.appendChild(input1);
    div.appendChild(input2);
    div.appendChild(textarea);
    div.appendChild(button);
    
    section.appendChild(h2);
    section.appendChild(p1);
    section.appendChild(div);
    section.classList.add("contact");
    div.classList.add("contact-form");
    
    content.appendChild(section);
}

export { contactPage };