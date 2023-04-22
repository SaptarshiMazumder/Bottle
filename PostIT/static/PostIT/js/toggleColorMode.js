document.getElementById("theme").addEventListener("click", function() {
    lightNavDivs = document.querySelectorAll('nav[class*="light"]');

    console.log(lightNavDivs);
    lightNavDivs.forEach(function(div) {
        const classes = div.className.split(" ");
        const lightClassIndex = classes.findIndex(function(className) {
            return className.includes("light");
        });

        if (lightClassIndex !== -1) {
            const darkClass = classes[lightClassIndex].replace("light", "dark");
            classes.splice(lightClassIndex, 1, darkClass);
            div.className = classes.join(" ");
        }
    });

    lightBodyDivs = document.querySelectorAll('body[class*="light"]');
    console.log(lightBodyDivs);
    lightBodyDivs.forEach(function(div) {
        const classes = div.className.split(" ");
        const lightClassIndex = classes.findIndex(function(className) {
            return className.includes("light");
        });

        if (lightClassIndex !== -1) {
            const darkClass = classes[lightClassIndex].replace("light", "dark");
            classes.splice(lightClassIndex, 1, darkClass);
            div.className = classes.join(" ");
        }
    });

    lightDivs = document.querySelectorAll('div[class*="light"]');
    console.log(lightDivs);
    lightDivs.forEach(function(div) {
        const classes = div.className.split(" ");
        const lightClassIndex = classes.findIndex(function(className) {
            return className.includes("light");
        });

        if (lightClassIndex !== -1) {
            const darkClass = classes[lightClassIndex].replace("light", "dark");
            classes.splice(lightClassIndex, 1, darkClass);
            div.className = classes.join(" ");
        }
    });

    lightLis = document.querySelectorAll('li[class*="light"]');
    console.log(lightDivs);
    lightLis.forEach(function(div) {
        const classes = div.className.split(" ");
        const lightClassIndex = classes.findIndex(function(className) {
            return className.includes("light");
        });

        if (lightClassIndex !== -1) {
            const darkClass = classes[lightClassIndex].replace("light", "dark");
            classes.splice(lightClassIndex, 1, darkClass);
            div.className = classes.join(" ");
        }
    });

    lightAs = document.querySelectorAll('a[class*="light"]');
    console.log(lightDivs);
    lightAs.forEach(function(div) {
        const classes = div.className.split(" ");
        const lightClassIndex = classes.findIndex(function(className) {
            return className.includes("light");
        });

        if (lightClassIndex !== -1) {
            const darkClass = classes[lightClassIndex].replace("light", "dark");
            classes.splice(lightClassIndex, 1, darkClass);
            div.className = classes.join(" ");
        }
    });

});