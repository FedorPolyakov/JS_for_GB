window.addEventListener('load',  () => {
    const player = new Player();
    player.timing.min = 0;
    player.timing.max = player.video.duration;
    player.run();
});

