var tagDiv = document.getElementById("tag");
var projectDiv = document.getElementById("project");

var tags = ["html","css","php","java","javascript","C#"];
var tagSelected= "";

var projects = [{
    name : "gabbler",
    decription : "Un réseaux de partages",
    tags : ["html","css"]
},
{
    name : "forum",
    decription : "un forum",
    tags : ["css"]
},
{
    name : "Liste de course",
    decription : "une application de liste de course",
    tags : ["java"]
}]

function load(){
    while (projectDiv.firstChild) {
        projectDiv.removeChild(projectDiv.lastChild);
    }
    if(tagSelected.length == 0){
        for(project of projects){
            let article = document.createElement('article');
            let wrapper =document.createElement('div');
            wrapper.classList.add("article-wrapper");
            let figure =document.createElement('figure');
            let image = document.createElement('img');
            image.src = "https://picsum.photos/id/1011/800/450";
            let body = document.createElement('div');
            body.classList.add("article-body");
            let h2 = document.createElement('h2');
            h2.innerText = project.name;
            let p = document.createElement('p');
            p.innerText = project.decription;

            let a = document.createElement('a');
            a.href ="#";
            a.classList.add("read-more");
            a.innerHTML = "Read more <span class=\"sr-only\">"+ project.name +"</span>";
            a.innerHTML += "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" viewBox=\"0 0 20 20\" fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z\" clip-rule=\"evenodd\" /></svg>";
            body.appendChild(h2);
            body.appendChild(p);
            body.appendChild(a);
            figure.appendChild(image);  
            wrapper.appendChild(figure);
            wrapper.appendChild(body);
            article.appendChild(wrapper);
            projectDiv.appendChild(article);
        }
    }else{
        for(project of projects){
            if( project.tags.includes(tagSelected) ){
                let article = document.createElement('article');
                let wrapper =document.createElement('div');
                wrapper.classList.add("article-wrapper");
                let figure =document.createElement('figure');
                let image = document.createElement('img');
                image.src = "https://picsum.photos/id/1011/800/450";
                let body = document.createElement('div');
                body.classList.add("article-body");
                let h2 = document.createElement('h2');
                h2.innerText = project.name;
                let p = document.createElement('p');
                p.innerText = project.decription;

                let a = document.createElement('a');
                a.href ="#";
                a.classList.add("read-more");
                a.innerHTML = "Read more <span class=\"sr-only\">"+ project.name +"</span>";
                a.innerHTML += "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" viewBox=\"0 0 20 20\" fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z\" clip-rule=\"evenodd\" /></svg>";
                body.appendChild(h2);
                body.appendChild(p);
                body.appendChild(a);
                figure.appendChild(image);  
                wrapper.appendChild(figure);
                wrapper.appendChild(body);
                article.appendChild(wrapper);
                projectDiv.appendChild(article);
            }
        }   
    }
}


for(tag in tags){
    let child = document.createElement('button');
    child.classList.add("button");
    child.innerText = tags[tag];
    child.addEventListener("click" ,() =>{
        tagSelected= child.innerHTML;
        load();
    });
    tagDiv.appendChild(child);
}

load();