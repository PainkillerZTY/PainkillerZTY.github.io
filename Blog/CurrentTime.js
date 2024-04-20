function displayCurrentTime() {
  const currentTimeElement = document.getElementById('currentTime');
  const now = new Date();

  // 格式化时间，例如：HH:mm:ss
  const formattedTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

  currentTimeElement.textContent = formattedTime;
}

// 每隔1秒更新一次时间
setInterval(displayCurrentTime, 1000);