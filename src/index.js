import './index.css';
import { homePage } from './pageLoad.js';
import { menuPage } from './menupage';
import { contactPage } from './contactPage.js';

const navButtons = document.querySelectorAll('a');
const content = document.querySelector('#content');
let currentPage = "1";

homePage();

navButtons.forEach(btn => btn.addEventListener('click', function(e) {
    let nextPage = e.target.getAttribute('page-value');
    console.log(nextPage);
    if (nextPage == currentPage) {
        return;
    }
    else {
        this.classList.add("active");
        document.querySelector(`[page-value="${currentPage}"]`).classList.remove("active");
        currentPage = nextPage;
        content.innerHTML = "";

        switch(currentPage) {
            case "1":
                homePage();
                break;

            case "2":
                menuPage();
                break;

            case "3":
                contactPage();
                break;
        }
    }
}));