$(document).on('click', '#three-dots-story', function(e) {
    e.preventDefault();
    var this_ = $(this);
    postid = this_.attr("value").valueOf();
    console.log("Story OPTIONS POST ID: " + postid)
    var containers = document.querySelectorAll("#story-options-holder")
    containers.forEach(container => {
        container.classList.remove("show");
        if (postid === container.getAttribute('value')) {
            console.log(container);
            container.classList.add("show")

            console.log("story-options-list " + container.getAttribute('value'))

        }

    })

    var blockers = document.querySelectorAll("#story-blocker")
    blockers.forEach(blocker => {

        blocker.classList.add("show")

        console.log("story-options-list blocker ")


    })

})

try {
    document.addEventListener(
        "click",
        function(event) {
            // event.preventDefault();
            if (!event.target.matches(".story-options-button")) {
                console.log("hhh");
                // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
                let nodeList = document.querySelectorAll(".story-options-holder");
                console.log(nodeList);
                nodeList.forEach(function(element) {
                    console.log(element);


                    if (element.classList.contains("show")) {
                        console.log(document.getElementById("story-options-holder"));

                        if (
                            event.target.matches(".story-options-list-close") ||
                            !event.target.closest(".story-options-list")
                        ) {
                            event.preventDefault();
                            console.log("Close popup here!");
                            element.classList.remove("show");

                        }
                    }
                })



            }
        },
        false
    )
} catch (error) {
    console.log(error)
}




$(document).on('click', '#post-options-list-close', function(e) {
    var this_ = $(this);
    postid = this_.attr("value").valueOf();
    console.log("POST OPTIONS CLOSE BUTTON POST ID: " + postid)
    var containers = document.querySelectorAll("#post-options-list")
    containers.forEach(container => {
        if (postid === container.getAttribute('value')) {
            container.classList.remove("show")

            console.log("post-options-list hide " + container.getAttribute('value'))

        }

    })
});

$(document).on('click', '#blocker', function(e) {
    var this_ = $(this);
    postid = this_.attr("value").valueOf();
    console.log("BLOCKER POST ID: " + postid)
    var containers = document.querySelectorAll("#post-options-list")
    containers.forEach(container => {
        if (postid === container.getAttribute('value')) {
            container.classList.remove("show")
            console.log("post-options-list " + container.getAttribute('value'))

        }

    })

    var blockers = document.querySelectorAll("#blocker")
    blockers.forEach(blocker => {
        if (postid === blocker.getAttribute('value')) {
            blocker.classList.remove("show")
            console.log("post-options-list blocker " + container.getAttribute('value'))

        }

    })
});