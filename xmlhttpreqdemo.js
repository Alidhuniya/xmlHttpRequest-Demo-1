const xhr = new XMLHttpRequest(); //xmlhttprequest new object

// if you use regular function then you have to use "this" keyword
xhr.onreadystatechange = () => { //on readyState has 5 stage from 0-4, 0 means unsend, 1 means open, 2 means header received, 3 means loading, 4 means done
    if (xhr.readyState === 4) { //4 means done
        if (xhr.status === 200) { //200 means OK which is http method
            document.querySelector(".showData").textContent = xhr.responseText; // injectiing response data in class name .showData element of html
        }

        if (xhr.status === 400) { // 400 means not found which http status code
            document.write("Files not found");
        }
    }
}

xhr.open ("GET", "dummy.txt", true);  //Make request itself, open it and then send it.open method is used to create connection that accepts three parameter one is http method either GET,POST or update, second is url from where you're fetching data, third parameter is boolean which accepts true or false, true means async amd use true always unless you have to deal with server. for more learn asynchronous vs synchronous programming
xhr.send();