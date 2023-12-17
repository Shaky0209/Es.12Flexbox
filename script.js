const node = document.getElementsByClassName("content")[0];
const element = document.getElementsByClassName("card")[0];
let nodeArticle;
let article;
let title;
let paragraph;
let imgContent;
const articleContent =[
    {
        title: "Our delicious honey",
        art: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi adipisci odit beatae voluptatum a ipsam veniam reiciendis! Iure hic optio, ullam accusamus eius delectus inventore. Numquam quibusdam deleniti nisi voluptas? psum dolor, sit amet consectetur adipisicing elit. Sequi adipisci odit beatae voluptatum a ipsam veniam reiciendis! Iure hic optio, ullam accusamus eius delectus inventore. Numquam quibusdam deleniti nisi voluptas?",
    }
];

const enter = ()=>{
    element.remove();

    nodeArticle = document.createElement("div");
    nodeArticle.setAttribute("class", "nodeArticle");
    node.appendChild(nodeArticle);

    article = document.createElement("div");
    article.setAttribute("class", "article");
    title = document.createElement("h3");
    title.innerText = articleContent[0].title;
    paragraph = document.createElement("p");
    paragraph.innerText = articleContent[0].art;
    article.appendChild(title);
    article.appendChild(paragraph);
    nodeArticle.appendChild(article);

    imgContent = document.createElement("div");
    imgContent.setAttribute("class", "imgContent");
    nodeArticle.appendChild(imgContent);


    
}


const button = document.getElementsByClassName("add-to-cart")[0];
button.addEventListener("click", enter);