            const inputBox = document.getElementById("input-box");
            const listContainer = document.getElementById("list-container");
    
            // Load data from localStorage on page load
            window.onload = function () {
                if (localStorage.getItem("data")) {
                    listContainer.innerHTML = localStorage.getItem("data");
                    attachEventListenersToItems();
                }
            };
    
            function addTask() {
                if (inputBox.value === '') {
                    alert("You must write something!");
                } else {
                    let li = document.createElement("li");
                    li.innerHTML = inputBox.value;
                    listContainer.appendChild(li);
                    let span = document.createElement("span");
                    span.innerHTML = "\u00d7";
                    li.appendChild(span);
                }
                inputBox.value = "";
                attachEventListenersToItems();
                saveData(); // Save data after adding a task
            }
    
            function saveData() {
                localStorage.setItem("data", listContainer.innerHTML);
            }
    
            function attachEventListenersToItems() {
                // Attach event listeners to the newly added items
                const items = listContainer.getElementsByTagName("li");
                for (let i = 0; i < items.length; i++) {
                    items[i].addEventListener("click", function (e) {
                        if (e.target.tagName === "LI") {
                            e.target.classList.toggle("checked");
                        } else if (e.target.tagName === "SPAN") {
                            e.target.parentElement.remove();
                            saveData(); // Save data after removing a task
                        }
                    }, false);
                }
            }