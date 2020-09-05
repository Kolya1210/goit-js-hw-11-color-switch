const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  
  
  
  let timerId = null;
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };


  const startBtn = document.querySelector('button[data-action="start"]');
  const stopBtn = document.querySelector('button[data-action="stop"]');
  const body = document.querySelector('body');

  startBtn.addEventListener('click', onColorChange);
  stopBtn.addEventListener('click', onColorStop);

  function onColorChange(){
      timerId = setInterval(colorMix, 1000)
      startBtn.disabled = true;
  }

  function colorMix () {
      const colorNumber = randomIntegerFromInterval(0, colors.length);
      body.style.backgroundColor = colors[colorNumber];
  }

  function onColorStop () {
      clearInterval(timerId);
      startBtn.disabled = false;
  }