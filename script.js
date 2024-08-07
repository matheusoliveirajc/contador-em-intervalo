document.querySelector("#start-count-btn").addEventListener("click", function() {
    let count_number = document.querySelector("#count-number").value;
    let count_interval = document.querySelector("#count-interval").value;
    let count_display = document.querySelector("#count-display");
    count_display.innerHTML = '<h1>0</h1>';
    if (count_number <= 0) {
        window.alert("Digite um número maior do que zero para iniciar a contagem.");
    } else {
        this.style.display = 'none';
        let count = 1;
        let set_interval = setInterval(function() {
            if (count > Number(count_number)) {
                this.style.display = 'block';
                clearInterval(set_interval);
            } else {
                count_display.innerHTML = `<h1>${count}</h1>`;
                count++;
            }
        }.bind(this), count_interval);
    }
});
