// New Game Form
newGameForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = {
        Username: e.target.username.value,
        Password: e.target.password.value,
    };

    try {
    // Send data to backend
    const response = await fetch('http://127.0.0.1:5000/game/users/insert', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    const data = await response.json();

    // Check if data is valid and contains expected structure
    if (!data || !data[0] || !data[0]['Airport Data']) {
        throw new Error('Invalid response data structure from server');
    }

    console.log('Backend response:', data);
    currentGameData = {
    Username: formData.Username,
    Balance: data[0]['Airport Data']['Balance'],
    Airport: data[0]['Airport Data']['Airport'],
    Country: data[0]['Airport Data']['Country'],
    ICAO: data[0]['Airport Data']['ICAO'],
    Continent: data[0]['Airport Data']['Continent'],
    Latitude: data[0]['Airport Data']['Latitude & Longitude'][0],
    Longitude: data[0]['Airport Data']['Latitude & Longitude'][1],
    'Visited Countries': 0,
    'Traveled kilometers': 0,
    'Real Time Data' : data[0]['Real Time Data'] || {},
    'Question': data[0]['Question'] || '',
    quizStats: {
        totalCorrect: 0,
        totalWrong: 0,
        answeredAirports: {}
    }
    };

    originalMapData = data[0]['Map Data'] || [];
    startGameArea(currentGameData, originalMapData);
    newGameDialog.close();

} catch (error) {
    console.error('New Game Error:', error);
    document.getElementById('newGameStatus').textContent =
        error.message || "Failed to create game. Please try again.";
}
});