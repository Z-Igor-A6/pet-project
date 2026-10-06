const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  
  //todo: CORS заголовки
  // 1. РАЗРЕШАЕМ CORS БРАУЗЕРУ (Добавьте эти строки)
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Если браузер делает предварительный запрос OPTIONS, сразу отвечаем 200 OK
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // 2. ОТДАЕМ НАШ JSON
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });

  //todo: Одавать данные через 40 сек
  const apiResponse = {
    status: "success",
    message: "Данные успешно получены",
    timestamp: new Date().toISOString(),
    data: {
      userId: 42,
      username: "alex_developer",
      roles: ["admin", "user", "moderator", "edSDSDSSDSDBFGFGDFGGFGFGFDGDFitor"]
    }
  };

  res.end(JSON.stringify(apiResponse));
});

server.listen(PORT, () => {
  console.log(`API сервер запущен: http://localhost:${PORT}`);
});
