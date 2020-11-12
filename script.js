function stopwatch() {
    let time = document.getElementById("display")
    let start = document.getElementById("playButton")
    let pause = document.getElementById("pauseButton")
    let end = document.getElementById("resetButton")
    let interval;
    start.addEventListener("click", () => {
        let [mins, secs] = time.innerHTML.split(":")
        let interval = setInterval(() => {
            secs++
            if (secs >= 60) {
                secs = 0
                mins++
                mins < 10 ? mins = `0${mins}` : mins
            }
            secs < 10 ? secs = `0${secs}` : secs
            time.innerHTML = `${mins}:${secs}`
            showButton("PAUSE")
        }, 1000)
        end.addEventListener("click", () => {
            clearInterval(interval)
            time.innerHTML = "00:00"
            showButton("PLAY")
        })
        pause.addEventListener("click", () => {
            clearInterval(interval)
            showButton("PLAY")
        })
        function showButton(buttonKey) {
            const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
            const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
            buttonToShow.style.display = "block";
            buttonToHide.style.display = "none";
        }
    })
}
